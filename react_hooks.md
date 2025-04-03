# useCallback function

Problems solved:

- skipping re-rendering of components as it helps prevent unnecessary re-creations of functions when components re-render. Normally, when a component re-renders, all the functions inside it are recreated. This can cause child components that rely on these functions to re-render unnecessarily. useCallback keeps the same function reference across re-renders unless the dependencies change, which helps improve performance.

How does useCallback work differently from useMemo?

- useCallback is specifically for functions. It "remembers" the function and only recreates it if certain values (dependencies) change.
- useMemo is for any type of value (not just functions). It "remembers" the value and only recalculates it if the dependencies change.

When would useCallback not be useful?

- The function doesn’t change between renders or if the component doesn’t re-render often. In such cases, using useCallback adds unnecessary complexity without improving performance.
If the function is passed to child components that don’t have performance optimisations like React.memo, useCallback won’t make a big difference.
