#### Sprint-2/1-key-errors/1.js
With the current implementation, the function will always return "50%".
How would you modify the function so that it can be easily reused to convert different numbers to their equivalent percentages? 


#### Sprint-2/2-mandatory-debug/2.js
May I suggest looking up these two concepts, ***identifier scope*** and ***identifier resolution***, in the context of JavaScript programming? ChatGPT can give a good explanation.

#### Sprint-2/3-mandatory-implement/1-bmi.js
What **type** of value do you expect the function to return? A number or a string?
Does your function return the type of value you expect it to return?


#### Sprint-2/3-mandatory-implement/3-to-pounds.js
You should take a look at `.slice()`. With this function, lines 11-12 can be rewritten as
```
    const pounds = paddedPenceNumberString.slice(0, -2);
    const pence = paddedPenceNumberString.slice(-2);   // .padEnd() is redundant regardless of which function we use
```

#### Sprint-2/5-stretch-extend/format-time.js
There is a String function you can use to make this statement shorter (and clearer).

"12:00" would make a good edge case to test.

Also, we should also test cases where minute part is not equal to "00".
---

It is more common practice to begin variable names with a lowercase letter. Names that start with an uppercase letter are typically reserved for user-defined data types or class names.
