# React Fundamentals

## When to use Redux instead of useState ?

1.Local vs Global State:

useState: Best for managing local state within a component. It’s great when the state only needs to be used by that one component.
Example: A button that toggles a setting or a counter in a single component.
Redux: Better for global state that needs to be shared across multiple components. If the state needs to be accessed in different parts of the app, Redux is a good choice.
Example: A user’s login status or a shopping cart that’s used in different parts of the app.

2.Simple vs Complex State:

useState: Great for managing simple states, like a number, text, or a true/false value.
Example: Managing an input field or a small counter.
Redux: If the state starts getting more complex or if there are lots of different actions that change it, Redux can keep things more organised. It’s also useful when you need to manage large chunks of state.
Example: A complex form or handling lists with multiple sub-lists.

3.Shared State Across Components:

useState: Perfect if the state is only needed in one component or just a couple of them. You don’t need to worry about passing the state around too much.
Example: A simple dropdown menu inside one component.
Redux: If you need to share the same state across multiple components, Redux makes it easy to manage that. It can keep your state consistent across the whole app.
Example: A global theme or language setting that multiple components need to access.

4.Persistence and Debugging:

useState: It’s fine for simple state that doesn’t need to be saved or tracked when you refresh the page. But if you need to track state changes over time, useState won’t cut it.
Example: Storing temporary form data that doesn’t need to stick around after a page reload.
Redux: With Redux, you can persist state, and it comes with great tools for tracking changes and debugging. You can even roll back to previous states or inspect how actions are changing your data.
Example: Storing whether a user is logged in, even after they refresh the page.

5.Performance Considerations:

useState: It’s lightweight and great for small apps or when you don’t need to worry about performance much.
Redux: For larger apps with more components, Redux helps manage state changes more efficiently. It makes sure that only the parts of your app that need to update are re-rendered.

To conclude useState is a better choice for simple apps and Redux for complex

## Using selectors in Redux instead of directly accessing the state has a few good benefits

- Keeps Things Neat: Selectors hide the messy details of how you get the data from the state. That means your components don’t need to worry about how the data is stored, they just ask the selector for it.

- Reusability: You can use the same selector in multiple components. Instead of writing the same logic in every component to get data from the state, you create one selector and use it wherever you need.

- Cleaner Code: By using selectors, you keep the logic of accessing the state separate from the rest of your app’s components. This makes the components simpler and easier to manage.

- Consistency: With selectors, you make sure that every component gets the data in the same way. So, no matter where you’re using it, the logic is consistent.

- Easier to Test: You can test selectors on their own, which makes it easier to check if they’re doing the right thing without having to test the entire component.
