Code works on normal circumstances. My comments are mainly surrounding handling of
errors and unusual user input.

---
The README has this requirement:
> It must also support at least one additional feature.

In the PR description, can you list the extra features you implemented?

---
Code could use some documentation (comments).

A useful rule of thumb is to ask yourself whether you could still explain or figure out how the code works few months from now. If the answer is uncertain, consider adding a comment to help future readers understand the intent and reasoning behind it.

---
2000 is a magic number and best practice is to represent all magic numbers as named constants.



### Server Side

##### Input Validation

It's good practice to validate all request inputs.

Note:  A more robust implementation 
- Should also handle the case where `req.body` is `null`, which would cause `const { text, sender } = req.body;` to throw.
- Should not assume `text` and `sender` are strings (if they existed)

In this exercise, let's assume the request is always coming from the code in `script.js`. **So no change needed.**

##### GET /messages


##### POST /message

Can you suggest a strategy to ensure that users in different time zones see timestamps in their respective local time zones?

---
What's the reason to embed the received user message in the response?

---
#### Unique ID
Relying on `Date.now()` for IDs can lead to collisions if multiple messages are processed within the same millisecond. A UUID-based approach is safer and ensures uniqueness.




### Client Side

Can you describe the pros and cons of creating the message timestamp 
1. on the user's machine
2. on the server

?

In addition, how does this timestamp format affect users living in different time zones?  

##### Rendering messages

What if the user's name or message contains characters like `<` or `>`? For example, `<javascript src="..."></script>`.

---
If the presentation logic (lines 15 to 61) is kept in a separate function that take messages as its parameter,
it would make the rendering logic easier to develop and test independently.




---
