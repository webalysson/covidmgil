graficos = new Grafico()
graficos.add(ctx_confirmados, options_confirmados)
graficos.add(ctx_novos, options_novos)
graficos.add(ctx_diario, options_diarios)
graficos.add(ctx_media_semanal, options_media_semanal)
graficos.add(ctx_pizza, options_pizza)

//const url = 'https://covidmonsenhorgil.herokuapp.com/api/'
const url = 'http://localhost:8000/api/'


fetch(`${url}localidades/`).then(response => response.json()).then(data => {
  gerarTabela(data)
})


fetch(`${url}boletins_por_periodo/?periodo=500`).then(response => response.json()).then(data => {
  console.log(data)
  cards_numeros_totais(data)

  data.map(d => { d.data = date_format(d.data) })
  const label = data.map(d => d.data);
  graficos.update(0, [data.map(d => d.confirmados), data.map(d => d.recuperados)], label, true)
  graficos.update(1, novos_casos(data.map(d => d.confirmados)), label)
  graficos.update(2, novos_casos([data.map(d => d.notificados), data.map(d => d.descartados), data.map(d => d.confirmados)], true), label, true)
  graficos.update(3, [data.map(d => d.media_semanal)], label, true)
  graficos.update(4, gerar_pizza(data), ["Notificados", "Confirmados", "Recuperados", "Descartados"])
})


function filtrar_periodo(periodo) {
  $.ajax({
    type: "GET",
    contentType: "application/json; charset=utf-8",
    url: url + "boletins_por_periodo/",
    data: { periodo },
    dataType: "json",
    success: function (data) {
      data.map(d => { d.data = date_format(d.data) })
      const label = data.map(d => d.data);
      graficos.clearAll()
      graficos.update(0, [data.map(d => d.confirmados), data.map(d => d.recuperados)], label, true)
      graficos.update(1, novos_casos(data.map(d => d.confirmados)), label)
      graficos.update(2, novos_casos([data.map(d => d.notificados), data.map(d => d.descartados), data.map(d => d.confirmados)], true), label, true)
      graficos.update(3, [data.map(d => d.notificados), data.map(d => d.descartados)], label, true)
      graficos.update(4, gerar_pizza(data), ["Notificados", "Confirmados", "Recuperados", "Descartados"])
    }
  })
}

function filtrar_por_intervalo(inicio, limite) {
  $.ajax({
    type: 'GET',
    contentType: "application/json; charset=utf-8",
    url: url + "boletins_por_intervalo/",
    data: { inicio, limite },
    dataType: "json",
    success: function (data) {
      data.map(d => { d.data = date_format(d.data) })
      const label = data.map(d => d.data);
      graficos.clearAll()
      graficos.update(0, [data.map(d => d.confirmados), data.map(d => d.recuperados)], label, true)
      graficos.update(1, novos_casos(data.map(d => d.confirmados)), label)
      graficos.update(2, novos_casos([data.map(d => d.notificados), data.map(d => d.descartados), data.map(d => d.confirmados)], true), label, true)
      graficos.update(3, [data.map(d => d.notificados), data.map(d => d.descartados)], label, true)
      graficos.update(4, gerar_pizza(data), ["Notificados", "Confirmados", "Recuperados", "Descartados"])
    }
  })
}


function filtrar_mes(mes) {
  $.ajax({
    type: "GET",
    contentType: "application/json; charset=utf-8",
    url: url + "boletins_por_mes/",
    data: { mes },
    dataType: "json",
    success: function (data) {
      data.map(d => { d.data = date_format(d.data) })
      const label = data.map(d => d.data);
      graficos.clearAll()
      graficos.update(0, [data.map(d => d.confirmados), data.map(d => d.recuperados)], label, true)
      graficos.update(1, novos_casos(data.map(d => d.confirmados)), label)
      graficos.update(2, novos_casos([data.map(d => d.notificados), data.map(d => d.descartados), data.map(d => d.confirmados)], true), label, true)
      graficos.update(3, [data.map(d => d.notificados), data.map(d => d.descartados)], label, true)
      graficos.update(4, gerar_pizza(data), ["Notificados", "Confirmados", "Recuperados", "Descartados"])
    }
  })
}

/* ---------------------------------------------------------------
 *                    FUNÇÕES AUXILIARES
 * ---------------------------------------------------------------
*/

function gerar_pizza(array) {
  let data = [
    array[array.length - 1].notificados,
    array[array.length - 1].confirmados,
    array[array.length - 1].recuperados,
    array[array.length - 1].descartados,
  ];
  return data
}

function novos_casos(array, multiple = false) {
  let data = [];
  if (!multiple) {
    data.push(0);
    for (let i = 0; i <= array.length; i++) {
      data.push(array[i + 1] - array[i])
    }
  } else {
    for (let i = 0; i < array.length; i++) {
      let label = [];
      label.push(0)
      for (let j = 0; j <= array[i].length; j++) {
        label.push(array[i][j + 1] - array[i][j])
      }
      data.push(label)
    }
  }
  return data
}

function date_format(data) {
  var date = Date.parse(data + "T00:00:00-0300");
  date = new Date(date);
  date = new Intl.DateTimeFormat('pt-BR').format(date);
  return date
}

function cards_numeros_totais(data) {
  //formatar a data no padrão pt-BR
  //último registro de boletim cadastrado         
  ultimo_boletim = data[data.length - 1];
  //penúltimo registro de boletim para cálculo de novos casos
  penultimo_boletim = data[data.length - 2];
  //ultima semana
  ultima_semana = data[data.length - 8];
  document.getElementById('notificados').innerHTML = ultimo_boletim["notificados"];
  document.getElementById('recuperados').innerHTML = ultimo_boletim["recuperados"]; //Desde 25/05
  document.getElementById('descartados').innerHTML = ultimo_boletim["descartados"];
  document.getElementById('confirmados').innerHTML = ultimo_boletim["confirmados"];
  document.getElementById('obitos').innerHTML = ultimo_boletim["obitos"];
  //calcular a quantidade em tratamento = confirmados - (recuperados+obitos)
  document.getElementById('em_tratamento').innerHTML = parseInt(ultimo_boletim["confirmados"]) -
    (parseInt(ultimo_boletim["recuperados"]) +
      parseInt(ultimo_boletim["obitos"]));
  //Inserir a informação na página inicial
  var novos_casos = (parseInt(ultimo_boletim["confirmados"])) - (parseInt(penultimo_boletim["confirmados"]));
  var ultima_semana = (parseInt(ultimo_boletim["confirmados"])) - (parseInt(ultima_semana["confirmados"]));

  var texto_info = `Atualização: ${date_format(ultimo_boletim["data"])}
  | ${novos_casos} novos casos em relação ao boletim anterior
  | ${ultima_semana} na última semana
  `;

  document.getElementById("info_atualizacao").innerHTML = texto_info;
}