#### Generic

It is never too early to develop the habit to keep the code clean by removing 
(or at least commenting out) unused code or debugging code.

---

Array is passed to a function ***by reference***  (instead of ***by value***). This implies when an array is passed to a function via parameter, the array is **shared** by the caller and the callee (the function being called).

To avoid modifying the caller's array, a common practice is to make a clone of the array (that's passed as a parameter) and modify the clone in the callee instead.

#### Sprint-1/fix/median.js

The arrays specified in `median.test.js` are already sorted by coincidence.

Typically, to find the median value of an array, we first need to sort it. However, to prevent modifying `list` directly, it's best to work with a cloned version instead.

Could you add one or more statements to create a cloned copy of `list` and then sort the numbers in the cloned array?

#### Sprint-1/fix/median.test.js

The elements in `[1, 2, 3]` are already sorted. If we use this array as a test value, it will be difficult to determine whether the function modifies the input or not (by sorting the given array).

#### Sprint-1/implement/dedupe.test.js

We must use `.toEqual()` instead of `.toBe()` when comparing arrays or objects; `.toBe()` does not compare two arrays by their values. Since `toEqual()` works equally well on primitive values such as number, and string, you can also just use `.toEqual()` to compare all types of values.

In JS, an array is a kind of ***object***, and objects are compared by ***references*** instead of by values.

To learn more about how arrays/objects are compared/copied in JS, and to learn more about how to compare two arrays by their values, may I suggest asking ChatGPT
- Why in JS `[1, 2, 3] === [1, 2, 3]` is `false`?" 
- How to compare two arrays by value in JS?

---
The current test code cannot check if the returned array is a **copy** of the original array because `toEqual()` compares objects (including arrays) by value. To illustrate,

```
  const A = [2, 3, 1];
  const B = [...A];          // B is a copy of A
    
  // This set of code cannot distinguish if the compared objects are the same objects.
  expect(A).toEqual(A);  // true
  expect(A).toEqual(B);  // true
```

In order to check if the returned array is a **copy** of the original array, we would need **additional** checks. 
Can you find out what code you need to add in order to ensure the returned value is not the original array?


#### Sprint-1/implement/max.js
What do you expect from the following function calls (on extreme cases)?
Does your function return the value you expected?

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
Does your function return the value you expected?

```
sum([NaN, 1]);
sum([Infinity, -Infinity]);
```


#### Sprint-1/implement/sum.test.js

Decimal numbers in most programming languages (including JS) are internally represented in "floating point number" format. Floating point arithmetic is not exact. For example, the result of `46.5678 - 46 === 0.5678` is false because `46.5678 - 46` only yield a value that is very close to `0.5678`. Even changing the order in which the program add/subtract numbers can yield different values.

So the following could happen
```
  expect(sum([1.2, 0.6, 0.005])).toEqual(1.805);                // This fail
  expect(sum([1.2, 0.6, 0.005])).toEqual(1.8049999999999997);   // This pass
  expect(sum([0.005, 0.6, 1.2])).toEqual(1.8049999999999997);   // This fail

  console.log(1.2 + 0.6 + 0.005 == 1.805);  // false
  console.log(1.2 + 0.6 + 0.005 == 0.005 + 0.6 + 1.2); // false
```

**Can you find a more appropriate way to test a value (that involves decimal number calculations) for equality?**

#### Sprint-1/stretch/aoc-2018-day1/solution.js
I think this exercise expect you to also write JS code to read the numbers from the file `input.txt` directly.

---
With the file path specified as an absolute path, the script probably cannot find `input.txt` when it is executed on a different computer.

Assuming `input.txt` will always be in the same folder as the script, how would you modify your code to read data from this `input.txt` file?

Part 2 spec: https://adventofcode.com/2018/day/1#part2

