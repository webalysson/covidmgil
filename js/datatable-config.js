$(document).ready(function () {
  $.ajax({
    url: "https://covidmonsenhorgil.herokuapp.com/api/vacinacao/",
    success: function (response) {
      /*
      const primeiraDose = response
        .map((value) => value.primeira_dose)
        .reduce((prev, curr) => prev + curr, 0);
      const segundaDose = response
        .map((value) => value.segunda_dose)
        .reduce((prev, curr) => prev + curr, 0);
      */

      //$(".vacinados_primeira").append(JSON.stringify(primeiraDose));
      //$(".vacinados_segunda").append(JSON.stringify(segundaDose));

      $("#tabela-vacinados").DataTable({
        searching: false,
        ordering: false,
        paging: false,
        bInfo: false,
        responsible: true,
        data: response,
        columnDefs: [
          { title: "Grupo", data: "grupo", width: "40%" },
          { title: "Primeira", data: "primeira_dose", width: "30%" },
          { title: "Segunda Dose", data: "segunda_dose", width: "30%" },
        ],
        // ajax: {
        //   url: "https://covidmonsenhorgil.herokuapp.com/api/vacinacao/",
        //   dataSrc: "",
        // },
        //columns: [{ 0: "Teste" }, { 0: 1 }, { 0: 2 }],
        columns: [
          { data: "grupo" },
          { data: "primeira_dose" },
          { data: "segunda_dose" },
        ],
        language: {
          sEmptyTable: "Nenhum registro encontrado",
          sInfo: "Mostrando de _START_ até _END_ de _TOTAL_ registros",
          sInfoEmpty: "Mostrando 0 até 0 de 0 registros",
          sInfoFiltered: "(Filtrados de _MAX_ registros)",
          sInfoPostFix: "",
          sInfoThousands: ".",
          sLengthMenu: "_MENU_ resultados por página ",
          sLoadingRecords: "Carregando...",
          sProcessing: "Processando...",
          sZeroRecords: "Nenhum registro encontrado",
          sSearch: "Pesquisar",
          oPaginate: {
            sNext: "Próximo",
            sPrevious: "Anterior",
            sFirst: "Primeiro",
            sLast: "Último",
          },
          oAria: {
            sSortAscending: ": Ordenar colunas de forma ascendente",
            sSortDescending: ": Ordenar colunas de forma descendente",
          },
        },
      });
    },
  });
});
