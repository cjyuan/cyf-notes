
---

Here is some general information I shared with every learner regardless of how they prepared their code:

1. VSCode includes a built-in feature called "Format Document" which can be used to format our code for better readability and consistency.
To use the feature, right-click inside the code editor and select the option.
Please note that if there are syntax errors in the code, the "Prettier" extension may not format HTML code properly.

2. It's a good practice to use an [HTML validator](https://validator.w3.org/) to check our HTML code for errors and ensure it follows web standards.

3. It is also good practice to use an AI tool to review our code. It can often provide valuable feedback and help identify small mistakes we might overlook.

---

When provided with a wireframe, our implementation should closely match it in appearance and layout. For examples,
  - In the wireframe, the PAGE TITLE is centered.
  - In the wireframe image, there is a "A SHORT DESCRIPTION" beneath the title.

---

There are some errors in your HTML code. Can you fix these errors?

--- 

On a separate note, it is best practice to include a brief description of the changes you made in the Changelist section of every PR.


The spacing before and after the title in the second article differs from that in the third. Can you fix those spacing to ensure consistency across all articles.

Line 17 can be better formatted as:
```
    <p>
      A README file is a document that provides information about a project,
      including its purpose, how to install and use it, and any other
      relevant details. It serves as a guide for users and developers to
      understand the project.
    </p>
```

To understand why, you can ask ChatGPT these questions:
- How HTML treat mutliple whitespace characters in text?
- What's the advantage of not writing a long paragraph of text in a single line in HTML?



### Form-Controls
1. Do you want to accept two space characters as valid name?  If you want to accept names that match certain pattern, you can explore the "pattern" attribute.

2. Currently a us
