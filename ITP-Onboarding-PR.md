Can you refer to "PR Essentials" on this Slack Canvas:
https://codeyourfutur-yov6609.slack.com/archives/C07QX99JK7B

Note: In addition to implementing changes based on reviewer feedback, it's good practice to respond to each comment, indicating what was changed or how the request was addressed.

---

To follow best practices, make sure to check the items in the Self-Checklist to confirm your pull request meets the guidelines. Additionally, provide a brief description summarizing the purpose of the PR and the changes you’ve made.


---

I saw some very good suggestions by ChatGPT When I asked it to review your code by asking
```
review HTML code:
...        <--- paste your HTML code here
```

Can you try asking ChatGPT to review your code, go through its suggestions, and choose the ones that are most helpful to apply to your work? 

---

I think you can further improve your wireframe webpage by addressing the following issues:



---

Here is some general information I shared with every learner regardless of how they prepared their code:

1. VSCode includes a built-in feature called "Format Document" which can be used to format our code for better readability and consistency.
To use the feature, right-click inside the code editor and select the option.
Please note that if there are syntax errors in the code, the "Prettier" extension may not format HTML code properly.

2. It's a good practice to use an [HTML validator](https://validator.w3.org/) to check our HTML code for errors and ensure it follows web standards.

3. It is also good practice to use an AI tool to review our code. It can often provide valuable feedback and help identify small mistakes we might overlook.

---
When a wireframe is provided, our implementation should closely reflect its appearance and layout to ensure consistency with design expectations. You're off to a solid start! To better align with the wireframe, here are a few areas where the layout and appearance could be refined:
  - The PAGE TITLE is not centered.
  - The "A SHORT DESCRIPTION" beneath the page title is omitted.
  - The left and right edges of the first article are misaligned with the left edge of the second article and the right edge of the third article.
  - The image in the first article is not center and it does not cover the full width of its container.
  - The spacing (margin and padding) used in the articles are not consistent; 
  - The images do not span the full width of their container.
  - The article content is not left-aligned.
  - The "Read More" links are missing a border.

Could you adjust the CSS to better match the wireframe's appearance and layout?

  - The spacing before and after the title in the second article differs from that in the third. Can you fix those spacing to ensure consistency across all articles.


- The spacing in the second article appears to be slightly different from that in the third. In particulars,
  - The vertical gap before and after the article title
  - The margin/padding size around the "Read More" link
  
  With the original CSS, this spacing issues appears to be affected by the content length. Can you modify the CSS code to make the spacing more consistent in all articles regardless of content length?

--- 
One of the acceptance criteria, "The page footer is fixed to the bottom of the viewport", has not yet been satisfied. Can you make the necessary change? (Suggestion: Ask ChatGPT what that requirement means).

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
1. A user can currently enter a name consisting of only spaces (e.g., " "). To enforce stricter validation, consider using the `pattern` attribute to disallow whitespace-only or invalid name formats.

2. There is a way to configure a <select> element so that no option is selected by default, allowing the user to make an explicit choice.

