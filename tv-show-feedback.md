## Lighthouse Accessibility Score in Snapshot Mode

Lighthouse **Snapshot** mode audits a webpage in its exact current state without reloading the page.

Currently, the Lighthouse Accessibility score for your application's views is not yet perfect in certain states.

Could you use Lighthouse's **Snapshot** mode (instead of the default **Navigation** mode) to check all possible views and
identify any remaining accessibility issues that could be improved?

Notes:
- In Snapshot mode, Lighthouse displays the accessibility result as a fraction rather than as a score.
- For more information about Snapshot mode, see [Lighthouse documentation](https://developer.chrome.com/blog/new-in-devtools-103#lighthouse).

## Separating the caching logic from the app

async fetchAll()
async fetchEpisode(showId)
  -- If nothing in cache, perform fetch. Otherwise return the cached value.
  -- Throw an error if something wrong.

Could be implemented in a separate file.


## 

