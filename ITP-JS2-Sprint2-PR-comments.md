#### Sprint-2/1-key-errors/1.js
With the current implementation, the function will always return "50%".
How would you modify the function so that it can be easily reused to convert different numbers to their equivalent percentages? 


#### Sprint-2/2-mandatory-debug/2.js
Deleting the global `num` is optional. Within the function block, `num` is resolved to the parameter `num`.
If you are interested in the topic, you can looking up these two concepts, ***identifier scope*** and ***identifier resolution***, in the context of JavaScript programming. ChatGPT can give a good explanation.

#### Sprint-2/3-mandatory-implement/1-bmi.js
What **type** of value do you expect the function to return? A number or a string?
Does your function return the type of value you expect?

---
Did you notice  the variables `squaredHeight` and `BMI` are rendered in different colors?

Many IDEs and viewers that support syntax highlighting (including GitHub) display identifiers in different formats and colors. Can you find out why?
```javascript
let bmi, camelCase;
let Bmi, PascalCase;
let BMI, UPPER_SNAKE_CASE;
```

Can  you look up the naming conventions in JavaScript? In particular,
- Variable and function names
- Class and Types names
- Named constants

Then, update the variable names according to those conventions.


#### Sprint-2/3-mandatory-implement/3-to-pounds.js
You should take a look at `.slice()`. With this function, lines 11-12 can be rewritten as
```
    const pounds = paddedPenceNumberString.slice(0, -2);
    const pence = paddedPenceNumberString.slice(-2);   // .padEnd() is redundant regardless of which function we use
```

#### Sprint-2/4-mandatory-interpret/time-format.js

A common convention for indicating that a value is a string is to enclose it in double quotes. For example, "00".


#### Sprint-2/5-stretch-extend/format-time.js
There is a String function you can use to make this statement shorter (and clearer).

"12:00" would make a good edge case to test.

Also, we should also test cases where minute part is not equal to "00".
---

It is a common practice to begin variable names with a lowercase letter.
Names that start with an uppercase letter are typically reserved for user-defined data types or class names.


---

The objective isn’t to create tests just so the function can pass them, but to design tests that reflect how a proper 24-hour to 12-hour clock conversion should work.

For examples, "00:00" (midnight) should be converted to "12:00 am", "15:05" should be converted "03:05 pm".

If `formatAs12HourClock(time)` doesn't pass all the tests, we need to update the implementation until it does.
