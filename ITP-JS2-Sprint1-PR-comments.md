
To follow best practices, can you update your PR description by carrying out the following actions?
    - Check the items in the Self-Checklist to confirm your pull request meets the guidelines (which you have done! Good!)
    - Provide a brief description (under the "Changelist" section) summarizing the purpose of the PR and the changes you’ve made 

---

Indentation is off.
Some of the code is not consistently formatted.

Have you installed the **prettier** VSCode extension and enabled "Format on save/paste" on VSCode,
as recommended in 
https://github.com/CodeYourFuture/Module-Structuring-and-Testing-Data/blob/main/readme.md
?

---

When describing code, we should avoid simply translating it literally because:
- Other developers can already read the code and see what it does.
- A literal description adds no extra insight to help others understand the purpose, logic, or context of the code.

Describing code can be quite challenging at first (even in your native language). I suggest using ChatGPT to explore alternative ways to describe the code. Along the way, you might also pick up some useful programming terminology.

--
Why not practice "committing files one by one, on purpose, and for a reason"?
In VSCode, you can select which file to ***stage***, and commit only the staged file.
See: https://www.youtube.com/watch?v=z5jZ9lrSpqk&t=705  (At around 12:50 minute marker, the video shows how to stage a single file).



#### Sprint-1/1-key-exercises/1-count.js
Operation like `count = count + 1` is very common in programming, and there is a programming term describing such operation.

Can you find out what one-word programming term describes the operation on line 3?


#### Sprint-1/1-key-exercises/3-paths.js
Since a folder name can also contain '.', can you modify your code so that it will also work for a file path like `"/path1/path2.old/file.txt"`?

---

Your understanding of `.indexOf()` and `.slice()` is correct, but the value assigned to `dir` is not quite the directory/folder name of the given file path.

Could you find out from ChatGPT which part of the path, `/Users/mitch/cyf/Module-JS1/week-1/interpret/file.txt`, is considered the directory name?


---
Can you make these statements to work for any valid path? For example, they could still work correctly if we changed line 12 to
```
const filePath = "/Users/jacknguyen448/cyf/Module-2/Sprint-1/package.json";
```



#### Sprint-1/1-key-exercises/4-random.js
To test your understanding, how would you write an expression (without using any variable in the expression) that can yield
a random integer between -5 and 5 (including both -5 and 5)?


- What is the range of values that could be returned by `Math.random()`?
- What is the significance of `(maximum - minimum + 1)`? What does this expression represent?
- What is the significance of `... + minimum`?
- What is the range of values that could be assigned to `num`?
---

Phrases like "a number between X and Y" are not precise enough in a program specification, because they do not clearly state whether the endpoints X and Y are included.

We can also use the concise and precise ***interval notation*** to describe a range of values. 
- `[`, `]` => inclusion
- `(`, `)` => exclusion

For example, `[1, 10)` means, all numbers between 1 and 10, including 1 but excluding 10.


"Returns" is the standard technical term for what a function "generates". It aligns with programming language terminology, especially in documentation and developer communication.

---
Can you give a precise description what each of these expressions does, and the range of the numbers it may produce?

1. `Math.random()`
2. `Math.random() * (maximum - minimum + 1)`
3. `Math.floor(Math.random() * (maximum - minimum + 1))`
4. `Math.floor(Math.random() * (maximum - minimum + 1)) + minimum`

---
Note: To describe a range of numbers, we can use the concise and precise ***interval notation***: 
- `[`, `]` => inclusion
- `(`, `)` => exclusion

For example, `[1, 10)` means, all numbers between 1 and 10, including 1 but excluding 10.


---

"subtract minimum from maximum and add 1" is a literal translation of `(maximum - minimum + 1)`, it does not carry any additional info.

Could you try using ChatGPT to find a clearer, more concise way to describe the code (and update your description in items 2, 3, 4)?

---

`Math.floor(12.9)` is 12; the function does not **round** 12.9 to 13 (the nearest integer). Could you rephrase the sentence to more accurately describe what `.floor()` does?



#### Sprint-1/2-mandatory-errors/3.js
Suppose you were not allowed to modify the statement `const cardNumber = 4533787178994213;`
(that is, keep the variable's value unchanged).
How would you modify the code (through type conversion) so that you can still use `.slice(-4)` to extract the last 4 digits from the given number.

#### Sprint-1/2-mandatory-errors/4.js

In JS naming convention, variable names usually begins with a lowercase letter. Names starting with an uppercase letter are used for built-in and custom data types (e.g., `Math`)

---
Starting a variable name with a `$` is generally not recommended.

Normal practice is to begin a variable name with a lowercase letter.



#### Sprint-1/3-mandatory-interpret/1-percentage-change.js
`foo(bar())` would be considered as two function calls in which `bar()` is called first and its return value is passed as a parameter to `foo()`.


In the function call `.replaceAll(",", "")`, there's a programming term for `","` and `""` (the values passed into the function). Could you find out what it's called so you can shorten your explanation to something like '...between the ___________s'?

---

We can more precisely describe "A comma is missing between `","` and `""` in the function call" as:  
A comma is missing between the ___________s.

What is the programming term that belongs in the blank?

---

The error occurred because a comma was missing between the ___________s.
What is the programming term that belongs in the blank?


#### Sprint-1/3-mandatory-interpret/2-time-format.js

You gave a literal translation of the code, but it does not quite explain what the expression `(movieLength - remainingSeconds) / 60` does.

Can you describe in terms of **whole minute**, or use ChatGPT to find out how else the code can be described? 

----

The name `movieDuration` does not quite indicate the value stored in the variable 
is a formatted string in the form `"2:12:02"`.

Can you suggest a more descriptive name?


#### Sprint-1/3-mandatory-interpret/3-to-pounds.js
Could we expect this program to work as intended for any valid `penceString` if we deleted `.padEnd(2, "0")` from the code?
In other words, do we really need `.padEnd(2, "0")` in this script?

---

Have you tried removing `.padEnd()` from the code, then assign `penceString` different values to check if the script produces the results you expected?

#### Sprint-1/4-stretch-explore/chrome.md

Note: To view the return value of a function call, we need to output the return value to the console as `console.log( function_call(...) )`.

We can also find out exactly what the function returns from the MDN Web Docs website.


If we were writing a program that uses `prompt()` to ask for an input value, how could
the program check if the user clicked "OK" or "Cancel"?

---

What does the function return when a user clicks "Cancel" instead of "OK"?


