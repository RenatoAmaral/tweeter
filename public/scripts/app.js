/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(function(){ // jQuery document.ready shortcut

  // Fake data taken from tweets.json

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": {
          "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
          "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
          "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": {
          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
  ];

  function renderTweets(tweets) {

    // loops through tweets

    data.forEach(function(tweet) {

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

  // Redering Tweets

  renderTweets(data);



  // Event handlers


  $('#compose').on('submit', function(ev) {
    ev.preventDefault()
    var formData = $('#compose').serialize() // Get data from the form




  })



});



