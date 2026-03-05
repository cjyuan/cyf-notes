This instructions assume you had created a branch named `B2` from a branch named `B1` instead of from `main`, and you wanted to rebase `B2` from `B1` onto `main`.

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
While you are in branch B2 and you have verified that it has been successfully rebased, execute the following command to update the remote branch (on GitHub):
`git push --force origin`

---
One way to revert changes to a file is via the `git restore` command.

First, locate a commit before the file was modified. It could be the first commit you made, assuming the branch started in a clean state. 

Next, record the first 7 characters of the commit SHA.

Suppose the file is `path/to/file`, and you want to restore the file to its state before the commit with SHA `1234567`.  
The command is:
```
git restore --source=1234567^ path/to/file
```

After the file is restored, make a commit and push the changes to GitHub.
