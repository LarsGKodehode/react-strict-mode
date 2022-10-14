# React useEffect in *React.StrictMode*
## Relevant file(s)
Look at __src/components/FetchData.jsx__

It contains one example of how to use *React.useEffect* inside *React.StrictMode*.

## Further Reading
- Search terms
  - [react hooks](https://www.google.com/search?q=react+hooks)
  - [react component lifecycle](https://www.google.com/search?q=react+component+lifecycle)

## Some speculation
*React.useEffect* gets called when the component gets mounted in Reacts virtual DOM.
This happens regardless of what you put inside the dependecy array.

*React.StrictMode* mounts and then remounts every component twice in development mode.
This is, as I understand it, for catching a set of bug related to components lifecycle.