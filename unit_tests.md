# Jest testing

Why is automated testing important in software development?
Automated testing is crucial in software development because it helps ensure that the code works as expected. It saves time by quickly catching bugs and errors whenever the code is updated, reducing the chances of issues going unnoticed. This helps maintain the quality of the software, speeds up the development process, and makes it easier to spot problems early on. Automated tests can be rerun every time the code changes, so the software remains reliable and stable, even as new features are added.

What did you find challenging when writing your first Jest test?
The hardest part of writing my first Jest test was understanding how to set everything up and making sure I had all the necessary imports. It was tricky figuring out how to select the right elements to test. The error messages were sometimes a bit confusing, but over time, I got more comfortable with the syntax and how Jest works. Used  npm test -- --verbose to get more details why the tests failed
It took a bit of practice to get my tests to run correctly, but once I got the hang of it, it felt rewarding to see them pass.

## Benefits of using React Testing Library

- Tests User Behavior: React Testing Library focuses on how users interact with your app, rather than testing code details. This ensures your tests are more meaningful and realistic.

- Less Fragile Tests: Tests don’t break when you change how the component works internally, as long as the user-facing behavior remains the same. This makes tests more reliable in the long run.

- Cleaner Components: It encourages better design by testing how users interact with components rather than testing internal functions or details.

## Challenges when simulating user interaction

- Handling Async Updates: Sometimes actions like button clicks cause changes that take time to appear. It’s tricky to make sure tests wait for these changes.

- Choosing the Right Elements: Picking the correct element to interact with can be difficult if many similar elements exist. Using good queries (like getByRole or getByText) helps avoid confusion.

- Waiting for UI Updates: After a user interaction, the UI might update, and you need to make sure your test waits for this before checking results.
