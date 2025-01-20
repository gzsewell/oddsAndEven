# Workshop - Odds and Events

In this workshop, you'll continue to get more practice working with events and event handlers. The goal is to create an app that allows a user to enter a number which gets placed into a number bank. The user can then sort the numbers in the bank into one of two categories: odd or even.

![Preview of the app: a user types 9 into the input field and clicks a button to add it to a number bank. The user then clicks the "Sort 1" button. The 9 is moved from the number bank into the "odd" category.](odds_and_events-example_flow.png)

## Instructions

Remember to work on a local cloned copy of your forked repo, and to add your cohort team so that your code can be reviewed!

1. Read and serve `index.html` to familiarize yourself with the elements you'll be working with.
1. Write `index.js` so that your app meets the requirements below.

## Requirements

- When the user clicks the "Add Number" button, the number they entered into the input field should be added to the number bank.
- The number bank is _not_ changed if the user enters a non-numeric value.
- The number bank should display all the numbers the user has entered.
- When the "Sort 1" button is clicked, the first number in the number bank should be removed and placed into either the odd or even category.
- When the "Sort All" button is clicked, all the numbers in the number bank should be moved into either the odd or even category.
- The numbers are placed into the correct bucket based on whether they are odd or even.

## Hints

- Don't worry about updating the DOM at first! Can you get it working so that the _state_ is correctly updated when the user interacts with the app?
- Once you have the state updating correctly, then you can focus on updating the DOM to reflect the state.
- Remember to break each problem into smaller subproblems - and ask for help if you're not sure how to do that!

## Extensions

If you're done early, try to implement one or more of the following features:

- Add a button that generates a random number into the number bank
- Refactor the user input field so they can also enter a string of comma-separated numbers
- Add a way for users to choose how many numbers they want to sort in addition to just one or all
- Sort the numbers not just by odd vs even, but also in ascending order
- Add a dropdown that allows users to toggle whether the numbers are sorted in ascending or descending order

## Submission

Please submit a link to your Github repo.
