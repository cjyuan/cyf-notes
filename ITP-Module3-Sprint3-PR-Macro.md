#### Generic

Using a boundary value as a test case is always a good idea. Many programs fail because they do not check the boundary cases properly.

---

If you want to prevent some code in a file from being executed when the file is imported by another file (via `require(...)`), you can lookup "how to check if a JS script is executed directly or via import?".

---

It is a good practice to prepare test cases such that they can cover various scenarios to ensure thorough testing.

#### Sprint-3/implement/get-card-value.js
Can you also check if `getCardValue("23♠")` is returning the value you expect?

Can you check if your function returns the value you expected in the following function calls:
```
getCardValue("0Q♠");
getCardValue("010♠");
getCardValue("02♠");
getCardValue("0x02♠");
getCardValue("2.1♠")
```

#### Sprint-3/implement/is-valid-triangle.js
Could also test 0 and negative numbers in the 2nd and 3rd parameters.

#### Sprint-3/implement/rotate-char.js

How would you modify your implementation if shift is allowed to be a negative number to represent a rotation in the opposite direction?

#### Sprint-3/revise/implement/creditCardValidator.js

Why not check also cases where number of digits is not exactly 16?

#### Sprint-3/revise/implement/get-ordinal-number.test.js

`getOrdinalNumber(101)` should return "101st". 
May I suggest using Google/ChatGPT to find out the rules to convert a number to an ordinal number?

#### Sprint-3/revise/implement/is-prime.js

You can possibly improve the performance of the code in the following manners:
- Check if num is 2, and check only odd numbers >= 3 in the loop
- Avoid calling `Math.sqrt(num)` repeatedly by assigning the value of `Math.sqrt(num)` to a variable once, and then refer to the variable in the condition of the loop.
  - Note: The condition is checked at the start of every iteration.

#### Sprint-3/revise/implement/password-validator.test.js
Some of the passwords in this array are invalid passwords.

The function could also return `false` because "welcome1" does not have any uppercase letter. So this test may fail to check if the function can handle "Must not be any previous password in the passwords array" properly.
