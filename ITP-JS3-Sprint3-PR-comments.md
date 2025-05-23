### Generic

It's considered good practice to check the boxes in the PR template (to confirm that the listed requirements have been met) and to include a brief description of the PR.


Each exercise should have its own branch created from `main`. This branch currently contains modified files that don't belong to this backlog. Can you either
1. fix this branch by either rebasing it onto `main`, Or
2. close this PR and submit a new PR using a new branch created from `main?

---

Each Sprint-3 backlog (alarmclock, reading-list, slideshow, quote-generator, todo-list) should have its own branch created from `main`. Can you either fix this branch, or close this PR and create separate PR for each Sprint-3 backlog?

---

We should respect instructions like `DO NOT EDIT BELOW HERE`; it is usually there for a reason. If you are curious about why, you can ask ChatGPT `Why should programmers respect "DO NOT EDIT BELOW HERE" instruction in a file?`


Hoisting in JavaScript 
https://developer.mozilla.org/en-US/docs/Glossary/Hoisting


---

A better practice is to define styles in an external CSS file and use 'class' in JavaScript to apply styles to elements.


### Alarmclock App

Code works fine if a user only clicks the "Set Alarm" button once.
However, if the user enters a time and then clicks the "Set Alarm" button multiple times, the countdown clock will not display properly.
Can you fix the issue?

Some unusual input values that can make your app behave abnormally can still pass this check. Can you add code to sanitise them?

Some unusual input values can make your app behave abnormally. Can you add code to sanitise them?

You missed updating `index.html` according to an instruction in `readme.md`.

After the user clicks the "Set Alarm" button, there is a one second delay before the countdown clock starts showing. Can you find a way to get rid of that delay? 

When the countdown reaches 00:00, there is a one second delay before the alarm sound is played. Is this by design?

Here is one way to implement "Change background color when countdown reaches zero":
- Create a CSS class (in `style.css`) for the background when countdown reaches zero.
- In JS, when the countdown reaches zero, add this CSS class to `<body>`.
- In JS, whenever you need to reset the background, remove the CSS class from `<body>`.

If you can make this work, you can also change the CSS properties to make the background blinks.

### Quote Generator

#### Sprint-3/quote-generator/quotes.js
Code is working great. 

Note: It is a best practice to respect instructions like `// DO NOT EDIT BELOW HERE`.

For improved UI/UX, keeping the 'New Quote' button fixed on the page would make it easier to click.


---

It would be better to show "Auto-Play: OFF" initially (to be consistent with the unchecked "Auto-Play" checkbox).

To make variable names (for storing DOM objects) more meaningful, a better practice is to add a suffix to the variable names. For examples, `quoteEl`, `authorEl`, `newQuoteButton`.

The leading `"` and `-` appear to be for styling purposes. Keeping them in the HTML makes it easier to style or modify the view. This allows front-end developers to adjust the UI without changing any JavaScript code.

### Image Carousel

- Not all the requirements specified in "Level 1 Challenge" in `readm.md` are met.

- If a user clicks the "Auto forward" or/and "Auto Backward" **multiple** times, the display will become jittery, and clicking the "Stop" button cannot stop the images from being changed automatically.


A lot of these code are very similar. That usually means we could possibly refactor them to reduce the amount of code in the program.

For example, we can define a function to display the previous/current/next image in the following manner:
```
  // offset = -1, 0, 1 to represent previous, current, and next image respectively
  function showImage(offset) { 
     // Update currentImageIndex accordingly
     // Display images[currentImageIndex]
  }
```

Note: I think you might also be interested in knowing a trick to wrap index to prevent index out of bounds in programming.
May I suggest you ask ChatGPT "How to wrap positive and negative index in JS?".


Consider setting fixed dimensions for the displayed image to prevent the buttons from shifting positions due to changes in image size.

### Todo List

May I suggest the following approach for implementing an app with a GUI?
- Represent the "application state" using only JS data.
  - With these data, the app can construct the GUI.
  - For this todo-list app, the `todos` array (and its elements) can be used as the application state.

- In `populateTodoList()`, define the code to update the view based on the application state.
  - For examples
    - Code that constructs the list items using the API like `document.createElement()`
    - Code that adds event listeners to the `<i>` elements using `.addEventListener()`

- Whenever you need to mark or unmark an item as completed, change the `completed` property of the corresponding item in `todos`
- Whenever you need to add/delete an item, do it in `todos`
- Every time `todos` is modified, call `populateTodoList()` to update the view.

If you have difficulty figuring out how to implement this, try asking ChatGPT or ask a volunteer.
(Let me know if you want to know what question you can ask ChatGPT to get a sample code)

### Reading List
It is a better practice to separate CSS styles as much as possible from the JS code. That way, front-end developers can change the view without dealing with the JS code.

Can you specify these in style.css, and instead of setting a background color conditionally, change the statement at line 45 to assign a CSS class to bookElement conditionally?

For examples, you can specify different classes in an external CSS file, and then
- At line 31, conditionally add a CSS class to `listItem` (A HTML element can have multiple CSS classes) 
- At line 42, assign a CSS class to `image`.

