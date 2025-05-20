Slack message:
The "PR Essentials" file on the [Canvas](https://codeyourfutur-yov6609.slack.com/archives/C07QX99JK7B) in the #cyf-code-review channel has some helpful tips for preparing your pull requests.

Can you give those suggestions a try? They can really help speed up the review process. Thanks.


In the CYF course, the recommended way to let a reviewer know you've made the requested changes is to:
  - Reply to their comments (which you’ve already done — great!)
  - Change the label from "Reviewed" to "Needs review" instead of directly asking them to review again.

---

A well-prepared PR makes it easier for reviewers to approve it with minimal back-and-forth.
The "PR Essentials" file on the [Canvas](https://codeyourfutur-yov6609.slack.com/archives/C07QX99JK7B) in the #cyf-code-review channel has some helpful tips to make your PRs more robust and ready for review.
Can you take a few minutes to check against the essentials, including how to prepare PR description? Doing so can help speed up the review process.

And as a practice to get better at using AI tools, try running your code by ChatGPT. You can ask ChatGPT
```
review HTML code:
...        <--- paste your HTML code here
```

Then take a look at the suggestions it gives you, and pick out the ones that actually make sense for your project. It's a great way to learn and improve your work.

Once you've finished making changes, please leave a comment on this PR so I’ll get notified. Thanks!

---
The 3rd and 5th items in the original Self-check list would have already implied your implementation meets all those requirements listed in the `README.md` file of the exercise. An alternative to make the spec available to the reviewer could be to include a link to the relevant backlog or to the `README.md` file.

I restored the original checklist in your PR description. can you check them to make them look like
![image](https://github.com/user-attachments/assets/6f85e6c5-4dd7-49aa-a9fc-e17a9dc2189d)
?

---

You can find some useful info to prepare a PR in the "PR Essentials" file on this Slack Canvas:
https://codeyourfutur-yov6609.slack.com/archives/C07QX99JK7B

In addition to implementing changes based on reviewer feedback, it's considered good practice to respond to each comment. This helps clarify how each piece of feedback was addressed and demonstrates that you've carefully reviewed the suggestions. Additionally, your response may trigger a notification (depending on the reviewer's settings), helping ensure they’re aware of the updates you’ve made.


---

To follow best practices, make sure to check the items in the Self-Checklist to confirm your pull request meets the guidelines. Additionally, provide a brief description summarizing the purpose of the PR and the changes you’ve made.


---

I saw some very good suggestions when I asked ChatGPT this:
```
review HTML code:
...        <--- paste your HTML code here
```

To get better at using AI tools, try running your code by ChatGPT. Take a look at the suggestions it gives you, and pick out the ones that actually make sense for your project. It's a great way to learn and improve your work.

---

I think you can further improve your wireframe webpage by addressing the following issues:

---

VSCode includes a built-in feature called "Format Document" which can be used to format our code for better readability and consistency.
To use the feature, right-click inside the code editor and select the option.
Please note that if there are syntax errors in the code, the "Prettier" extension may not format HTML code properly.

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


**Optional change**: 
The spacing in the second article appears to be slightly different from that in the third. In particulars,
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
1. A user can currently enter a name consisting of only spaces (e.g., " "). To enforce stricter validation, consider using the `pattern` attribute to disallow whitespace-only name.

2. There is a way to configure a `<select>` element so that no option is selected by default, allowing the user to make an explicit choice.

