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
