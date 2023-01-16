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
