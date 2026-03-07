#### Generic
Using a boundary value as a test case is always a good idea. Many programs fail because they do not check the boundary cases properly.

---
If you want to prevent some code in a file from being executed when the file is imported by another file (via `require(...)`), you can lookup "how to check if a JS script is executed directly or via import?".

---

Can you revise these test descriptions to make the failure messages more informative, so it's immediately clear both what caused the test to fail and what the expected outcome was?

---
Can you add more test cases to this group to make the coverage more comprehensive?
If the number of cases becomes too large, you can consider organizing them into meaningful subcategories.

---
Sprint-3 exercises need to be submitted in separate PRs (1 PR for each backlog):
- **Required**
  - [Complete Sprint 3 implement and rewrite tests coursework](https://github.com/CodeYourFuture/Module-Structuring-and-Testing-Data/issues/6)
  - [Complete Sprint 3 practice TDD coursework](https://github.com/CodeYourFuture/Module-Structuring-and-Testing-Data/issues/695)
- **Optional**
  - [Complete Sprint 3 stretch coursework](https://github.com/CodeYourFuture/Module-Structuring-and-Testing-Data/issues/696)
  - [Refactoring Dead Code](https://github.com/CodeYourFuture/Module-Structuring-and-Testing-Data/issues/903)

Otherwise the GitHub validation bot will complain and prevent you from adding the "Needs Review" label to your PR.

Can you update this PR (or close it) and then resubmit your work in separate PRs? You can tag me in your new PRs.

#### Sprint-3/1-key-implement/1-get-angle-type.js

Checking `angle > 90` is optional because previous if-statements can guarantee `angle` is always more than 90.

#### Sprint-3/2-mandatory-rewrite/1-get-angle-type.test.js

We could specify multiple `expect(...)` statements within each `test()` to cover multiple values that belong to the same case. For example,
```
test("should identify reflex angle (180 < angle < 360)", () => {
  expect(getAngleType(300)).toEqual("Reflex angle");
  expect(getAngleType(359.999)).toEqual("Reflex angle");
  expect(getAngleType(180.001)).toEqual("Reflex angle");
});
```





Could consider describe this as `"Expect 'Reflex angle' if 180 < angle < 360"`.
I asked ChatGPT to create a concise version of your description, it gave me this:
`Return 'Reflex angle' for angles between 180 and 360 degrees`
After I give additional constraints `if symbol or operator is allowed (as in describing test in code)`, it showed me:
`Return 'Reflex angle' if 180 < angle < 360`

---
The spec isn't clear whether `angle` can be assigned a number not in the interval (0, 360).
When `angle` is >= 360, what should the function return? (Also, by definition, angles <= 0 are not considered acute angles.)

When we implement a function that can return a value, to ensure reliability, we should ensure it will always return a defined value instead of `undefined` (which represents "no return value").
If the parameter, `angle`, is not within the recognised range, we can design the function to return a special value (e.g., "Invalid angle") or throw an error.



#### Sprint-3/1-key-implement/2-is-proper-fraction.js
#### Sprint-3/2-mandatory-rewrite/2-is-proper-fraction.test.js

According to the definition of ***proper fraction*** in mathematics:
- `isProperFraction(-4, 3)` should return `false`
- `isProperFraction(-2, 5)` should return `true`
- `isProperFraction(-1, 1)` should return `false`
- `isProperFraction(-2, -3)` should return `true`

Can you look up the definition of ***proper fraction*** and update your function accordingly?

---

In mathematics, -A/B == A/-B == -(A/B), and -A/-B == A/B for any integers A and B (B ≠ 0).
They represent a proper fraction if A < B and B ≠ 0.



Consider comparing the absolute value of the numerator and the denominator instead.


 ***Input normalisation***, the process of pre-processing the input values before they are used in computation, can often simplify complexity of code, improve performance, and prevent errors.

**Can you update your function implementation and Jest tests to take into account all possible cases where `numerator` and `denominator` can be negative, positive, or zero?** 


#### Sprint-3/1-key-implement/3-get-card-value.js
#### Sprint-3/2-mandatory-rewrite/3-get-card-value.js

In JavaScript, strings that represent valid numeric literals in the language can be safely converted to equivalent numbers. For examples, "0x02", "2.1", or "0002".

Does your function return the value you expected from each of the following function calls?

```
getCardValue("0x02♠");
getCardValue("2.1♠");
getCardValue("0002♠");
```

---
In JavaScript, strings that represent valid numeric literals in the language can be safely
converted to equivalent numbers or parsed into a valid integers.  
Do you want to recognize these string values as valid ranks?

To find out what these strings are, you can ask AI
> What kinds of string values would make `Number(rank)` evaluate to `2` in JS?

> What kinds of string values would make `parseInt(rank, 10)` evaluate to `2` in JS?




---

Can you think of a better way to ensure that a card’s rank matches exactly one of the nine allowed whole numbers?



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
    expect(getCardValue("10♥")).toEqual(10);
    // Note: We could also use a loop to check all values from 2 to 10.
});
```


---

To test if a function can throw an error as expected, we could use `.toThrow()`. You can find out more about how to use `.toThrow()` here: https://jestjs.io/docs/expect#tothrowerror (Note: Pay close attention to the syntax of the example)






#### Sprint-3/3-mandatory-practice/implement/get-ordinal-number.js

`getOrdinalNumber(101)` should return "101st". 
Consider looking up the rules to clarify how ordinal numbers are formed.

---

To ensure thorough testing, we need broad scenarios that cover all possible cases.
Listing individual values, however, can quickly lead to an unmanageable number of test cases.
Instead of writing tests for individual numbers, consider grouping all possible input values into meaningful categories.
Then, select representative samples from each category to test. This approach improves coverage and makes our tests easier to maintain.

For example, we can prepare a test for numbers 2, 22, 132, etc. as 
```
test("append 'nd' to numbers ending in 2, except those ending in 12", () => {
    expect( getOrdinalNumber(2) ).toEqual("2nd");
    expect( getOrdinalNumber(22) ).toEqual("22nd");
    expect( getOrdinalNumber(132) ).toEqual("132nd");
});
```

---

When a test fails with the message "... all other numbers", it may be unclear what "other numbers" actually refers to. A more specific and informative message, such as "... numbers ending in 0, 4–9, or 11–13", would make the output easier to understand and act on.


---
#### Sprint-3/3-mandatory-practice/implement/repeat.test.js

If you modified `repeat()` to throw an error when `count` is negative, and you wanted to test if the function can throw an error as expected, you can use `.toThrow()`. You can find out more about how to use `.toThrow()` here: https://jestjs.io/docs/expect#tothrowerror (Note: Pay close attention to the syntax of the example)

#### Sprint-3/4-stretch-investigate/password-validator.test.js
Some of the passwords in this array are invalid passwords.

---

The function can return `false` for multiple reasons.
To test a specific reason, choose an input that satisfies all other conditions except the one you're targeting. This way, if the function returns `false`, you can confidently attribute it to that specific condition.

For example, the function might return `false` for "1234" not only because it is fewer than 5 characters, but also because it lacks a lowercase letter.
As a result, we can't be certain that the function correctly handles the case of passwords shorter than 5 characters, since multiple conditions are being violated simultaneously.


### Practice TDD

#### Sprint-3/2-practice-tdd/count.js


#### Sprint-3/2-practice-tdd/count.test.js
- Could consider testing more samples.

- Could consider testing these cases:
    - A case to show that the match is case sensitive
    - A case to show that the function is expected to work also for non-alphabets

#### Sprint-3/2-practice-tdd/get-ordinal-number.js

Here is an alternative to express the code on line 3:
```javascript
const lastTwoDigits = num % 100;

if  (lastTwoDigits >= 11 && lastTwoDigits<= 13) 
```
- More expressive
- Avoid evaluating the same expression multiple times
- (Cons) more code

Note: The difference might not be obvious in this example.



#### Sprint-3/2-practice-tdd/get-ordinal-number.test.js



#### Sprint-3/2-practice-tdd/repeat-str.js



#### Sprint-3/2-practice-tdd/repeat-str.test.js

To test if a function can throw an error as expected, we can use `.toThrow()`. 
You can find out more about how to use `.toThrow()` at https://jestjs.io/docs/expect#tothrowerror (Note: Pay close attention to the syntax of the example)

