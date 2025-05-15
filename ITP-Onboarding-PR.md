Please follow the instructions in "PR Essentials" on this Slack Canvas:
https://codeyourfutur-yov6609.slack.com/archives/C07QX99JK7B


In addition to implementing changes based on reviewer feedback, it's good practice to respond to each comment, indicating what was changed or how the request was addressed.

---

Here is some general information I shared with every learner regardless of how they prepared their code:

1. VSCode includes a built-in feature called "Format Document" which can be used to format our code for better readability and consistency.
To use the feature, right-click inside the code editor and select the option.
Please note that if there are syntax errors in the code, the "Prettier" extension may not format HTML code properly.

2. It's a good practice to use an [HTML validator](https://validator.w3.org/) to check our HTML code for errors and ensure it follows web standards.

3. It is also good practice to use an AI tool to review our code. It can often provide valuable feedback and help identify small mistakes we might overlook.

---
When a wireframe is provided, our implementation should closely reflect its appearance and layout to ensure consistency with design expectations.
You're off to a solid start! To align more closely with the wireframe, here are a few areas where the layout or appearance could be refined:
  - The PAGE TITLE is not centered.
  - The "A SHORT DESCRIPTION" beneath the page title is omitted.
  - The left and right edges of the first article are misaligned with the left edge of the second article and the right edge of the third article.
  - The image in the first article is not center and it does not cover the full width of its container.
  - The spacing (margin and padding) used in the articles are not consistent; 

Could you adjust the CSS to better match the wireframe's appearance and layout?



  - The spacing before and after the title in the second article differs from that in the third. Can you fix those spacing to ensure consistency across all articles.

---

There are some errors in your HTML code. Can you fix these errors?

--- 

On a separate note, it is best practice to include a brief description of the changes you made in the Changelist section of every PR.




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
