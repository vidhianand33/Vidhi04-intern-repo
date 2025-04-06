# Git Concepts

Difference between staging and committing
    According to the research I did staging is like preparing your changes before you actually save them. You choose which changes you want to include in your next save, but you don’t save them yet. And committing is when you actually save your changes. Once you commit, those changes are stored in your project’s history, and they become a permanent part of your work.

Why does Git separate these two steps?
    Git separates these two steps so you can be more organised. First, you can choose exactly what changes to include in your save (staging), and then you can save them (commit) when you're ready. It gives you more control over what goes into your project’s history and when. It also lets you make sure you're happy with your changes before making them permanent.

When would you want to stage changes without committing?
    One might want to stage changes without committing if:

    * You want to prepare everything but are not quite ready to save it yet.
    * You’re working on different things and want to save them separately later, even though you staged them at the same time.
    * You just need some time to review your changes before saving them.

Merge conflict

What caused the conflict?
The conflict was caused by editing the same section of the file in two different branches. One change was made on the main branch, and a different change was made on the other branch. When trying to merge the branches, Git couldn’t figure out which change to keep, so it flagged a merge conflict.

How did you resolve it?
I opened the conflicting file in my Git client, where Git showed both changes marked with conflict markers. I reviewed both changes and decided which ones to keep. After editing the file to resolve the conflict, I committed the changes.

What did you learn?
I learned that merge conflicts happen when two branches make changes to the same part of a file. It’s important to manually review and choose which changes to keep during a conflict. I also learned how to use a Git client to visually resolve conflicts.

Branching and Team Collaboration

Why is pushing directly to main problematic?
Pushing directly to main can cause problems because it might introduce bugs or break things that aren’t noticed right away. If multiple people are working on the same code and pushing directly to main, it could cause conflicts or issues that affect everyone’s work.

How do branches help with reviewing code?
Branches help with code review by letting you make changes separately from the main code. You can create a branch, make changes, and test them without messing up the main project. This way, others can review your changes before they are merged into the main branch.

What happens if two people edit the same file on different branches?
If two people edit the same file on different branches, Git will create a merge conflict when trying to merge the branches. Git won't know which changes to keep, so it will ask you to manually choose the correct version or combine the changes.

git checkout main -- file
This command gets a specific file from the main branch and replaces your local version of that file with the one from main, without changing other files.
git cherry-pick commit
This command allows you to take just one commit from another branch and apply it to your current branch, without merging the entire branch.
git log
This shows a list of all the commits made in the current branch, along with who made them and when. It's good for seeing the history of changes.
git blame file
This command shows who last edited each line of a file and when, which is helpful for understanding why a specific line of code was changed.
When would you use it in a real project?

git checkout main -- file is helpful if you want to bring back a file from main and discard your local changes to that file.
git cherry-pick commit is useful when you want a specific change from another branch but don't want to merge the whole branch.
git log is useful to see the history of your project and find out who made changes and when.
git blame file is great for finding out who made changes to specific lines of code, especially if you need help understanding why something was changed.
What surprised you while testing these commands?

I was surprised by how useful git blame was to track who made changes to a file and when. It helped me figure out who to ask if I needed more details on a change. git cherry-pick also surprised me because it's a great way to just grab one commit without pulling in everything from another branch.

Commit message

A good commit message is short, clear, and tells you what the change is about. It should explain why the change was made, not just what was changed. A good commit message usually follows this structure:

Short summary: A brief one-line description of the change (no more than 50 characters).
Details (optional): A short explanation of why the change was needed or any extra info.
Action verb: Start the message with a verb like "Fix", "Add", "Update" so it sounds like an action.

How does a clear commit message help in team collaboration?

A clear commit message helps everyone on the team understand what was changed, why, and how it impacts the project. It makes it easier for other team members to review code and find out why certain changes were made, which is especially helpful when multiple people are working together.

How can poor commit messages cause issues later?

Poor commit messages can cause confusion. If the message is vague, like "fixed stuff", no one will know exactly what was fixed. It’s harder to track down bugs, review the code, or understand what’s going on, which slows down the development process. In short, it just makes things messy and harder to work with.

Git Bisect

What does git bisect do?
git bisect helps find which commit introduced a bug. You mark one commit as "good" (where everything worked) and one as "bad" (where the bug appears), and Git tests commits in between to find the exact one that caused the issue.

When would you use it?
If something breaks and you don’t know when it happened, git bisect helps you track it down fast. Instead of checking every commit one by one, it quickly finds the problem commit.

How is it better than checking manually?
Going through every commit takes forever. git bisect makes it way faster by narrowing it down step by step.

Pull request

Why are PRs important in a team workflow?
PRs let team members review code before it gets added to the main project. This helps catch mistakes, keep code quality high, and make sure everyone agrees on changes.

What makes a well-structured PR?
A clear title, a short but useful description of the changes, and why they’re needed. It should also link to any related issues and include screenshots (if relevant).

What did you learn from reviewing an open-source PR?
People leave helpful comments to suggest improvements, and discussions help refine the code. It’s not just about merging—it’s about making the code better together.
