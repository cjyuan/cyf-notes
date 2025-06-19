
To follow best practices, can you update your PR description by carrying out the following actions?
    - Check the items in the Self-Checklist to confirm your pull request meets the guidelines (which you have done! Good!)
    - Provide a brief description (under the "Changelist" section) summarizing the purpose of the PR and the changes you’ve made 

---

Describing code can be very challenging initially (even in one's first language). May I suggest using ChatGPT to find out how else code can be described? From time to time you may also learn some useful programming terms from ChatGPT.

--
Why not practice "committing files one by one, on purpose, and for a reason"?
In VSCode, you can select which file to ***stage***, and commit only the staged file.
See: https://www.youtube.com/watch?v=z5jZ9lrSpqk&t=705  (At around 12:50 minute marker, the video shows how to stage a single file).



#### Sprint-1/1-key-exercises/1-count.js
Operation like `count = count + 1` is very common in programming, and there is a programming term describing such operation.

Can you find out what one-word programming term describes the operation on line 3?


#### Sprint-1/1-key-exercises/3-paths.js
Since a folder name can also contain '.', can you modify your code so that it will also work for a file path like `"/path1/path2.old/file.txt"`?


#### Sprint-1/1-key-exercises/4-random.js
To test your understanding, how would you write an expression (without using any variable in the expression) that can yield
a random integer between -5 and 5 (including both -5 and 5)?


- What is the range of values that could be returned by `Math.random()`?
- What is the significance of `(maximum - minimum + 1)`? What does this expression represent?
- What is the significance of `... + minimum`?
- What is the range of values that could be assigned to `num`?
---

Phrases like "integer in range from 0 to 1" or "between 0 and 1" are not precise enough in a program specification, because they do not clearly state whether the endpoints 0 and 1 are included.

You can also use the concise and precise ***interval notation*** to describe a range of values.
For example, we can say, "`Math.random()` returns a random number in the interval `[0, 1)`"

---

"subtract minimum from maximum and add 1" is a literal translation of `(maximum - minimum + 1)`, it does not carry any additional info.

Could you try using ChatGPT to find a clearer, more concise way to describe the code (and update your description in items 2, 3, 4)?

---

`Math.floor(12.9)` is 12; the function does not **round** 12.9 to 13 (the nearest integer). Could you rephrase the sentence to more accurately describe what `.floor()` does?



#### Sprint-1/2-mandatory-errors/3.js
If you cannot modify this statement `const cardNumber = 4533787178994213;`
(that is, keep the variable's value unchanged), 
how would you modify the code (through type conversion) so that it can still extract the last 4 digits from its value.

#### Sprint-1/2-mandatory-errors/4.js
- Have you also noticed the variable names do not quite match the values assigned to the variable?

- In JS naming convention, variable names usually begins with a lowercase letter. Names starting with an uppercase letter are used for built-in and custom data types (e.g., `Math`)

#### Sprint-1/3-mandatory-interpret/1-percentage-change.js
`foo(bar())` would be considered as two function calls in which `bar()` is called first and its return value is passed as a parameter to `foo()`.


In the function call `.replaceAll(",", "")`, there's a programming term for `","` and `""` (the values passed into the function). Could you find out what it's called so you can shorten your explanation to something like '...between the ___________s'?


#### Sprint-1/3-mandatory-interpret/2-time-format.js

You gave a literal translation of the code, but it does not quite explain what the expression `(movieLength - remainingSeconds) / 60` does.

Can you describe in terms of **whole minute**, or use ChatGPT to find out how else the code can be described? 

----

"time" can ambiguous because it may mean refer to clock time (e.g., 12:30pm), time in seconds, etc. 
Can you think of another name for the variable?



#### Sprint-1/3-mandatory-interpret/3-to-pounds.js
Could we expect this program to work as intended for any valid `penceString` if we deleted `.padEnd(2, "0")` from the code?
In other words, do we really need `.padEnd(2, "0")` in this script?

In this script, when line 14 is executed, could `paddedPenceNumberString.substring(paddedPenceNumberString.length - 2)` ever be shorter than 2 characters? In other words, do we really need `.padEnd(2, "0")` in this script?


#### Sprint-1/4-stretch-explore/chrome.md

Note: To view the return value of a function call, we need to output the return value to the console as `console.log( function_call(...) )`.

We can also find out exactly what the function returns from the MDN Web Docs website.


If you were writing a program that uses `prompt()` to ask for an input value, how can 
your program tell if the user clicked "OK" or "Cancel"?



There is a shorter ***programming term*** to describe operations like `count = count + 1` or `count++`. 
May I suggest feeding the code to ChatGPT to see how else the code can be described? 
From time to time you may learn new terminology or more concise ways to describe code.
