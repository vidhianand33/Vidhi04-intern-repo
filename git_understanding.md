Git Concepts

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