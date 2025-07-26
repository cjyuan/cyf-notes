#### Generic

#### Sprint-2/debug/author.js
The property values refer to `'Zadie', 'Smith', 'writer', 40, true`.
Can you change your code so that `value` will take the **value** (instead of **name**) of each property in each iteration?


#### Sprint-2/debug/recipe.js
The spec at line 4 also asks to log each ingredient on a new line (i.e., one ingredient per line).

#### Sprint-2/implement/contains.js

**Suggestion**
Consider the following two approaches for determining if an object contains a property:
```
  let obj = {}, propertyName = "toString";
  console.log( propertyName in obj );                // true
  console.log( Object.hasOwn(obj, propertyName) );   // false
```
Which of these approaches suits your needs better?
For more info, you can look up `JS "in" operator vs Object.hasOwn`.

---
Your code works, but there are more concise syntaxes you could consider.
Here are two approaches to check if an object contains a property (one of them should fit your needs).
```
  let obj = {}, propertyName = "toString";
  console.log( propertyName in obj );                // true
  console.log( Object.hasOwn(obj, propertyName) );   // false
```
For more info, you can look up `JS "in" operator vs Object.hasOwn`.




---

`contains([1, 2, 3], "a")` could also return false because "a" is not a property (or key) of `[1, 2, 3]`.
However, "0", "1", "2" are keys of `[1, 2, 3]`, so it is better to specify the test as
`expect(contains([1, 2, 3], "1")).toBe(false);` (to ensure you are checking what you describe)

---

Array is a kind of object where indexes serve as its keys. So we could call `contains([3, 4], "1")` to check if the function can return `false` when the first parameter is an array and the second parameter is a valid key.

---


Array is a kind of object in JS, and "0", "1", "2" are keys of `[1, 2, 3]`. So it is better to express the test as `expect(contains([1, 2, 3], "1")).toBe(false);` to ensure the function can truly reject array.

You can also test other types of invalid parameters (e. g., number, undefined, null, string, boolean).




#### Sprint-2/implement/querystring.test.js

Please note that in real querystring, both `key` and `value` are ***percent-encoded*** or ***URL encoded*** in the URL. For example, the string "5%" will be encoded as "5%25". So to get the actual value of "5%25" (whether it is a key or value in the querystring), you should call a function to decode it.
May I suggest looking up any of these terms, and "How to decode URL encoded string in JS"?


The string `key%201` is a ***percent-encoded*** or ***URL encoded*** string.
May I suggest looking up any of these terms, and "How to decode URL encoded string in JS"?

---

For each of the following function calls, does your function return the value you expect?
```
parseQueryString("a=b&=&c=d")
parseQueryString("a=")
parseQueryString("=b")
parseQueryString("a=b&&c=d")
parseQueryString("a%25b=c%26d")
```
Note: the `%25` and `%26` are ***URL encoded*** or ***percent encoded*** characters.


#### Sprint-2/implement/tally.js

Does the following function call returns the value you expect?
```
tally(["toString", "toString"]);
```

Suggestion: Look up an approach to create an empty object with no inherited properties.

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

Can you check if your function returns what you expect in the following function calls?

```
countWords("Hello,World! Hello World!");
countWords("constructor constructor");
countWords("          Hello World      ");
```




#### Sprint-2/stretch/till.js
`"1p" * 4` can still produce a value, albeit not a useful result, but the expression does not throw any error.


1) You observation of the code is correct. Just that the question was asking what `"1p" * 10` evaluate to.

2) The program cannot evaluate `"1p" * 10` to yield the expected value of `10`, but can we make some small change in the code to get the numerical value of 10 from "1p times 10"?


