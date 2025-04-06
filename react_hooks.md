# useCallback function

Problems solved:

- skipping re-rendering of components as it helps prevent unnecessary re-creations of functions when components re-render. Normally, when a component re-renders, all the functions inside it are recreated. This can cause child components that rely on these functions to re-render unnecessarily. useCallback keeps the same function reference across re-renders unless the dependencies change, which helps improve performance.

How does useCallback work differently from useMemo?

- useCallback is specifically for functions. It "remembers" the function and only recreates it if certain values (dependencies) change.
- useMemo is for any type of value (not just functions). It "remembers" the value and only recalculates it if the dependencies change.

When would useCallback not be useful?

- The function doesn’t change between renders or if the component doesn’t re-render often. In such cases, using useCallback adds unnecessary complexity without improving performance.
If the function is passed to child components that don’t have performance optimisations like React.memo, useCallback won’t make a big difference.

## When to use useEffect vs event handlers

Use useEffect for side effects like fetching data, setting up event listeners, or things that happen after the component mounts. Use event handlers for user actions like clicks or typing.

## What happens if you don’t provide a dependency array?

If you don’t provide a dependency array, the effect will run every time the component re-renders, which can lead to unnecessary operations like network requests or heavy calculations.

## How can improper use of useEffect cause performance issues?

- Unnecessary Re-renders: If you don’t provide the right dependencies, your effect will run after every render. This can be a problem if you’re doing something expensive, like fetching data or updating a lot of things in the DOM.
- Extra Network Requests: If your effect triggers a network request (e.g., fetching data from an API) and doesn’t have the right dependencies, it might keep making requests even when it's not needed, which wastes time and resources.
- Memory Leaks: If you set up things like event listeners or subscriptions inside useEffect and don’t clean them up when the component unmounts, it can cause memory leaks, meaning your app’s memory usage increases over time.

## How does useMemo improve performance?

useMemo helps by only recalculating something when it's really needed. It keeps the result of expensive calculations and reuses it, so your app doesn’t waste time re-running the same thing over and over. This is especially useful when the calculation takes a lot of resources or happens in large lists.

## When should you avoid using useMemo?

You should avoid useMemo when the calculation isn’t expensive or when the component is simple enough that it doesn’t really need any optimisation. If the re-rendering doesn’t cause performance issues, adding useMemo might just complicate things without offering any benefit.

## What happens if you remove useMemo from your implementation?

If you remove useMemo, your app will redo the expensive calculation every time it renders, even if the input hasn’t changed. This can slow things down, especially if the calculation or list is large, as the app will keep doing the same work unnecessarily.
