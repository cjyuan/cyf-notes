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

What do you expect `invert({ a: 1, b: 1 })` would return?


#### Sprint-2/stretch/count-words.js
The punctuations shown in the spec are only examples, meaning other punctuation marks are possible.

---

What do you expect from the following function call?
Does your function return the value you expected?

```
countWords("A.A A A_A A$A");
```

#### Sprint-2/stretch/till.js
`"1p" * 4` can still produce a value, albeit not a useful result, but the expression does not throw any error.


1) You observation of the code is correct. Just that the question was asking what `"1p" * 10` evaluate to.

2) The program cannot evaluate `"1p" * 10` to yield the expected value of `10`, but can we make some small change in the code to get the numerical value of 10 from "1p times 10"?


