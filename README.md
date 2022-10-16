# React useEffect in *React.StrictMode*
## TLDR
### Use a data fetching library
After discussing this. The best alternative looks to be adding som 3rd party library for handling external data fetching.
#### Libraries
TODO

## Simple example
### FetchData.jsx
[FetchData.jsx](src/components/FetchData.jsx)
Example of how to use *React.useEffect* inside *React.StrictMode*, and avoiding having it get called twice.

The gist of it is to store some state which we are checking against before proceeding with the call. We are using *React.useRef* for keeping this state across component remounts.

## Custom hooks
### useCategories.js
[useCategories.js](src/utilities/customHooks/useCategories.js)
An better alternative, than writing this each time you need to make a request, is to extract it into a custom hooks for fetching data.

## Further reading
- React Docs
  - [React Docs](https://beta.reactjs.org/)
  - [React Hooks](https://reactjs.org/docs/hooks-reference.html)
  - [React.StrictMode](https://reactjs.org/docs/strict-mode.html#ensuring-reusable-state)
  - [Fetching data](https://beta.reactjs.org/learn/synchronizing-with-effects#fetching-data)
  - [You might not need an effect](https://beta.reactjs.org/learn/you-might-not-need-an-effect)
- Search terms
  - [react hooks](https://www.google.com/search?q=react+hooks)
  - [react component lifecycle](https://www.google.com/search?q=react+component+lifecycle)
  - [react strict mode](https://www.google.com/search?q=react+strict+mode)

## Some speculation
*React.useEffect* gets called when the component gets mounted in Reacts virtual DOM.
This happens regardless of what you put inside the dependecy array.

*React.StrictMode* mounts and then remounts every component twice in development mode.
This part of *StrictMode* is, as I understand it, used for creating components resiliant to unmounting and remounting.  