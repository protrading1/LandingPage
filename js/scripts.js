$("#formConv").submit(function(e) {
  e.preventDefault();
});

$(".btn").on('click', function() {

$.ajax({
  dataType: 'jsonp',
  url: "https://getsimpleform.com/messages/ajax?form_api_token=10d0d55f1194da93f6d9b52b62e1eca2",
  data: {
    name: document.forms["formConv"]["inputName"].value ,
    email: document.forms["formConv"]["inputEmail"].value
  }
  }).done(function() {
    window.location.href = 'index.html';
})
});

/////// FadeIn ////////
$(window).load(function() {
  $("#appear").animate({
    opacity: 1
  }, 300);
});
