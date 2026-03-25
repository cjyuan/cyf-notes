Can you check if any of this general feedback can help you further improve your code?  
https://github.com/CodeYourFuture/Module-Data-Groups/blob/general-review-feedback/Sprint-2/feedback.md

Doing so can help reviewers speed up the review process. Thanks.

#### Generic

#### Sprint-2/debug/author.js
The property values refer to `'Zadie', 'Smith', 'writer', 40, true`.
Can you change your code so that `value` will take the **value** (instead of **name**) of each property in each iteration?


#### Sprint-2/debug/recipe.js
The spec at line 4 also asks to log each ingredient on a new line (i.e., one ingredient per line).

---
Your code works.

Here is an alternative worth exploring: 
Since ingredient values are separated by '\n' in the output, we could also use 
`Array.prototype.join()` to construct the equivalent string and then output the resulting string.

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

This test does not yet confirm that the function correctly returns false when the first argument is an array.  
A function that fails to check whether its first parameter is an array could still pass this test:
```javascript
function contains(obj, key) {
    if (obj == null || typeof obj != "object") return false;
    return Object.hasOwn(obj, key);
}
```

This happens because arrays are objects, with their indices acting as keys. For example, `Object.hasOwn([], "a")` 
returns `false` simply because `"a"` is not a key of the array.

To properly verify this behavior, the test should use a non-empty array along with a valid key to 
ensure the function returns `false` specifically because the input is an array, not because the key is missing.

---
This test does not yet confirm that the function correctly returns false when the first argument is an array. 
This is because `contains([], "a")` could also return `false` simply because "a" is not a key of the array.

Arrays are objects, with their indices acting as keys. A proper test should use a non-empty array along with a valid
key to ensure the function returns `false` specifically because the input is an array, not because the key is missing.

---

Array is also an object where it indexes are its keys.
`Object.hasOwn([1, 2, 3], "a")` evaluates to `false` because `"a"` is not a key (index) of the array.
However, `Object.hasOwn([1, 2, 3], "0")` evaluates to `true` because `"0"` is a key (index) of the array.

To test if the implemented function can correctly return `false` when the first argument is an array,
we should specify an actual key of the array.

---
In practice, we write tests not only to verify our current implementation, but also to ensure that future changes do not alter the function's expected behavior.

Currently the following function could also pass this test:
```
function contains(obj, key) {
    if (obj == null || typeof obj != "object") return false;
    return Object.hasOwn(obj, key);
}
```
---


Array is a kind of object in JS, and "0", "1", "2" are keys of `[1, 2, 3]`. So it is better to express the test as `expect(contains([1, 2, 3], "1")).toBe(false);` to ensure the function can truly reject array.

You can also test other types of invalid parameters (e. g., number, undefined, null, string, boolean).




#### Sprint-2/implement/querystring.test.js

Note: (No change required)
- In real query string, both `key` and `value` are ***percent-encoded*** or ***URL encoded*** in the URL.
For example, the string "5%" is encoded as "5%25". So to get the actual value of "5%25"
(whether it is a key or value in the query string), we need to call a function to decode it.

- You can also explore the `URLSearchParams` API.




The string `key%201` is a ***percent-encoded*** or ***URL encoded*** string.
May I suggest looking up any of these terms, and "How to decode URL encoded string in JS"?

---

For each of the following function calls, does your function return the value you expect?

```
parseQueryString("key1=value1&=&key2=value2")
parseQueryString("key=")
parseQueryString("=value")
parseQueryString("key1=value1&&key2=value2")
parseQueryString("key")
```


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

Note: The spec is not clear about exactly what to expect from these function calls. This is just for self-check.



#### Sprint-2/stretch/till.js
`"1p" * 4` can still produce a value, albeit not a useful result, but the expression does not throw any error.


1) You observation of the code is correct. Just that the question was asking what `"1p" * 10` evaluate to.

2) The program cannot evaluate `"1p" * 10` to yield the expected value of `10`, but can we make some small change in the code to get the numerical value of 10 from "1p times 10"?


#### Sprint-2/stretch/mode.js
The purpose of this exercise is to practice refactoring code in a "large" function into smaller functions.
You were supposed to separate the original code into two functions:
Function 1 -- when given an array, returns the frequency of the element in a Map object.
Function 2 -- when given a Map object representing the frequency of of elements, return the mode.

Then, rewrite the original function as a composition of these two functions.

