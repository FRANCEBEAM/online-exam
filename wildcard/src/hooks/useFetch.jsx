import React, {useState, useEffect} from 'react'

const useFetch = (apiUrl) => {

  const [countries, setCountries] = useState(null);


  useEffect(() => {
    
    // const apiUrl = 'https://restcountries.com/v3.1/all';

    // Fetch data from the API
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [apiUrl]);

  return { countries  }
}

export default useFetch