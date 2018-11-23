//Previne que o submit do form não recarregue a página:
$("#formConv").submit(function(e) {
  e.preventDefault();
});
//Função para saber se o botão fica ou não como disabled no fim do evento:
jQuery.fn.extend({
  disable: function(state) {
    return this.each(function() {
      this.disabled = state;
    });
  }
});
//Ações do botão de download (manipulando estilos/estados do bootstrap):
$(".btn").on('click', function() {

$.ajax({
  dataType: 'jsonp',
  url: "https://getsimpleform.com/messages/ajax?form_api_token=10d0d55f1194da93f6d9b52b62e1eca2",
  data: {
    name: document.forms["formConv"]["inputName"].value ,
    email: document.forms["formConv"]["inputEmail"].value,
  }
})
      });

/////// FadeIn ////////
$(window).load(function() {
  $("#appear").animate({
    opacity: 1
  }, 300);
});