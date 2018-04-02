# Contributing
1. Make sure you have most recent changes on master branch - `git checkout master && git fetch --all && git pull`
2. Create new branch `git checkout -b <branch_name>`
3. Start developing ~~bugs~~ features. Add all your unstaged files and commit with `git commit -am "<commit_message>"` Tips:
  * Try to divide your changes into multiple commits, the smaller the better.
  * Give your commits meaningful messages, [**use the imperative mood**](https://chris.beams.io/posts/git-commit/#imperative)
4. Push your changes with `git push` you might need to set the remote upstream, git will tell you what to do then.
5. Make sure you have most recent changes from master on your branch - checkout and pull from master like in step 1 and checkout back to your branch, run `git rebase master`. Resolve any issues followed by `git rebase --continue`. Once everything is resolved, `git status` will tell you than your branch has diverged. Don't worry, run `git push --force`
6. Once you are done with feature implementation and your branch is up-to date with master - submit a PR in GitHub
