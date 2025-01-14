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

Some unusual input values that can make your app behave abnormally can still pass this check. Can you add code to sanitise this kind of values?

You missed updating `index.html` according to an instruction in `readme.md`.

Can you think of any user input that might need to sanitise so that your app won't behave abnormally?

After the user clicks the "Set Alarm" button, there is a one second delay before the countdown clock starts showing. Can you find a way to "remove" that delay? 

### Quote Generator

#### Sprint-3/quote-generator/quotes.js
Code is good, 

The first line in `quote.js` is `// DO NOT EDIT BELOW HERE`. So you probably should insert your code before that line.

---

It would be better to show "Auto-Play: OFF" initially (to be consistent with the unchecked "Auto-Play" checkbox).

### Image Carousel

- Not all the requirements specified in "Level 1 Challenge" in `readm.md` are met.

- If a user clicks the "Auto forward" or/and "Auto Backward" **multiple** times, the display will become jittery, and clicking the "Stop" button cannot stop the images from being changed automatically.

### Todo List

The approach works in the following way:
- Represent the "application state" using only JS data.
  - For this app, the `todos` array would be the application state.
- Dynamically update the view using HTML and CSS based on the "application state".
  - The code inside `populateTodoList()` should, based on the value of `todos`,  construct the list items using the API like `document.createElement()`, and add event listeners to the `<i>` elements using `.addEventListener()`. 
- Whenever you need to mark or unmark an item as completed, change the `completed` property of the corresponding item in `todos`.
- Whenever you need to add/delete an item, do it in `todos`.
- Every time `todos` is modified, call `populateTodoList()` to update the view.

If you have difficulty figuring out how to implement this, try asking ChatGPT or ask a volunteer.
(Let me know if you want to know what question you can ask ChatGPT to get a sample code)



