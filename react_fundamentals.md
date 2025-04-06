# Fundamentals of React

Challenges faced while tailwind setup:

- Multiple Versions of Tailwind Installed: I encountered an issue where multiple versions of Tailwind CSS were installed, which caused confusion and some conflicts. This made it difficult to ensure the correct version was being used.
- Wrong Setup Path: Initially, I followed the wrong approach after creating the React app. I repeatedly tried to initialize Tailwind and kept encountering the error message “command not found,” which led me to believe that Tailwind was not installed correctly. Even though I saw the folders indicating the presence of Tailwind, I mistakenly assumed something was wrong with the installation process.
- Experimenting with Different Methods: I tried several methods to install and configure Tailwind CSS. However, none of these approaches seemed to work until I opted for the Vite-based setup. This method provided a more streamlined process, giving me all the options directly in the terminal , which made it much easier to proceed.
- Mistaking Warnings as Errors: During the setup, I received several warnings while starting the React app. I mistakenly assumed these warnings were indicative of a problem with my setup, which caused unnecessary frustration and delayed my progress. Had I trusted the process and followed the correct setup method, it would have been much smoother.

React components and props:

Components in react refers to the bits of code that can be use several times. The name of a components should always start with a capital letter. There are basically 2 typres of components in react that are functional components and class components.

Props refer to properties in react. they are basically the attributes of a component. Read-only and can be used to display dynamic content within the component.

Components are important as:

- They can be reused which reduces code duplication.
- Improves state management as components can handle their own data, and they can communicate with one another through props, making it easier to create dynamic and interactive UIs.
- Makes testing and debugging easier as they can be tested separately in isolation reducing the complexity of tests
- Components help separate the logic and UI, leading to better code organisation.

Modifing state directly instead of using setState:

- This will cause the app to try incrementing the counter, but the number will not update on the screen because the state change is not being saved properly. As a result, 0 will always be displayed, even when clicking the button.
This happens because React does not detect state changes when modifying state directly, so it does not re-render the component to show the new value. Instead, setState must be used to ensure React updates the UI correctly.

Issues while working with lists:

- Type of list to be used based on the tasks. for example either FlatLists or SectionList.
- The lists in react require unique key prop to be able to update the lists efficiently.
- Performance issue with long lists as it slows down the UI.
- Forgetting to use SetState can lead to the lists not being saved properly and leading to unexpected issues.
- Empty list must always be given a default value.

## Advantages of using Tailwind CSS

- Customisation: You can easily customise your design without writing custom CSS. It gives you control over how elements look with utility classes, letting you tweak the design quickly.
- Speed: With Tailwind, you can create designs much faster. Instead of writing custom CSS for each component, you can apply pre-built classes directly in your HTML.
- Responsive design: It’s built to make it easy to create responsive layouts. You can easily add breakpoints and adjust styles for different screen sizes.
- Consistency: It enforces consistency across your project since you're using predefined utility classes, rather than writing different styles for every component.

## Potential pitfalls

- Long HTML: Since you're using lots of utility classes directly in your HTML, it can make your markup look messy and harder to read or manage.
- Learning curve: Even though it simplifies design, there’s still a bit of a learning curve to get used to all the classes Tailwind offers.
- Overwhelming class names: When you have a lot of utility classes in your HTML, it can get overwhelming and harder to maintain, especially in larger projects.
- Not suitable for all projects: Tailwind works great for rapid prototyping and smaller projects but might not always be the best choice for large-scale or highly dynamic applications where custom CSS is required for fine-tuned control.

## Client-side routing advantages

- Faster Page Loads: Since only the necessary parts of the page are updated (instead of reloading the whole page), it makes navigation feel faster. You're not waiting for the entire page to reload each time you click a link.
- Smooth User Experience: With client-side routing, navigation feels seamless and smooth, as there's no page refresh. It’s like using an app, where content changes instantly without any interruptions.
- Less Server Load: The server doesn’t need to send a new HTML page each time a user clicks a link. It only sends the required data, which reduces the load on the server and makes it more efficient.
- Better Performance: After the initial load, all the data and components are already available in the browser, so moving between pages is really quick and doesn’t need to wait for the server to respond every time.
