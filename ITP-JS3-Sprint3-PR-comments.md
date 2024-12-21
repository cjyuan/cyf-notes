### Generic

Each exercise should have its own branch created from `main`. This branch currently contains modified files that don't belong to this backlog. Can you either
1. fix this branch by either rebasing it onto `main`, Or
2. close this PR and submit a new PR using a new branch created from `main?

---

Each Sprint-3 backlog (alarmclock, reading-list, slideshow, quote-generator, todo-list) should have its own branch created from `main`. Can you either fix this branch, or close this PR and create separate PR for each Sprint-3 backlog?

---

We should always respect instructions like `DO NOT EDIT BELOW HERE`; it is usually there for a good reason. If you are curious about why, you can ask ChatGPT `Why should programmers respect "DO NOT EDIT BELOW HERE" instruction in a file?`


### Alarmclock App

Code works fine if a user only clicks the "Set Alarm" button once.
If the user enters a time and then clicks the "Set Alarm" button multiple times, the countdown clock will not display properly.
Can you fix the problem?

### Quote Generator

#### Sprint-3/quote-generator/quotes.js
Code is good, 

The first line in `quote.js` is `// DO NOT EDIT BELOW HERE`. So you probably should insert your code before that line.

---

It would be better to show "Auto-Play: OFF" initially (to be consistent with the unchecked "Auto-Play" checkbox).

### Image Carousel

- Not all the requirements specified in "Level 1 Challenge" in `readm.md` are met.

- If a user clicks the "Auto forward" or/and "Auto Backward" **multiple** times, the display will become jittery, and clicking the "Stop" button cannot stop the images from being changed automatically.
