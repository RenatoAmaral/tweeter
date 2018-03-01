/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(function(){ // jQuery document.ready shortcut


  function renderTweets(tweets) {

    // loops through tweets

    tweets.forEach(function(tweet) {

    // calls createTweetElement for each tweet
      const $tweet = createTweetElement(tweet);
      $('.tweets').prepend($($tweet));

    });
  }

  function createTweetElement(tweet) {

    let $tweet = $(`
      <section class="inner-tweet" >
              <header>

                  <div class="top-left">

                    <img src="${tweet.user.avatars.small}"></img>
                    <h2>${tweet.user.name}</h2>

                  </div>

                  <div class="top-right">

                    <h4>${tweet.user.handle}</h4>

                  </div>

              </header>

              <article>

                  <p> ${tweet.content.text}</p>

              </article>

              <footer>

                  <dir class="lower-left">

                      <p> 10 days ago</p>

                  </dir>

                  <div class="lower-right">

                      <i class="fas fa-flag"></i>
                      <i class="fas fa-retweet"></i>
                      <i class="fas fa-heart"></i>

                  </div>

              </footer>

          </section>
    `);
    return $tweet;
  }

  function loadTweets(){
    $.ajax({
      url: '/tweets',
      method: 'GET',
      success:  function(db){
                  let tweetsData = db;
                  renderTweets(tweetsData);
                  $('#compose textarea').val('');
                }
    });
  }

  // Event handlers

  $('#compose').on('submit', function(ev) {
    ev.preventDefault()
    let tweet = $('#compose').serialize();
    let text_remaining = $('textarea').val().length

    if (!tweet.replace(/text=/g, '')) {

      $('textarea').attr("placeholder", "Something value need be entered!");

    } else if (text_remaining > 140 ) {

          $(".counter").createTextNode("Exeeced Limit");

    } else {
        $.ajax({
          url: '/tweets',
          method: 'POST',
          data : tweet,
          success: function(newTweet){loadTweets()}
        });
      }
  });

  $('#btn-compose').click(function(){
        $(".new-tweet").slideToggle(1000);
        $('textarea').select();

    });







});



