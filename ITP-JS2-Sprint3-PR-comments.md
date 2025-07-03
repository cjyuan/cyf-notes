#### Generic

Using a boundary value as a test case is always a good idea. Many programs fail because they do not check the boundary cases properly.


---

If you want to prevent some code in a file from being executed when the file is imported by another file (via `require(...)`), you can lookup "how to check if a JS script is executed directly or via import?".

---

It is a good practice to prepare test cases such that they can cover various scenarios to ensure thorough testing.


#### Sprint-3/1-key-implement/1-get-angle-type.js

Could consider describe this as `"Expect 'Reflex angle' if 180 < angle < 360"`.
I asked ChatGPT to create a concise version of your description, it gave me this:
`Return 'Reflex angle' for angles between 180 and 360 degrees`
After I give additional constraints `if symbol or operator is allowed (as in describing test in code)`, it showed me:
`Return 'Reflex angle' if 180 < angle < 360`

---

Your function can return `undefined` for some values of `angle`. To ensure reliability, please update the function so it always returns a defined value (which can be "Invalid angle") or throws an error. Functions that are expected to return a result should **never** return `undefined`.

Note: the spec fails to mention angles <= 0 are not "Acute angle".

#### Sprint-3/1-key-implement/2-is-proper-fraction.js



---
Suppose the notation **|X|** denotes the absolute value of X. 
If you are unfamiliar with the definition of ***absolute value***, you should look the term up.

To test your function more comprehensively, you should consider testing all combinations of positive and negative parameters. For examples,
- For cases where |numerator| < |denominator|, test 
`isProperFraction(4, 7)`, `isProperFraction(-4, -7)`, `isProperFraction(-4, 7)`, `isProperFraction(4, -7)`.
- Do the same for cases where |numerator| > |denominator|. 


In mathematics, -4/7 == 4/-7, and -4/-7 == 4/7.
So, ideally `isProperFraction()` should recognise all of them as proper fractions.

Hint: If we compute the absolute value of both parameters inside the function first, the code can become much simpler.

#### Sprint-3/1-key-implement/3-get-card-value.js
Can you also check if `getCardValue("23♠")` is returning the value you expect?

Does your function return the value you expected from each of the following function calls?

```
getCardValue("0Q♠");
getCardValue("010♠");
getCardValue("02♠");
getCardValue("0x02♠");
getCardValue("2.1♠")
```

In JavaScript, many different strings can be interpreted as valid numbers — for example, "0x02", "2.1", or "00000002". Can you think of a better way to ensure that a card’s rank matches exactly one of the nine allowed whole numbers?




#### Sprint-3/2-mandatory-rewrite/1-get-angle-type.test.js
We could specify multiple `expect(...)` statements within each `test()` to cover multiple values that belong to the same case. For example,
```
test("should identify reflex angle when angle is in the interval (180, 360)", () => {
  expect(getAngleType(300)).toEqual("Reflex angle");
  expect(getAngleType(359.999)).toEqual("Reflex angle");
  expect(getAngleType(180.001)).toEqual("Reflex angle");
});
```

#### Sprint-3/2-mandatory-rewrite/2-is-proper-fraction.test.js

Mathematically speaking, -3/2 and -1/0 are not proper fractions (even though -3 < 2 and -1 < 0), and -2/-3 is a proper fraction (even though -2 > -3). 

We need to account for all possible cases where `numerator` and `denominator` can be negative, positive, or zero.

However, if we were to consider all possible combinations of negative/positive/zero numerator and denominator, we would have to use a lot of if-statements. One way to reduce the complexity of the code is to "remove the negative sign" in `numerator` and `denominator`. If both numerator and denominator are non-negative numbers, then the if-statements at lines 11-12 would work perfectly.

 ***Input normalisation***, the process of pre-processing the input values before they are used in computation, can often simplify complexity of code, improve performance, and prevent errors.

**Can you update your function implementation and Jest tests to take into account all possible cases where `numerator` and `denominator` can be negative, positive, or zero?** 

---

3. What should be the return value of the following function calls?
```
isProperFraction(-2, -3)
isProperFraction(-2, 3)
isProperFraction(2, -3)
isProperFraction(-4, -3)
isProperFraction(4, -3)
```


#### Sprint-3/2-mandatory-rewrite/3-get-card-value.js

The instructions in `Sprint-3/1-key-implement/3-get-card-value.js` state
"Given a card with an invalid rank ... the function should **throw an error** indicating "Invalid card rank."

Throwing an error is not the same as returning an error message.

Could you look up "How to throw an error in JS" and update your code accordingly?

---

We could generalise this test to "should return 10 for face cards (J, Q, K)" and check all three ranks J, Q, K). Same for "all number cards".

---


When preparing tests, we should ensure the tests cover all possible cases. If we specify a test for individual card, we will need about 53 tests to cover all possible cases. Instead, we could consider classifying all possible values into different categories, and then within each category we test some samples.

For example, one possible category for `getCardValue()` is, "should return the value of number cards (2-10)", and we can prepare the test as 

```
test("should return the value of number cards (2-10)", () => {
    expect(getCardValue("2♣︎")).toEqual(2);
    expect(getCardValue("5♠")).toEqual(5);
    expect(getCardValue("10♥")).toEqual(5);
    // Note: We could also use a loop to check all values from 2 to 10.
});
```


---

To test if a function can throw an error as expected, we could use `.toThrow()`. You can find out more about how to use `.toThrow()` here: https://jestjs.io/docs/expect#tothrowerror (Note: Pay close attention to the syntax of the example)


#### Sprint-3/3-mandatory-practice/implement/repeat.js
How would the caller distinguish the result of the following two function calls?
1. `repeat("Please enter positive number!", 1)`
2. `repeat("", -1)`

Both function calls return the same value.

---
#### Sprint-3/3-mandatory-practice/implement/repeat.test.js

If you modified `repeat()` to throw an error when `count` is negative, and you wanted to test 
if the function can throw an error as expected, you can use `.toThrow()`. You can find out more about how to use `.toThrow()` here: https://jestjs.io/docs/expect#tothrowerror (Note: Pay close attention to the syntax of the example)



#### Sprint-3/3-mandatory-practice/implement/get-ordinal-number.js

`getOrdinalNumber(101)` should return "101st". 
Consider looking up the rules to clarify how ordinal numbers are formed.

---

Instead of writing tests for individual numbers, consider grouping all possible input values into meaningful categories. Then, select representative samples from each category to test. This approach improves coverage and makes your tests easier to maintain.




#### Sprint-3/4-stretch-investigate/password-validator.test.js
Some of the passwords in this array are invalid passwords.

The function can return `false` for multiple reasons.
To test a specific reason, choose an input that satisfies all other conditions except the one you're targeting. This way, if the function returns `false`, you can confidently attribute it to that specific condition.

For example, the function might return `false` for "1234" not only because it is fewer than 5 characters, but also because it lacks a lowercase letter.
As a result, we can't be certain that the function correctly handles the case of passwords shorter than 5 characters, since multiple conditions are being violated simultaneously.





---
## In older ITP

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


#### Sprint-3/implement/rotate-char.js

How would you modify your implementation if shift is allowed to be a negative number to represent a rotation in the opposite direction?

#### Sprint-3/revise/implement/creditCardValidator.js

Why not check also cases where number of digits is not exactly 16?

