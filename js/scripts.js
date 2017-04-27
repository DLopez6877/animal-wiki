// Business (or back-end) logic:



// Everything below this line is user interface (or front-end) logic:
$(document).ready(function() {
  $("#formOne").submit(function(event) {
  var animal = $("input:radio[name=animal]:checked").val();

  if ( animal === "honeybadger") {
    $('.animalInfo').hide();
    $("#honeybadger").show();

  } else if ( animal === "coati") {
    $('.animalInfo').hide();
    $('#coati').show();
  } else {
    $('.animalInfo').hide();
    $('#doge').show();
  }

  event.preventDefault();
  });
});
