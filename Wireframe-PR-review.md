1. The following are not very clear in the specification, resulting in reviewers and trainees having different expectations:

### Whether placeholder content is allowed
  - Should trainees use different images or can they use the placeholder image for all articles?
    - If trainees are allowed to use the placeholder image for all articles, can they set the `alt` attribute an empty string?
  - Can the README link be left empty? 
  - Does the footer's placeholder text need to be replaced?

### How much should the page layout matches the wirefame?
These are some of the characteristics reviewers focused on:
  - The PAGE TITLE and the SHORT DESCRIPTION beneath it should be centered.
  - The left and right edges of the first article should align with the left edge of the second article and the right edge of the third article.
  - The images should span the full width of the articles.
  - The image height in the second and third articles should align.
  - The article content (title, summary, "Read More" link) should be left-aligned.
  - The "Read More" links should have a border.

2. Apparently requiring the trainees to check the checkboxes in the PR description does not help.
Many trainees are unaware of  these implicit requirements. We could explicity specify that
  - Code should be formatted consistently
  - Code should be free of any errors and warnings when checked using https://validator.w3.org/
  - Page content should be free of typo and grammar mistakes
  
Note: We could include these instructions in the top-level README.md (similar to what we have in https://github.com/CodeYourFuture/Module-Structuring-and-Testing-Data/blob/main/readme.md):
  - How to use VSCode "Format Document" to format code
  - How to enable "Format on save" in VSCode
  - Use https://validator.w3.org/ to valid HTML code
    - Note: The W3C [CSS Validation Service](https://jigsaw.w3.org/css-validator/) does not work well with custom properties.
   
---


- PR marked as completed with no comment (possibly review given in person?)
  - Code still has errors, page layout does not quite match the wireframe.
  -  https://github.com/CodeYourFuture/Module-Onboarding/pull/1015
  -  https://github.com/CodeYourFuture/Module-Onboarding/pull/984
 
-  PR Completed without any change to article content
  - https://github.com/CodeYourFuture/Module-Onboarding/pull/1014


- Reviewer did not require the layout to match the wireframe image.


How much should the page layout match the wireframe?
  - Aligning "Read More" links?

