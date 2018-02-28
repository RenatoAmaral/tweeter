/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// window.onload(alert("composer-char-counter.js"));  // Just for testing

$(document).ready(function () {
  $('textarea').keyup( function(event)  {
    console.log(this);
    var text_max = 140;
    var text_length = $(this).val().length;
    var text_remaining = $(".counter").html(text_max - text_length);

    if (text_max - text_length < 0){ // When text counter gets under 0 turns text color changes to red

      text_remaining.css("color", "red");

    }else {

      text_remaining.css("color", "black");;

    }
  });
});






