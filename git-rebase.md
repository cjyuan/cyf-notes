This instructions assume you had created a branch named `B2` from a branch named `B1` instead of from `main`, and you wanted to rebase `B2` from `B1` to `main`.

**Important**:
- You need to execute the commands within your cloned repository.
- You may want to backup your files before trying these commands


#### 1. Open Your Cloned Repository in VSCode and Start a Terminal in VSCode.
VSCode will start the terminal in the top-level folder of the current project.

#### 2. Switch to the branch you want to rebase (`B2`)
`git switch B2`

Note: 
- You can check which branch is the current branch via the command `git branch` (to list all branches with current branch highlighted)

#### 3. Rebase `B2` from `B1` onto `main`
`git rebase --onto main B1 B2`

For more details about this command, ask an AI tool or see
https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase#:~:text=interactive%20rebase%20display-,Advanced%20rebase%20application,-The%20command%20line

#### 4. Update (and Overwrite) your files in the remote branch B2 (on Github)
While you are in branch B2 and you have verified that it has been successfully rebased, execute the following command:
`git push --force origin`
