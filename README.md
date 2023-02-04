# Udemy-React

All React projects on Udemy Course

## 10 Side Effects (Effect), Reducers, Context API

**Side Effect**

> A React side-effect occurs when we use something that is **outside the scope of React.js** in our React components e.g. the Browser APIs like localStorage.It means that it is not part of the React framework, for example, the localStorage in your browser.When we use React with any of the Browser’s API such as the localStorage, we are creating side-effects.

-   Store Data in browsers storage
-   Send http requests to backend servers, handling errors after http requests
-   Set & Manage timers, intervals

**useEffect Hook**
The Effect Hook lets you perform side effects in function components.

![useEffect](/Slides/useEffect.png)

**useReducer Hook**

![useReducer](/Slides/useReducer.png)

![JS Reduce Function](/Slides/reducer_js.png)

![reduce VS useReducer](/Slides/reduceVSuseReducer.png)

![useReducer](/Slides/useReducer3.png)

![useReducer](/Slides/useReducer4.png)

![useReducer](/Slides/useState_VS_useReducer.png)

---

## Context API

> Context API is a feature in React that allows components to share information with each other without the need for props drilling. It provides a way to pass data through the component tree without having to pass props down manually at every level. This makes it easier to manage the state of your application and to update it when necessary. The Context API is a powerful tool for building React applications and can be used to handle things like user authentication, theme management, and translations.

> ❗️ Context API is great tool when states are updating rarely. But when states are updating constantly it causes a lot of issues, because if context some value is changing, other values is rendering too (without any purposes). So, every time your information changes, every component wrapped in context.Provider re-renders. It decreases performance.
> ❗️ So if you have an application that has data that is constatntly chnaging, it is not recomended use CONTEXT API.

![useReducer](/Slides/Context-API.png)

![Context Limitations](/Slides/Context-Limitations.png)

![Context Limitations](/Slides/Rules-of-Hooks.png)

---

## How Does React Work?

![Context Limitations](/Slides/How_React_works.png)

![Context Limitations](/Slides/How_React_works2.png)

![Context Limitations](/Slides/Virtual_DOM_Working_System.png)

---

## React Memo

> **Using memo will cause React to skip rendering a component if its props have not changed**. This can improve performance.
> React.memo can be a great tool if you have a huge component tree with a lot of child components & on a high level in the component tree you can avoid unnecessary re-render cycles of the entire branch of the component tree. By avoiding reevalution of parent component we are also automatically avoiding the reevalution of it's child components. Its use is recommended only in large projects.

![React Memo](/Slides/React_memo.jpeg)

[React Memo - Example](https://www.w3schools.com/react/react_memo.asp)

---

## useCallback Hook

useCallback is a hook that allows us store a **function** across component executions. So, it allows us to tell React that we want to save a function & that function should not be recreated with every execution. **If we know that function should never change we can use useCallback to store it & disable recreation.**

![React Memo](/Slides/useCallback.png)

---

## Stage Batching

**State Batching** is when React groups multiple state updates into a single re-render for better performance. In React 17 and prior, updates inside React event handlers were batched. But updates inside of promises, setTimeout, native event handlers, or any other event were not batched in React by default.

---

## useMemo Hook

> useMemo Hook allows us memoize/store **any kind of data** you want to store (just like useCallback does for functions).

The React useMemo Hook returns a memoized value.
**Think of memoization as caching a value so that it does not need to be recalculated.**
**The useMemo Hook only runs when one of its dependencies update.**
This can improve performance.
The **useMemo** and **useCallback** Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.

![useMemo Hook](/Slides/useMemo_Hook.png)

---

## Class Based Components (Statefull Components)

![Class Components](/Slides/class_comps.png)
![Class Components 2](/Slides/class_comps_2.png)
![Class Components 3](/Slides/class_comps_3.png)
![Class Components 4](/Slides/class_comps_4.png)
![Error Baundary](/Slides/errorBoundary.png)

> **ComponentDidCatch(error)** is similar to "try,catch" block

---

## setInterval | clearInterval

![setInterval](/slides/setInterval_clearInterval.png)

---

## Custom Hooks

![Rules of Hooks](/slides/Rules-of-Hooks.png)

> **Custom Hooks** are just regular functions, just as the built-in hooks (useState, useEffect..) but **they are functions which can contain statefull logic.** You can build custom hooks to outsource a statefull logic into reusable logic.
> Unlike "Regular Functions", **custom hooks** can use other React Hooks & React State (they can access useEffect, useState...).
> **So it is just mechanism of reusing logic.**

When U create custom hook, you **must** use **`use`** keyword.

![Custom Hook Example](/slides/custom_hook_example.png)

---

## Forms Validation

![forms](/slides/forms_validation.png)
