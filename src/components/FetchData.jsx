// Library
import {
  useRef,
  useEffect
} from "react";


/**
 * Example component showcasing one way to use useEffect
 * without triggering the code twice
 */
const FetchData = (props) => {
  // The useRef hook returns an object which
  // stays consistent across this component lifecycle
  const loadingData = useRef(false);

  // Grab data on mounting,
  // useEffect is called each times this components remounts
  // remounting is different from rerenders
  // I am not an expert on the lifecycle
  useEffect(() => {
    // Check if task is in process
    if(loadingData.current) return;

    // Set status
    loadingData.current = true;

    // If you need to use an async funtion,
    // this is the way.
    // Wrap everything inside a function
    async function getData() {
      setTimeout(() => {
        console.log("This will only be logged once");

        // When everything has either succeded or failed
        // update the state
        loadingData.current = false;
      }, 1000);
    };

    // Call the function
    getData();
  }, []);


  return(
    <>
      <h1>Example component</h1>
      {
        // Do somthing interresting with fetched data here
      }
    </>
  )
};

export default FetchData;