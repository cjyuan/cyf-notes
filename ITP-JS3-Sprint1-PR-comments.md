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

So to test a calculated result that involves decimal numbers, we should use `.toBeCloseTo()` instead of `.toBe()`.
See: https://jestjs.io/docs/expect#tobeclosetonumber-numdigits
