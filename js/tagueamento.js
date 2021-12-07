// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.
function eventGa(eventCa,eventAc,eventLab) {
  ga('send', {
    hitType: 'event',
    eventCategory: eventCa,
    eventAction: eventAc,
    eventLabel: eventLab
  });
}

$('.menu-lista-contato').on('click', function(){
  eventGa('menu','entre_em_contato','link_externo')
});

$('.menu-lista-download').on('click', function(){
  eventGa('menu','download_pdf','download_pdf')
});

$('.card-montadoras').click(function () {
  let data = $(this).data()
  eventGa('analise','ver_mais',data.name)
});

function getValue(value) {
  eventGa('contato',value.id,'preencheu')
}

$('.contato').on("submit", function (event) {
  event.preventDefault();
  eventGa('contato','enviado','enviado')
});