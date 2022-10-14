# React useEffect in *React.StrictMode*
## Relevant file(s)
__src/components/FetchData.jsx__

## TLDR
It contains one example of how to use *React.useEffect* inside *React.StrictMode*, and avoiding having it get called twice.

The gist of it is to store some state which we are checking against before proceeding with the call. We are using *React.useRef* for keeping this state across component remounts.

## Further reading
- React Docs
  - [React Hooks](https://reactjs.org/docs/hooks-reference.html)
- Search terms
  - [react hooks](https://www.google.com/search?q=react+hooks)
  - [react component lifecycle](https://www.google.com/search?q=react+component+lifecycle)
  - [react strict mode](https://www.google.com/search?q=react+strict+mode)

## Some speculation
*React.useEffect* gets called when the component gets mounted in Reacts virtual DOM.
This happens regardless of what you put inside the dependecy array.

*React.StrictMode* mounts and then remounts every component twice in development mode.
This is, as I understand it, for catching a set of bug related to components lifecycle.