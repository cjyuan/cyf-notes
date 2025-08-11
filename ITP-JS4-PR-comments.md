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

Can you check if any of this general feedback can help you further improve your code?
https://github.com/cjyuan/Module-Data-Flows/blob/book-library-feedback/debugging/book-library/feedback.md

Doing so can help me speed up the review process. Thanks.

---

Can you change the base branch of this PR from CYF's `book-library` to CYF's `main`?

---

- The following page numbers are possible
<img width="245" height="188" alt="image" src="https://github.com/user-attachments/assets/e1250b30-5081-470f-92a5-e62a20b2a03e" />

---

This could be a good opportunity to practice using the `? :` conditional operator. Can you rewrite the code on lines 86–92 as a single statement?

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

- Lines 82, 102:
  - Are the values assigned to these `id` attributes unique? 
  - Is there any need to assign an id attribute to either buttons?

- Can you suggest a more consistent naming convention for the variables representing the two buttons, currently named `changeBut` and `delButton`?

---
The alert message is shown before the book is actually deleted; the deletion only occurs after the alert dialog is dismissed. This introduces a risk that the operation may not complete (e.g., if the user closes the browser before dismissing the alert).

In general, it’s better to display a confirmation message only after the associated operation has successfully completed.

---
For better performance (reduce number of function calls) and reducing the chance of using raw input accidently, we could stored the pre-processed/sanitized/normalized input in some variables first, and reference the variables in other part of the function.

---

Can you think of the pros and cons of these two approaches for creating cells within a row?
- Keeping all the cell creation code in one location, like the original code does.
- Scattering the cell creation code across different locations, like what you did.

---

- For better performance (reduce number of function calls) and reducing the chance of using raw input accidently, we could stored the pre-processed/sanitized/normalized input in some variables first, and reference the variables in other part of the function.



### Code Reading
The variable at line 5 is definite not global.
I wonder how ChatGPT would answer this question.

--- 
Did you try executing the code to verify your answer?

The second statement is correct about `y`, but it does not explain why the first output is 10.

