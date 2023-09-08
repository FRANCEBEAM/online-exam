import React, { useState, useEffect } from 'react';
import FormSearch from './FormSearch';
import ListCountry from './ListCountry';
import '../index.css'

const SearchWrapper = () => {
  const [countries, setCountries] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);
  const [searchField, setSearchField] = useState('');
  const [searchResults, setSearchResults] = useState([]);


//   Function to fetch data from the API
  const fetchData = () => {
    const apiUrl = 'https://restcountries.com/v3.1/all';

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setCountries(data);
        setDataFetched(true); 
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };


  useEffect(() => {
    if (!dataFetched) {
      fetchData();
    }
  }, [dataFetched]);


  // handle search
  const handleSearch = (e) => {
    e.preventDefault();

    const query = searchField.toLowerCase();

    // Filter countries based on the search query and set the search results
    const filteredCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(query)
    );
    setSearchResults(filteredCountries);
  };

  return (
    <div className='wrapper'>
      <FormSearch
        handleSearch={handleSearch}
        searchField={searchField}
        setSearchField={setSearchField}
      />
      {
        dataFetched ? <ListCountry countries={searchResults.length > 0 ? searchResults : countries} /> : <div className='loading-message'>Loading...</div>
      }

    </div>
  );
}

export default SearchWrapper;
