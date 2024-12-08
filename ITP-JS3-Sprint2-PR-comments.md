#### Generic

#### 



#### Sprint-2/debug/recipe.js
The spec at line 4 also asks to log each ingredient on a new line (i.e., one ingredient per line).

#### Sprint-2/implement/querystring.test.js

The string `key%201` is a ***percent-encoded*** or ***URL encoded*** string.
May I suggest looking up any of these terms, and "How to decode URL encoded string in JS"?

#### Sprint-2/interpret/invert.test.js
**Challenge**
Assuming the `invert()` function is correctly implemented. 
What do you expect from the following test? Can you explain why the test will pass (or fail)?
```
let obj = { a : 1 };
expect(invert(invert(obj))).toEqual(obj);
```

---

What do you expect `invert({ a, b })` would return?


#### Sprint-2/stretch/count-words.js
The punctuations shown in the spec are only examples, meaning other punctuation marks are possible.

#### Sprint-2/stretch/till.js
`"1p" * 4` can still produce a value, albeit not a useful result, but the expression does not throw any error.



