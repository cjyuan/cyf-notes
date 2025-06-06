Both of your PRs do not yet have a "Needs review" label. Without the label, volunteers will not recognise them as being "ready to be reviewed".

Until you're able to add a label, here are some actions you can take to further improve your implementation and your PR (in order to speed up the review process):
1. Follow the suggestions in the "PR Essentials" guide on the [Canvas](https://codeyourfutur-yov6609.slack.com/archives/C07QX99JK7B) in the #cyf-code-review channel. It has some helpful tips to make your PRs more robust and ready for review.

2. Ask AI tools for suggestions. For example, you can ask ChatGPT
```
review HTML code:
...        <--- paste your HTML code here
```

Then take a look at the suggestions it gives you, and pick out the ones that actually make sense for your project. It's a also great way to learn and improve your work.

---

A PR branch should include only the changes relevant to the specific task or feature it addresses. In this case, the branch created for the Form-Control exercise includes modifications to files in the "Wireframe" folder, which are considered unrelated to the current work.

Could you please revert the changes made to the unrelated file(s) so that the PR remains focused?

Note: If you need help with this, feel free to bring it up during a Saturday workshop—volunteers will be available to assist you.

---

Can you find out from ChatGPT the following
- What's the best practice to respond to reviewer reviews in a PR?
- How to respond to comments in a conversation in a PR?

You can use this PR to practice them.

---

Can you also run your code through ChatGPT to see if there’s anything (no matter how minor) that could be improved? I noticed some small inconsistencies, but I believe you can identify them yourself with ChatGPT’s help.

---

Please note that in CYF courses, the recommended way to inform the reviewer of your changes is to do both of the following:
  - **Reply to their feedback.**
    - In the responses, clarify how each piece of feedback was addressed to demonstrate that you've carefully reviewed the suggestions.
    - Your response may trigger a notification (depending on the reviewer's settings), helping ensure they’re aware of the updates you’ve made. 
  - **Replace the "Reviewed" label by a "Needs review" label** (which you have done -- great!)
    - Without this label, the reviewer would not know if your changes is ready to be reviewed.
---

In addition to implementing changes based on reviewer feedback, it's considered good practice to respond to each comment. This helps clarify how each piece of feedback was addressed and demonstrates that you've carefully reviewed the suggestions. Additionally, your response may trigger a notification (depending on the reviewer's settings), helping ensure they’re aware of the updates you’ve made.

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

There are a few errors in your HTML code, and the code could benefit from better indentation for readability. Can you take a few minutes to go through the suggestions in the "PR Essentials" guide to help improve your code quality and the overall pull request?

You can find the "PR Essentials" guide on the [Canvas](https://codeyourfutur-yov6609.slack.com/archives/C07QX99JK7B) in the #cyf-code-review channel. 
It includes practical tips for writing cleaner code and making your PRs easier to review. Thanks!

---

In your PR description, instead of including the checklist from the project's `README.md`, you can check off the 3rd and 5th items in the original Self-check list to confirm that your implementation meets all the requirements outlined in the project's `README.md`.

I restored the original checklist in your PR description. can you check them to make them look like
![image](https://github.com/user-attachments/assets/6f85e6c5-4dd7-49aa-a9fc-e17a9dc2189d)
?

---

You can find some useful info to prepare a PR in the "PR Essentials" file on this Slack Canvas:
https://codeyourfutur-yov6609.slack.com/archives/C07QX99JK7B



---

To follow best practices, can you update your PR description by carrying out the following actions?
    - Check the items in the Self-Checklist to confirm your pull request meets the guidelines (which you have done! Good!)
    - Provide a brief description (under the "Changelist" section) summarizing the purpose of the PR and the changes you’ve made 

Can you format the checked boxes using the proper Markdown syntax in your PR description so that they look something like this?
![image](https://github.com/user-attachments/assets/74c526b0-3a54-4570-8bb4-680398337bcb)
(With proper Markdown syntax, we can use mouse to check/uncheck the items)

To follow best practices, in your PR description, can you provide a brief description (under the "Changelist" section) summarizing the purpose of the PR and the changes you’ve made?
![image](https://github.com/user-attachments/assets/f510bc87-2e14-4e47-853b-65a7453d7b41)


The code for the "Changelist" section looks like this in the PR template:
```
### Changelist

Briefly explained your PR.

```


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


---
When a wireframe is provided, our implementation should closely reflect its appearance and layout to ensure consistency with design expectations. You're off to a solid start, but the main purpose of implementing a wireframe is to translate structure and functionality, not final visual design. Visual design is usually handled by UI/graphic designers after the wireframe phase. To better align with the wireframe, here are a few areas where the layout and appearance could be refined:
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

It’s important to ensure the implementation adheres to the specifications outlined in the `README.md` to maintain consistency and avoid unexpected behavior. If you’d like to introduce new features you believe are useful, it’s best to request pre-approval first to ensure alignment with project goals.

--- 
One of the acceptance criteria, "The page footer is fixed to the bottom of the viewport", has not yet been satisfied. Can you make the necessary change? (Suggestion: Ask ChatGPT what that requirement means).

---

According to https://validator.w3.org/, there are errors in your code. Can you fix them?

--- 


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

VSCode's "Format Document" feature can help us format our code for better readability and consistency, including breaking a long line of text into shorter lines of text.
To use the feature, right-click inside the code editor and select the option.
Please note that if there are syntax errors in the code, the "Prettier" extension may not format HTML code properly.

This is an example of a webpage with a layout that matches the wireframe.
![image](https://github.com/user-attachments/assets/15f3fcb5-5a5a-4826-8e94-f8f0b716cb61)


### Form-Controls
1. Currently a user can enter a name consisting of only space characters (e.g., " "). Can you enforce a stricter validation rule using the `pattern` attribute to disallow any name that contains only space characters?

2. There is a way to configure a `<select>` element so that no option is selected by default, allowing the user to make an explicit choice.


---

A PR branch should include only the changes relevant to the specific task or feature it addresses.\
You can see all the modified files in the current branch in the "Files changed" tab of this PR: 
https://github.com/CodeYourFuture/Module-Onboarding/pull/472/files
 

Are the modified files in the "Wireframe" folder and the modified `index.html` in the top level folder related to your form implementation? 
If not, you should revert the changes made in those files in order to make this branch clean. 
![image](https://github.com/user-attachments/assets/e7c4cd38-993f-46f1-8e3f-abeafb086ae6)


To revert the changes made to certain files, you can replace them with the versions from your `main` branch.
(The files in the `main` branch remain unmodified since you forked them from CYF.)
Here’s how to do it:
    - Download the original versions of the files from your [main branch on GitHub]().
    - On your computer (in VSCode), switch to the branch where you want to revert the changes. (`Mo-reza_Articles`)
    - Replace the modified files with the downloaded versions from the `main` branch.
    - Commit the changes and push the commit to GitHub.


