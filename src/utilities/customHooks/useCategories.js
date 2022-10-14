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
    
    const repsonse = await fetch(ENDPOINTS.CATEGORIES);
    // Uncertain how to properly check for errors, keeping it simple for now
    setError(repsonse.status);

    const data = await repsonse.json();
    setCategories(data);

    // Finally update state
    setIsLoading(false)
  };

  useEffect(() => { fetchAndSetCategories() }, []);

  return {
    isLoading,
    error,
    categories,
    fetchAndSetCategories,
  };
};