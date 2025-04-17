## General

On a separate note, it's considered good practice to check the boxes in the PR template (to confirm that the listed requirements have been met) and to include a brief description of the PR.



## Sprint-1 (Array Destructuring)

### Sprint-1/destructuring/exercise-3/exercise.js
It might be easier to align output using the string's built-in padding functions than using space characters.

---

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

According to https://validator.w3.org/, there are errors in your `index.html`. Can you fix these errors?

---

Instead of deleting the table rows one by one, can you think of a more efficient way to remove all rows (except the `<th>...</th>`) in the table?
---

Does `book.check == true` mean "Read" or "Not yet read"?

---

- Lines 82, 102:
  - Are the values assigned to these `id` attributes unique? 
  - Is there any need to assign an id attribute to either buttons?

- Line 76:
  - The current method of assigning book titles to HTML elements can cause display issues if a title contains special character sequences like `<i>`.

- Can you suggest a more consistent naming convention for the variables representing the two buttons, currently named `changeBut` and `delButton`?

---
At the moment when the alert message is displayed, has the book mentioned in the message been deleted yet?
How would you rearrange these statements to make the message truthful?


### Code Reading
The variable at line 5 is definite not global.
I wonder how ChatGPT would answer this question.

--- 
Did you try executing the code to verify your answer?

The second statement is correct about `y`, but it does not explain why the first output is 10.

