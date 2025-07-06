
To follow best practices, can you update your PR description by carrying out the following actions?
    - Check the items in the Self-Checklist to confirm your pull request meets the guidelines (which you have done! Good!)
    - Provide a brief description (under the "Changelist" section) summarizing the purpose of the PR and the changes you’ve made 

---

Could you also practice responding to comments directly in the comment threads? It could make tracking the discussion easier.

Leaving responses directly in the comment threads makes tracking the discussion easier. You can try the approach in future PRs.
Here is a simplified version of best practices ChatGPT suggested for responding to inline comments in a pull request:
> - ✅ Reply to every comment – Let the reviewer know you saw it.
> - ✏️ Make the change if needed – Fix the code if the comment points out a real issue.
> - 🤔 Explain if you don't agree – If you think the code is fine, politely explain why.
> - ✅ Mark as resolved when done – Only mark comments resolved after you fix or respond.
> - 💬 Keep replies short and polite – Be respectful and to the point.
> - ⏱️ Respond soon – Don’t wait too long to reply.
> - 🧪 Test your changes – Make sure your fixes actually work.
> - 📍 Reply directly under the comment – This keeps the conversation easy to follow.

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
For example, we can say, "`Math.random()` returns a random number in the interval `[0, 1)`"


"Returns" is the standard technical term for what a function "generates". It aligns with programming language terminology, especially in documentation and developer communication.


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

#### Sprint-1/3-mandatory-interpret/1-percentage-change.js
`foo(bar())` would be considered as two function calls in which `bar()` is called first and its return value is passed as a parameter to `foo()`.


In the function call `.replaceAll(",", "")`, there's a programming term for `","` and `""` (the values passed into the function). Could you find out what it's called so you can shorten your explanation to something like '...between the ___________s'?

---

A comma is missing between "," and "" in the function call.
Can you find out the programming term for "," and "" so that we can more accurately describe
"a comma is missing between the ___________."


#### Sprint-1/3-mandatory-interpret/2-time-format.js

You gave a literal translation of the code, but it does not quite explain what the expression `(movieLength - remainingSeconds) / 60` does.

Can you describe in terms of **whole minute**, or use ChatGPT to find out how else the code can be described? 

----

"time" can ambiguous because it may mean refer to clock time (e.g., 12:30pm), time in seconds, etc. 
Can you think of another name for the variable?



#### Sprint-1/3-mandatory-interpret/3-to-pounds.js
Could we expect this program to work as intended for any valid `penceString` if we deleted `.padEnd(2, "0")` from the code?
In other words, do we really need `.padEnd(2, "0")` in this script?

Have you tried executing the script without `padEnd(2, "0")` using different values of `penceString` to validate your expectation?


#### Sprint-1/4-stretch-explore/chrome.md

Note: To view the return value of a function call, we need to output the return value to the console as `console.log( function_call(...) )`.

We can also find out exactly what the function returns from the MDN Web Docs website.


If we were writing a program that uses `prompt()` to ask for an input value, how could
the program check if the user clicked "OK" or "Cancel"?



There is a shorter ***programming term*** to describe operations like `count = count + 1` or `count++`. 
May I suggest feeding the code to ChatGPT to see how else the code can be described? 
From time to time you may learn new terminology or more concise ways to describe code.
