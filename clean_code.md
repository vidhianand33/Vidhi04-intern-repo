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