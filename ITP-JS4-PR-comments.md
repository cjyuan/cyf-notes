## General

On a separate note, it's considered good practice to check the boxes in the PR template (to confirm that the listed requirements have been met) and to include a brief description of the PR.



## Sprint-1 (Array Destructuring)

### Sprint-1/destructuring/exercise-3/exercise.js
It might be easier to align output using the string's built-in padding functions than using space characters.

---
How would you modify this statement to align the value of `lineTotal` when its value is 10.00 or more?

The format of the output in exercise-3 is not **exact**; the spacing is off a bit.
Since the spec mentions `Pay attention to the exact formatting of the expected result.` It would be great if you can try to produce an output that matches the expected result.

## Programmer Humour
### fetch/programmer-humour/javascript.js

It is better to wrap the code to be executed on page load inside a "on window fully loaded" event listener.
```
window.addEventListener('load', function() {
  // code to be executed on window fully loaded
});
```

This way, the `<script>` tag can be safely placed anywhere in the HTML (with or without the `defer` property).

---

Since the value of `data.img` is coming from another website, there is a danger that its value can corrupt the generated string. 
For details, you can ask ChatGPT `In JS, why is constructing HTML tag using template string dangerous?`

It is safer to create HTML element using the `document.createElement()` approach.

## Challenges
### Cowsay Two
I think in `solution1.js`, the program is expected to use the **command line argument** as input, so that one can run the code with an input string "Moo moo" as
```
node solution1.js "Moo moo"
```

---

I think the expectation are
- In (3), `cowSay(saying)` should return a string that represents the cow saying the value of parameter `saying`.
- In (4), output the cow to the console as `console.log(cowSay(...))` where `...` is the command line argument.

The given link in `readm.md` is broken, but you can find similar guide from https://www.30secondsofcode.org/js/s/command-line-arguments/ (or use ChatGPT).


## Debugging
### Book Library

In terms of input validation, 
1. Are all input properly checked?
1. Can `.value` be `null`? (Do we need to check `someInputElement.value == null`?)
1. Do you want to allow book title and author name to contain only space characters?
1. What if a user enters an invalid page number in the "pages" input field?

- Do you want to keep leading and trailing space characters in title, author, and pages?

- The following page numbers are possible
<img width="245" height="188" alt="image" src="https://github.com/user-attachments/assets/e1250b30-5081-470f-92a5-e62a20b2a03e" />

---

Did you notice it was weird to pass the value of `page` as a string instead of as a number in the original code?


---
According to https://validator.w3.org/, there are errors in your `index.html`. Can you fix these errors?

---

To clear the table before repopulating it, instead of deleting the table rows one by one, can you think of a more efficient way to remove all rows (except the `<th>...</th>`) in the table?

---

Please note that when setting the text content of an HTML element, there are subtle but important differences between using `.innerHTML`, `innerText`, and `textContent`.

---

Using user input directly without sanitization, normalization, or conversion to the proper data type can be dangerous.

Can you ensure the arguments passed to the Book constructor are properly **pre-processed**?

---
- Lines 18-21:
  Using descriptive and consistent suffixes (like `El`, `Input`, `Btn`, `Form`, etc.) for variables that store DOM elements can improve code readability and maintainability.

- Lines 82, 102:
  - Are the values assigned to these `id` attributes unique? 
  - Is there any need to assign an id attribute to either buttons?

- Line 76:
  - The current method of assigning book titles to HTML elements can cause display issues if a title contains special character sequences like `<i>`.

- Can you suggest a more consistent naming convention for the variables representing the two buttons, currently named `changeBut` and `delButton`?

Did you notice that the two variables, `changeBut` and `delButton`, use different naming conventions?

---
The alert message is shown before the book is actually deleted; the deletion only occurs after the alert dialog is dismissed. This introduces a risk that the operation may not complete (e.g., if the user closes the browser before dismissing the alert).

In general, it’s better to display a confirmation message only after the associated operation has successfully completed.

### Code Reading
The variable at line 5 is definite not global.
I wonder how ChatGPT would answer this question.

--- 
Did you try executing the code to verify your answer?

The second statement is correct about `y`, but it does not explain why the first output is 10.

