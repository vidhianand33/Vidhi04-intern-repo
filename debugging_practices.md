# Debugging techniques

I recreated a buggy React component where the child component receives an object via props (`state`) and directly mutates one of its properties

This was happening because the child was directly modifying the count property of the same object used in the parent state. In JavaScript, objects are passed by reference, so changing state.count inside the child also modified the parent’s state object before React could re-render.

What was the issue?

The child component directly mutated a prop (`state.count += 5`), which unintentionally modified the parent state due to JavaScript’s object references. This caused the count to increase by 6 (1 from parent + 5 from child) on each click instead of just showing `count + 5`.

What debugging method did you use?

- Used `console.log()` inside the child to inspect the value of `state.count`.
- Verified the mutation using React Developer Tools.
- Applied knowledge that objects in JavaScript are passed by reference.

How did you resolve the problem?

I avoided direct mutation by computing a new value inside the child without changing the prop
