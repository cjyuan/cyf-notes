This instructions assume you had created a branch named `B2` from a branch named `B1` instead of from `main`, and you wanted to rebase `B2` from `B1` to `main`.

#### 1. Open a terminal in VSCode

#### 2. Switch to the branch you want to rebase (`B2`)
`git switch B2`

Note: You can check which branch is the current branch via the command `git branch` (to list all branches with current branch highlighted)

#### 3. Rebase `B2` from `B1` onto `main`
`git rebase --onto main B1 B2`

For more details about this command, see
https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase#:~:text=interactive%20rebase%20display-,Advanced%20rebase%20application,-The%20command%20line

#### 4. Update (and Overwrite) your files in branch B2 at Github
While you are in branch B2 and you have verified that it has been successfully rebased, execute the following command:
`git push --force origin`
