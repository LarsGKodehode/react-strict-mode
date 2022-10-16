// Libraries
import {
  useState,
  useEffect
} from 'react';

// Keep all your endpoint stored somwher easly accessible like a Global file
const ENDPOINTS = {
  CATEGORIES: "www.api.example.com/" // Your endpoint here
};


export default function useCategories() {
  const [ isLoading, setIsLoading ] = useState(true)
  const [ error, setError ] = useState(null)
  const [ categories, setCategories ] = useState([])
  
  async function fetchAndSetCategories() {
    setIsLoading(true)
    
    try {
      const repsonse = await fetch(ENDPOINTS.CATEGORIES);

      // 
      if (!repsonse.ok) {
        const error = new Error(repsonse.statusText);
        setError(error);
        return
      }

      const data = await repsonse.json();
      setCategories(data);

    } catch (error) {
      // Cathes potential errors calling fetch or when converting the response object to JSON
      setError(error);
    } finally {
      setIsLoading(false);
    };
  };

  useEffect(() => { fetchAndSetCategories() }, []);

  return {
    isLoading,
    error,
    categories,
    fetchAndSetCategories,
  };
};