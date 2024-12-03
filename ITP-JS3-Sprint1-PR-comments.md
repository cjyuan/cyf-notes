#### Sprint-1/fix/median.js

The arrays specified in `median.test.js` happened to be sorted.

Normally, before we can easily find the median value in an array, we need to sort the array first.
Can you try inserting a statement to sort the numbers in `list` first? 



#### Sprint-1/implement/max.js
What do you expect from the following function calls (on extreme cases)?
Does your function returns the value you expected?

```
findMax([-Infinity]);
findMax([NaN]);
```

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
With the file path specified as an absolute path, the script probably cannot find `input.txt` when it is executed on a different computer.

Assuming `input.txt` will always be in the same folder as the script, how would you modify your code to read data from this `input.txt` file?
