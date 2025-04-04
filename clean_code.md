Clean code principle

Messy code example :
const button = document.querySelector("#my-button");
button.addEventListener("click", handleClick);
/I Define the click event handler function
function handleClick(event) {
event.preventDefault);
const form = document.querySelector"#my-form");
form. submitO;
}

The code is hard to read because:

Mistakes in the code – Some parts are written incorrectly, like missing brackets () and wrong function names. This will cause errors.
Messy formatting – Spaces and indentation are inconsistent, making it harder to follow. The comment is also placed awkwardly.
Not well-organized – The function is used before it's defined, which can be confusing. It's also not clear what the event handler is doing at first glance.

Cleaned up code:
const button = document.querySelector("#my-button");

button.addEventListener("click", handleClick);

// Define the click event handler function
function handleClick(event) {
    event.preventDefault(); // Prevents the default form submission

    const form = document.querySelector("#my-form");
    form.submit(); // Submits the form
}

Why is code formatting important?
Keeping a consistent style makes code easier to read, understand, and maintain. It also helps teams collaborate better since everyone follows the same structure.

What issues did the linter detect?
The linter caught missing semicolons, inconsistent spacing, and an unused variable. It also flagged some best practice suggestions, like using const instead of let for values that don’t change.

Did formatting the code make it easier to read?
Yes! The code looks much cleaner now, and it's easier to spot mistakes. The automatic formatting also saved time by fixing small issues instantly.

Naming Variables & Functions

What makes a good variable or function name?
A good name should be clear and show exactly what the variable or function does, like userID instead of num.

What issues can arise from poorly named variables?
Poor names make the code confusing and harder to understand, especially when coming back to it later.

How did refactoring improve code readability?
Refactoring made the code cleaner and easier to follow by using more meaningful names, making it quicker to understand.

Functions

Why is breaking down functions beneficial?
Breaking down functions into smaller ones makes the code easier to understand, test, and maintain. It helps you focus on one task at a time.

How did refactoring improve the structure of the code?
Refactoring made the code more organised and modular. By splitting up big functions, it became cleaner and more manageable, making it easier to follow and debug.

Reflection on Code Duplication

Issues with Duplicated Code:
- Harder to maintain: If a bug is found, it needs to be fixed in multiple places.
- Increased complexity: More lines of code make it harder to understand.
- Inconsistent updates: If one instance is changed but others are forgotten, it can lead to errors.

Refactoring improve maintainability:
- Used functions and loops to remove repeated logic.
- Improved readability and made the code cleaner.
- Easier to update: Changes only need to be made in one place.
- Reduced risk of errors and inconsistencies.

Reflection on Commenting & Documentation

When to Add Comments:
- Explain complex logic that isn’t immediately clear.
- Provide context for why a decision was made.
- Clarify non-obvious workarounds or known issues.
- Document function parameters, expected inputs, and return values.

When to Avoid Comments:
- When the code is self-explanatory 
- If the comment just repeats the code without adding value.
- Instead of commenting on bad code, improve readability by renaming variables or breaking down complex functions.

Reflection on Refactoring Code for Simplicity

What ade the original code complex:
- Overuse of nested loops and conditionals.
- Unnecessary duplication of logic.
- Hard-to-read variable names and function structures.
- Everything in one large function.

How did refactoring improve it:
- Broke down large functions into smaller, reusable ones.
- Replaced deep nesting with early returns.
- Used meaningful variable and function names.
- Applied the DRY principle to remove duplication.

Reflection on Handling Errors & Edge Cases

Issue with the Original Code:
- It didn’t check for invalid inputs (e.g., None, empty values, or wrong data types).
- It relied on nested conditionals.
- Errors were not properly caught, leading to potential crashes.

How Does Handling Errors Improve Reliability:
- Prevents unexpected crashes by catching and handling errors early.
- Improves user experience by providing clear error messages.
- Makes debugging easier by logging meaningful error details.

Unit Tests for Clean Code
- Improves productivity
- Avoids bugs
- Helps to detect errors early
- Improves code readability
- Allow safe refactoring without breaking existing functionality
- Makes debugging easier

Issues faced while unit testing
- Choosing the type of tests
- Regular reviewing: All the tests should be reviewed regularly if and when the code is updated.
- Picking Functions to Test: It's tough to decide which functions are important to test.
- Handling Complex Code: Testing becomes harder in large and complicated codebases.