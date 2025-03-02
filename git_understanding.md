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