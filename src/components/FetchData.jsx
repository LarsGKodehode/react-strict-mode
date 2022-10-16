// Library
import {
  useState,
  useRef,
  useEffect
} from "react";


// Keep all your endpoint stored somewhere easly accessible like in the Global object
const ENDPOINTS = {
  RANDOM_ACTIVITY: "https://www.boredapi.com/api/activity/" // Your endpoint here
};


/**
 * Example component showcasing one way to use useEffect
 * without triggering the code twice
 */
const FetchData = (props) => {
  // Stores fetched data
  const [ data, setData ] = useState(null);

  // The useRef hook returns an object which
  // stays consistent across this component lifecycle
  const isLoading = useRef(false);

  // Grab data on mounting,
  // useEffect is called each times this components remounts
  // remounting is different from rerenders
  // I am not an expert on the lifecycle
  useEffect(() => {
    // Check if task is in process
    if(isLoading.current) return;

    // Set status
    isLoading.current = true;

    // If you need to use an async funtion,
    // Wrap everything inside a function
    // If not, don't wrap it
    async function getData() {
      try {
        const response = await fetch(ENDPOINTS.RANDOM_ACTIVITY)

        // Quit if request unsuccessful
        if(!response.ok) {
          const error = new Error(response.statusText);
          setError(error);
          return
        };

        const data = await response.json();
        setData(data);
    
    } catch (error) {
      // Catches potential errors calling fetch or when converting the response object to JSON
      setError(error);
      } finally {
        isLoading.current = false;
      }
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