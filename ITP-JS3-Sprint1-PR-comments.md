#### Generic

It is never too early to develop the habit to keep the code clean by removing 
(or at least commenting out) unused code or debugging code.

---

Array is passed to a function ***by reference***  (instead of ***by value***). This implies when an array is passed to a function via parameter, the array is **shared** by the caller and the callee (the function being called).

To avoid modifying the caller's array, a common practice is to make a clone of the array (that's passed as a parameter) and modify the clone in the callee instead.

#### Sprint-1/fix/median.js

The arrays specified in `median.test.js` happened to be sorted.

Normally, before we can easily find the median value in an array, we need to sort the array first.
Can you try inserting a statement to sort the numbers in `list` first? 

#### Sprint-1/implement/dedupe.test.js

We must use `.toEqual()` instead of `.toBe()` when comparing arrays or objects; `.toBe()` does not compare two arrays by their values. Since `toEqual()` works equally well on primitive values such as number, and string, you can also just use `.toEqual()` to compare all types of values.

In JS, an array is a kind of ***object***, and objects are compared by ***references*** instead of by values.

To learn more about how arrays/objects are compared/copied in JS, and to learn more about how to compare two arrays by their values, may I suggest asking ChatGPT
- Why in JS `[1, 2, 3] === [1, 2, 3]` is `false`?" 
- How to compare two arrays by value in JS?

#### Sprint-1/implement/max.js
What do you expect from the following function calls (on extreme cases)?
Does your function returns the value you expected?

```
findMax([-Infinity])
findMax([-Infinity, 0])
findMax([NaN])
findMax([0, NaN, 1])
```
---

`Inifinity` is a keyword in the JavaScript language. When an array is empty, the value to be returned 
should be be `-Infinty`, not a string value.

---
Why return a string (instead of a value of type "number") when the given array contains only non-number values?

When a function has a dual return type, it becomes unclear what the caller should expect. Developers would need to look at the implementation or documentation to understand the behavior.

#### Sprint-1/implement/sum.js

What do you expect from the following function calls (on extreme cases)?
Does your function returns the value you expected?

```
sum([Infinity, 1]);
sum([Infinity, Infinity]);
sum([NaN, 1]);
sum([Infinity, -Infinity]);
```


#### Sprint-1/implement/sum.test.js

Decimal numbers in most programming languages (including JS) are internally represented in "floating point number" format. Floating point arithmetic is not exact. For example, the result of `46.5678 - 46 === 0.5678` is false because `46.5678 - 46` only yield a value that is very close to `0.5678`.

So `expect(sum([1.1, 1.1, 1.1])).toEqual(3.3);` would probably fail.

Can you find a more appropriate way to test a value (that involves decimal number calculations) for "equality?

#### Sprint-1/stretch/aoc-2018-day1/solution.js
I think this exercise expect you to also write JS code to read the numbers from the file `input.txt` directly.

---
With the file path specified as an absolute path, the script probably cannot find `input.txt` when it is executed on a different computer.

Assuming `input.txt` will always be in the same folder as the script, how would you modify your code to read data from this `input.txt` file?
