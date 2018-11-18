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
  var a=document.forms["formConv"]["inputName"].value;
  var b=document.forms["formConv"]["inputEmail"].value;
  var c=document.forms["formConv"]["inputVerification"].value;
  if (a!="" && b!="" && c==7 ){
  var $this = $(this);
  $this.button('loading');
  setTimeout(function() {
    $this.removeClass("btn btn-danger").addClass("btn btn-success");
    $this.removeClass("disabled");
    $this.disable(true);
    $this.html('<i class="fa fa-check" style="font-size: 24px; position: relative; top: -10px; opacity: 0;">');
    $("i").animate({
      top: '+=10px',
      opacity: 1
    }, 200);
    //Resetando o formulário:
    $("#formConv")[0].reset();
    //Abrindo modal de agradecimento:
    $(".modalSent").delay(500).animate({
      top: '+=40vw',
      height: '300px',
      opacity: 1
    }, 450);
    $(".modalSent").delay(8000).animate({
      top: '-=40vw',
      height: '0px',
      opacity: 0
    }, 650);
  }, 3000);
  $("#btnClose").on('click', function() {
    $(".modalSent").hide();
    clearTimeout();
  });


$.ajax({
  dataType: 'jsonp',
  url: "https://getsimpleform.com/messages/ajax?form_api_token=10d0d55f1194da93f6d9b52b62e1eca2",
  data: {
    name: document.forms["formConv"]["inputName"].value ,
    email: document.forms["formConv"]["inputEmail"].value,
  }
}).done(function() {
  //callback which can be used to show a thank you message
  //and reset the form
  //alert("Thank you, for contacting us");
});
    }
      });

/////// FadeIn ////////
$(window).load(function() {
  $("#appear").animate({
    opacity: 1
  }, 300);
});