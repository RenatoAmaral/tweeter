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
    var text_remaining = text_max - text_length;

    if (text_remaining < 0){

      $(".counter").html(text_remaining).css("color", "red");

    }else {

      $(".counter").html(text_remaining).css("color", "black");;

    }
  });
});




