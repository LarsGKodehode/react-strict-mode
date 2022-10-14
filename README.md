# React useEffect in *React.StrictMode*
## Relevant file(s)
Look at **src/components/FetchData.jsx**

It contains one example of how to structure an API call
when you are using *React.useEffect* inside *React.StrictMode*.

## Some speculation
*React.useEffect* gets called when the component gets mounted in Reacts virtual DOM.
This happens regardless of what you put inside the dependecy array.

*React.StrictMode* mounts and then remounts every component twice in development mode.
This is, as I understand it, for catching a set of bug related to components lifecycle.