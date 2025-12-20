For the TV Show project, you need to submit
- A link to your level 400 PR you made against your partner's repo (`main` or `level-300` branch)
- A link to your level 500 PR (which you can make against your OWN `main` branch).
- A link to the TV Show app deployed at Netlify. 

The acceptance criteria does not mention the TV Show App has to be bug free, just thought you may want to know:

---

Your current description of your planned actions lacks the five SMART characteristics.

Could you rephrase them so that they satisfy all five SMART characteristics?


---

You missed an item described in the Acceptance Criteria ( https://programming.codeyourfuture.io/data-flows/success/ ), "Work out your [LinkedIn Social Selling Index](https://github.com/CodeYourFuture/Module-Data-Flows/issues/12), and posted the actions you will take to improve this".

For the Linkedin Social Selling Index, you need to
1. Clone the issue/backlog to your course planner
2. In your copied issue,
  - Share the screenshot of your LinkedIn Social Selling Index
  - Write one SMART action you will commit to get more active on LinkedIn (as a comment in the issue). A SMART action should be Specific, Measurable, Achievable, Relevant, Time-bound.
3. Share the link to your updated copied issued.

---
- Can you share a screenshot of your LinkedIn SSI? LinkedIn users cannot share their SSI via a link.

- The exercise also requests a description of a SMART action aimed at increasing your activity on LinkedIn. Can you express one action that satisfies these five characteristics?
  - Specific: The action is clearly defined and easy to understand
  - Measurable: The action can be measured, so you can track your progress
  - Achievable: The action is realistic and feasible
  - Relevant: The action is meaningful and fits the purpose of your goal
  - Time-bound: The action has a deadline
 
---

The LinkedIn SSI task asks for ONE action written in the SMART format.
A SMART action should be Specific, Measurable, Achievable, Relevant, Time-bound.
Can you express one action that satisfies these five characteristics?


- Specific: The action is clearly defined and easy to understand
- Measurable: The action can be measured, so you can track your progress
- Achievable: The action is realistic and feasible
- Relevant: The action is meaningful and fits the purpose of your goal
- Time-bound: The action has a deadline


---
TV Show Requirements 

##### Level-0
- You have a GitHub repository called Project-TV-Show which is not a fork of this repo.
- The index.html page on your GitHub project contains your name and GitHub username.
- Your project is deployed to Netlify at cyf-USERNAME-tv.netlify.app.
- Your deployed project has your name and GitHub username in its title.

##### Level-100

1. All episodes must be shown
2. For each episode, _at least_ following must be displayed:
   1. The name of the episode
   2. The season number
   3. The episode number
   4. The medium-sized image for the episode
   5. The summary text of the episode
3. Combine season number and episode number into an **episode code** in the form `S02E07` (0-padded two digits)
4. Your page should state somewhere that the data has (originally) come from [TVMaze.com](https://tvmaze.com/), and link back to that site (or the specific episode on that site). See [tvmaze.com/api#licensing](https://www.tvmaze.com/api#licensing).


##### Level-200

Add a live search input which meets the following requirements:

When a user types a search term into the search box:
1. Only episodes whose summary **OR** name contains the search term should be displayed
2. The search should be case-**in**sensitive
3. The display should update **immediately** after each keystroke changes the input
4. Display how many episodes match the current search
5. If the search box is cleared, **all** episodes should be shown

Add a `select` drop-down which lets the user jump quickly to a particular episode, with the following requirements:
1. The select input should list all episodes in the format: "S01E01 - Winter is Coming"
2. When the user makes a selection, they should be taken directly to that episode in the list
3. Bonus: if you prefer, when the select is used, ONLY show the selected episode. If you do this, be sure to provide a way for the user to see all episodes again.

#### Level-300

1. You must delete the `episodes.js` file from your repository.
2. Your website must still work the same, but by using a `fetch` request to https://api.tvmaze.com/shows/82/episodes. This URL should serve the exact same content as was returned by `getAllEpisodes` in `episodes.js`.
3. You must fetch this URL only _once_ per visit to your website. You should not re-fetch when someone searches, scrolls, or selects an episode from the drop-down.
4. If you don't have data yet, you should show something to tell the user to wait for the data.
5. If an error occurred loading the data, notify the user.
  1. Note: real users don't look in the console - `console.log` or `console.error` are not sufficient for this requirement.
  2. You will need to simulate an error to test this out yourself.

#### Level-400

1. Add a `select` element to your page so the user can choose a show.
2. When the user first loads the page, make a `fetch` request to https://api.tvmaze.com/shows ([documentation](https://www.tvmaze.com/api#show-index)) to get a list of available shows, and add an entry to the drop-down per show.
3. When a user selects a show, display the episodes for that show, just like the earlier levels of this project.
  You will need to perform a `fetch` to get the episode list.
4. Make sure that your search and episode selector controls still work correctly when you change shows.
5. Your select must list shows in alphabetical order, case-insensitive.
6. During one user's visit to your website, you should never fetch any URL more than once.


#### Level-500

1. When your app starts, present a listing of all shows ("shows listing")
   1. For each show, you must display at least name, image, summary, genres, status, rating, and runtime.
2. When a show name is clicked, your app should:
   1. Fetch and present episodes from that show (enabling episode search and selection as before)
   2. Hide the "shows listing" view
3. Add a navigation link to enable the user to return to the "shows listing"
   1. When this is clicked, the episodes listing should be hidden
4. Provide a free-text show search through show names, genres, and summary texts
5. Ensure that your episode search and episode selector controls still work correctly when you switch from shows listing to episodes listing and back
6. During one user's visit to your website, you should never fetch any URL more than once.








