Both of your PRs do not yet have a "Needs review" label. Without the label, volunteers will not recognise them as being "ready to be reviewed".

### Suggestion
After you have made all the changes, share your code to an AI tool and ask it to review your code in terms of semantic, accessibility, typo, and consistency.
It can often help us catch errors, improve consistency, and reinforce best practices.

---

A PR branch should include only the changes relevant to the specific task or feature it addresses. In this case, the branch created for the Form-Control exercise includes modifications to files in the "Wireframe" folder, which are considered unrelated to the current work.

Could you please revert the changes made to the unrelated file(s) so that the PR remains focused?

Note: If you need help with this, feel free to bring it up during a Saturday workshop—volunteers will be available to assist you.

---

- I noticed the following issues in the text content:
    - Some words are misspelled or use incorrect letter casing.
    - Spacing around punctuation marks is inconsistent.

    Could you run it through an AI tool to identify any potential improvements, even minor ones, to help ensure the content is fully polished?

---
Indentation is off.

Breaking HTML text into multiple lines helps make the code easier to read, edit, and maintain while preserving the same rendered output.

VS Code formatter could be used to keep our code consistently formatted, including breaking long
lines of HTML text into multiple lines for easier editing and maintenance.

As a best practice, consider following this [guide](https://github.com/CodeYourFuture/Module-Onboarding/blob/main/practical_guide.md) to enable VS Code's
"Format on Save" option or to use its "Format Document" command to ensure your code is always consistently formatted.

Please note that code formatters may not work correctly when the source code contains syntax errors.

If formatting is not working in VS Code, check your code for syntax errors and resolve them before running the formatter again.

---
Could you look up the benefits of using a code formatter? I strongly recommend following this [guide](https://github.com/CodeYourFuture/Module-Onboarding/blob/main/practical_guide.md)
to enable VS Code's "Format on Save" option or use its "Format Document" command. This will help ensure your code is consistently formatted and easier to read and maintain.



---

Providing meaningful `alt` text is important because it ensures images are accessible to people using screen readers and also helps when images
fail to load, giving users essential context about the content or function of the image.

Can you give a more descriptive `alt` value to all images?

---
Please note that in CYF courses, the recommended way to inform the reviewer of your changes is to do both of the following:
  - **Reply to their feedback.**
    - In the responses, clarify how each piece of feedback was addressed to demonstrate that you've carefully reviewed the suggestions.
      - You may find the suggestions in this [PR Guide](https://programming.codeyourfuture.io/guides/reviewing/trainee-pr-guide/#addressing-reviewer-feedback) useful.
    - Your response may trigger a notification (depending on the reviewer's settings), helping ensure they’re aware of the updates you’ve made. 
  - **Replace the "Reviewed" label by a "Needs review" label** (which you have done -- great!)
    - Without this label, the reviewer would not know if your changes is ready to be reviewed.
---

In addition to implementing changes based on reviewer feedback, it's considered good practice to respond to each comment. 
This helps clarify how each piece of feedback was addressed and demonstrates that you've carefully reviewed the suggestions.
Additionally, your response may trigger a notification (depending on the reviewer's settings), helping ensure they’re aware of the updates you’ve made.

---
In terms of the page layout, good progress so far!  

I'd like you to compare your page carefully against the wireframe and identify any differences in terms of **alignment**, **positioning**, 
and whether any elements from the wireframe are **missing, omitted, or implemented differently**.

Once you've done that review, revisit your implementation and make adjustments where needed to bring the layout closer to the wireframe.

You will likely need to make some changes in `style.css` to achieve this.

---

A well-prepared PR makes it easier for reviewers to approve it with minimal back-and-forth.
Can you take a look at this [General Feedback](https://github.com/cjyuan/Module-Onboarding/blob/feedback/feedback.md) to see if there 
is anything you can do to make your PR more robust and ready?
Doing so can help speed up the review process.

---

Consider moving the CSS into an external `.css` file instead of embedding them within the HTML document.
This improves maintainability, keeps the markup cleaner, and makes it easier to locate, update, and reuse styles across multiple pages.

---

Could you improve the Lighthouse Accessibility score (as reported by the browser's Lighthouse dev tool) to 100?

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

Lines _____ contain code that does not comply with ____ of the requirements specified in `README.md` 
Could you update your implementation to ensure it complies with the requirements?

Note: In practice, it’s important to ensure the implementation adheres to the specifications to maintain consistency and avoid unexpected behavior. If you’d like to introduce new features you believe are useful, it’s best to request pre-approval first to ensure alignment with project goals.

--- 
One of the acceptance criteria, "The page footer is fixed to the bottom of the viewport", has not yet been satisfied. Can you make the necessary change? (Suggestion: Ask AI what that requirement means).

---

According to https://validator.w3.org/, there are errors in your code. Can you fix them?

You did a good job keeping your code error-free. However, the W3C Validator (https://validator.w3.org/)
identifies a warning in your code. Could you revise your code to resolve this warning?

---

There are some error in your CSS code. Can you fix them?

To check for CSS code for syntax error, you can try https://stylelint.io/demo 
- Copy/paste your CSS code into the editing pane, then wait for a while.


--- 
CSS

There are two `main` selectors in this file. Consider merging the properties from both selectors into a single `main` rule to make them easier to find and maintain.

---

This is an example of a webpage with a layout that matches the wireframe.
![image](https://github.com/user-attachments/assets/15f3fcb5-5a5a-4826-8e94-f8f0b716cb61)


---
The checkboxes in the PR description are not yet correctly checked in Markdown syntax. Can you fix them?
To learn more about GitHub tasklist (list of check boxes), please refer to this article: 
https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/about-tasklists


### Form-Controls
1. Currently a user can enter a name consisting of only space characters (e.g., " "). Can you enforce a stricter validation rule using the `pattern` attribute to disallow any name that contains only space characters?

2. There is a way to configure a `<select>` element so that no option is selected by default, allowing the user to make an explicit choice.


3. Why use pattern in `<input type="email">` when browsers can already perform built-in email validation?

---

Note: With this syntax, you would not need to introduce `id` and `for` atttributes.
```
<label>
  <input type="radio" name="..." value="...">
  Value of label
</label>

```


---

A PR branch should include only the changes relevant to the specific task or feature it addresses.
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




