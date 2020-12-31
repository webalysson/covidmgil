$('input[name="periodo"]').daterangepicker({
  "maxDate": moment().format('DD/MM/YYYY'),
  "startDate": moment().subtract(30, 'days').format('DD/MM/YYYY'),
  "minDate": "29/03/2020",
  "locale": {
    "format": "DD/MM/YYYY",
    "separator": " - ",
    "applyLabel": "Aplicar",
    "cancelLabel": "Cancelar",
    "daysOfWeek": [
      "Dom",
      "Seg",
      "Ter",
      "Qua",
      "Qui",
      "Sex",
      "Sab"
    ],
    "monthNames": [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro"
    ],
    "firstDay": 1
  }
});

const formatDate = date => {
  const d = date.split('/')
  return `${d[2]}-${d[1]}-${d[0]}`
}

$('input[name="periodo"]').on('change', function () {
  const [a, b] = $(this).val().split(' - ')
  const initial = formatDate(a)
  const final = formatDate(b)

  filtrar_por_intervalo(initial, final)
})