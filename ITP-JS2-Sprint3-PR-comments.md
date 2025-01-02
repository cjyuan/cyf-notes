#### Generic

Using a boundary value as a test case is always a good idea. Many programs fail because they do not check the boundary cases properly.


---

If you want to prevent some code in a file from being executed when the file is imported by another file (via `require(...)`), you can lookup "how to check if a JS script is executed directly or via import?".

---

It is a good practice to prepare test cases such that they can cover various scenarios to ensure thorough testing.


#### Sprint-3/implement/get-angle-type.test.js

Could consider describe this as `"Expect 'Reflex angle' if 180 < angle < 360"`.
I asked ChatGPT to create a concise version of your description, it gave me this:
`Return 'Reflex angle' for angles between 180 and 360 degrees`
After I give additional constraints `if symbol or operator is allowed (as in describing test in code)`, it showed me:
`Return 'Reflex angle' if 180 < angle < 360`

#### Sprint-3/implement/get-card-value.js
Can you also check if `getCardValue("23♠")` is returning the value you expect?

What do you expect from the following function calls?
Does your function return the value you expected?

```
getCardValue("0Q♠");
getCardValue("010♠");
getCardValue("02♠");
getCardValue("0x02♠");
getCardValue("2.1♠")
```

#### Sprint-3/implement/is-proper-fraction.js

Suppose the notation **|X|** denotes the absolute value of X. 
If you are unfamiliar with the definition of ***absolute value***, you should look the term up.

To test your function more comprehensively, you should consider testing all combinations of positive and negative parameters. For examples,
- For cases where |numerator| < |denominator|, test 
`isProperFraction(4, 7)`, `isProperFraction(-4, -7)`, `isProperFraction(-4, 7)`, `isProperFraction(4, -7)`.
- Do the same for cases where |numerator| > |denominator|. 


In mathematics, -4/7 == 4/-7, and -4/-7 == 4/7.
So, ideally `isProperFraction()` should recognise all of them as proper fractions.

Hint: If you compute the absolute value of both parameters inside the function first, the code can become much simpler.

#### Sprint-3/implement/is-valid-triangle.js

Is it necessary to include the if-statement at lines 42-44?
Can you find any values for a, b, and c, such that the function will fail after you removed the if-statement at lines 42-44?
If you cannot find such a, b, and c, that means you probably do not need that if-statement.

I will not go into details why in some programming languages (but not JavaScript) we need also to ensure a, b, c are positives.

The main point I would like to make is, you should fully understand and be able to explain your code. An interviewer may ask you questions like what I am asking here, and it would reflect poorly on you if you cannot explain your code.


---

If any of `a`, `b`, and `c` is less than or equal to zero, then the condition at line 43 will always be false.
Is there any need to further check if `a`, `b`, and `c` is less than or equal to zero at line 51?

I will not go into details why in some programming languages (but not JavaScript) we need also to ensure a, b, c are positives.

---

In some programming languages that support "integer" data type, if `side1`, `side2`, and `side3` are of "integer" type, then we will need to also ensure all sides are positives (to take into account of possible ***integer overflow*** cases). But the "number" type in JavaScript is "double precision floating point" type, so such check can be omitted.


#### Sprint-3/implement/rotate-char.js

How would you modify your implementation if shift is allowed to be a negative number to represent a rotation in the opposite direction?

#### Sprint-3/revise/implement/creditCardValidator.js

Why not check also cases where number of digits is not exactly 16?

#### Sprint-3/revise/implement/get-ordinal-number.test.js

`getOrdinalNumber(101)` should return "101st". 
May I suggest using Google/ChatGPT to find out the rules to convert a number to an ordinal number?

#### Sprint-3/revise/implement/is-prime.js

You can possibly improve the performance of the code in the following manners:
- Return `true` if `num` is 2
- Return `false` if `num` is an even number (we have already checked 2)
- Use a loop to check if `num` can be fully divided by an odd number >= 3 (but <= `Math.sqrt(num)`)
- In the loop, avoid calling `Math.sqrt(num)` repeatedly by first assigning the value of `Math.sqrt(num)` to a variable once, and then refer to the variable in the condition of the loop.


You can possibly improve the performance of the code in the following manners:
- Return `true` if `num` is 2
- Return `false` if `num` is an even number (we have already checked 2)

- Use a loop to check if `num` can be fully divided by an odd number >= 3 (but <= `Math.sqrt(num)`)
- In the loop, avoid calling `Math.sqrt(num)` repeatedly by first assigning the value of `Math.sqrt(num)` to a variable once, and then refer to the variable in the condition of the loop.
  


#### Sprint-3/revise/implement/password-validator.test.js
Some of the passwords in this array are invalid passwords.

The function could also return `false` because "welcome1" does not have any uppercase letter. So this test may fail to check if the function can handle "Must not be any previous password in the passwords array" properly.

The function could have also returned `false` because `P1!` does not contain any lowercase letter. How can we be 100% sure the function can correctly check passwords shorter than 5 characters?

