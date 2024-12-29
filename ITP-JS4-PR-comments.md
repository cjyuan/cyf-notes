
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
1. Seems like you missed checking some input.
1. Can `.value` be `null`?
1. What if a user enters only space characters in the "title" input field?
1. What if a users enters `-1` or `3.1416` in the "pages" input field?

---

What's the reason of keeping `return false;` in this function? The function would return `undefined` if input values are ok.

---

Does `book.check == true` mean "Read" or "Not yet read"?

---




