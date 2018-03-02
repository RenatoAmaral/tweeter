# Tweeter Project

Tweeter is a simple, single-page Twitter clone.


## Getting to know more about it

This project was base on the files from [Lighthouse labs](https://github.com/lighthouse-labs/tweeter) repository, the **focus** here was to get the feel of working in a front & back end developing project in a very modular way.

## Functional Requirements

  - Primarily a client-side Single Page App (SPA)
  - The client-side app communicates with a server via AJAX
  - Tweets are persisted to MongoDB and survive server restart

## Display Requirements

  :sparkles: Navigation Bar:

      - is fixed to the top
      - has padding on both sides
      - contains Compose button

  :sparkles: Compose Tweet box:

      - is displayed above the list of tweets
      - contains a form for submitting tweets, which itself contains:
      - a textarea for new tweet content
      - a left-aligned button for submitting new tweets
      - contains a Character Counter, right-aligned, which by default shows 140

  :sparkles: List of Tweets:

      - displays tweets in reverse-chronological order (that is, by creation time descending)

  :sparkles: Individual Tweets:

      - have a header, which contains the user's:
          - avatar, on the left
          - name, on the left and after the avatar
          - handle, on the right
      - have a body, which contains the tweet text
      - have a footer, which displays:
          - how long ago the tweet was created, on the left
          - "Flag", "Re-tweet" and "Like" icons upon hovering over the tweet, on the right

## Behavior

    :sparkles: Navigation Bar

      - When a user clicks the Compose button in the Navigation Bar:
          - if the Compose Tweet box is currently hidden, then it is shown, and the **textarea** inside it is auto-focused
          - if the Compose Tweet box is currently showing, then it is hidden
          - in either case, transitions between 'shown' and 'hidden' states should be animated

    :sparkles: Character Counter

          - When a user types into the Compose Tweet **textarea**, the Character Counter is updated to show how many characters a user may still type (subtracting the number of characters they've typed from the maximum allowable character count of 140)

          - The Character Counter turns red (or similar) when more than 140 characters have been typed into the Compose Tweet **textarea**, and it shows how many characters over the 140 limit have been typed (using a negative number)

    :sparkles: Compose Tweet

          - When a user submits an invalid tweet (the tweet **textarea** is empty or contains more than 140 characters), an appropriate error message is displayed

          - When a user submits a valid tweet, the list of tweets is refreshed (displaying the new tweet), the Compose Tweet **textarea** is cleared, and the Character Counter is reset (to 140)


## Dependencies

- Express
- Node 5.10.x or above
- Body-parser
- Chance
- Md5
- Mongodb

## DEV Dependencies

- Nodemon


## Screenshots

!["Screenshot of tweet compose box"](/docs/compose-box.png)
!["Screenshot of tweets"](/docs/tweets.png)