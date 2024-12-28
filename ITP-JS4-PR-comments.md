
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
