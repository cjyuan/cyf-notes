
Is the change made in this file necessary to fix the bug?

In general, we should limit changes to those that are directly required to address the issue and avoid unrelated modifications.


## Can't log in from profile page

Could you use AI to research:
> On a legacy codebase, what's the guideline for formatting when fixing a bug? The existing code is formatted with formatter X, but I'm using formatter Y.
> Should I reformat only the code I touch, leave the existing formatting as-is, or reformat the entire file?

---

Could you use AI to research:
> In a legacy codebase, should code that isn't causing any problems be updated?


## Bloom too long

When a request to add a bloom fails, how does the client know that it failed because the bloom content exceeds 280 characters, rather than for some other reason?

---
This fixes the bug. well done.

Why not replace the magic number 280 by a named constant?

## Hashtag slowing down my browser (flashing)
