import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../details.css';

const FlagDetails = () => {
  const [country, setCountry] = useState({});
  const [dataFetched, setDataFetched] = useState(false);
  const { id } = useParams();

  // Function to fetch data for a specific country
  const fetchData = () => {
    const apiUrl = `https://restcountries.com/v3.1/name/${id}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data.length > 0) {
          // Assuming the API returns an array of countries, take the first one
          setCountry(data[0]);
          setDataFetched(true);
        } else {
          // Handle the case when no data is found for the given country name
          console.error(`No data found for country: ${id}`);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []); 

  return (
    <div className="details-container">
      {dataFetched ? (
        <div className="card-descp">
          <img src={country.flags.png} alt="" />
          <h1>{country.name?.common}</h1>
          <p>{country.name?.official}</p>
          <p className='flag-alt'>{country.flags.alt}</p>
          <div className='flag-ptc'>
            <p className='flag-pol'>Population: {country?.population}</p>
            <p className='flag-timezone'>TimeZone: {country?.timezones}</p>
            <p className='flag-continent'>Continents: {country?.continents}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FlagDetails;
