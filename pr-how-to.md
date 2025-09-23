### What is a Pull Request (PR)?

A pull request, or PR, is a way to share your code for review. In many companies, PRs are used to suggest changes and then merge them into the main project.

In CodeYourFuture's courses, we use PRs a little differently. The goal is review, not merging.

When you open a PR, you are creating a **comparison (diff)** between your branch and another branch (usually `main`).  
But it's not just about sharing code — it's about starting a conversation.  
A PR lets mentors or teammates:
- ✅ See what you changed (new code, fixes, or features)
- 💬 Discuss the changes (comments, suggestions, or questions)
- 👍 Review and provide feedback (approve or request improvements)

Think of it like handing in an assignment. The PR is the place where you "submit" your work so others can check it, comment on it, and help you improve.

Merging won't happen. Instead, you'll take the feedback, update your code, and learn from the process.

### Opening a PR: 

#### 1. Ensuring your branch is clean
A clean branch makes your PR easier to review. 

Before opening a new PR, you should ensure your branch is clean in the following manners
  - It contains only the **changes related to one exercise or project** (typically specified in a backlog) in the curriculum.
    - **Important**: Ensure your branch is created from `main`.
  - It is free of unrelated edits, random experiments, or leftover debugging code.
  - The code is properly indent. (In VSCode, you can install the **prettier** extension and then use the "Format document" function" to automatically indent code)

#### 2. Selecting source and target branches
- **Source branch**: Your branch
- **Target branch**: The branch you want to compare to (which is typically the CodeYourFuture's `main`).

#### 3. Preparing PR Description
The **PR description** is where you explain what your changes are and why you made them.
It helps reviewers quickly understand the context without having to read all the code.

Here are the guidelines when filling out a PR template in CodeYourFuture's courses.
- **Title**: Ensure it is in the format specified in the template.

- **Self-checklist**: Check them using the Markdown syntax ` - [x] ...` to indicate your PR meets the specified requirements.
  
- **Changelist**: Replace the placeholder text `Briefly explain your PR` by a brief description of your changes.

- **Questions**:
  - If you have questions to ask a mentor, replace the placeholder text with your questions.
  - If you don't have any question, remove the section.

### How to use labels to communicate the state of a PR
In CodeYourFuture's courses, we use PRs a little differently. Instead of the using the typical "approve and merge" approach,
we use labels to communicate the state of a PR.

- **`Needs review`** (by **trainee**)
  - To indicate a PR is ready to be reviewed
  - To be added when **creating a PR**, or **after addressing reviewer's feedback**.
  - This label should replace the **`Reviewed`** label (if there is one).
- **`Review in progress`** (by **trainee**)
  - To inform other mentors that the PR is currently being reviewed.
- **`Reviewed`** (by **mentor**)
  - To indicate a PR has been reviewed and the trainee can start addressing the feedback.
  - This label should replace both **`Needs review`** and **`Review in progress`** labels.
- **`Complete`** (by **mentor**)
  - To indicate the PR has been approved.

### How to address reviewer's comments
Responding to PR comments is like a conversation: **listen**, **reply thoughtfully**, and **show that you acted on feedback**.

1. **Be respectful and collaborative**
    - Treat comments as opportunities to learn, not criticism.
    - Even if you disagree, respond politely and explain your reasoning.

2. **Acknowledge feedback**
    - If you agree -> say _"Good point, I'll fix it."_
    - If you don't fully agree -> say _"I see your point. Here's why I approached it this way ..."_
    - **Don't ignore comments** -- silence can feel dismissive.

3. **Make changes, then confirm**
    - After addressing a comment, let the reviewer know (e.g., _"I've updated the variable name as suggested."_).
    - This shows you're actively engaging in the review.

4. **Ask questions if unclear**
    - If you don't understand a suggestion, ask for clarification.
    - Example: _"Could you explain what you mean by simplifying this function?"_

**Note**: PR description and comments are expressed in [Markdown extended syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).

### What else you can do to improve your PR?
Before submitting a PR, you can use AI tools to review your code, documentation, or explanations.

AI can help you:
- Spot typos, formatting issues, or unclear comments.
- Suggest clearer variable names or function descriptions.
- Check for missing edge cases or potential improvements.

Think of it as a second pair of eyes -- not a replacement for human review, but a way to catch obvious issues and polish your work.
