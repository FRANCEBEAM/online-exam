import React, { useState } from 'react'
import FormSearch from './FormSearch'
import FormList from './FormList'

const Home = () => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = (input) => {
    setSearchInput(input);
  };

  return (
    <>
      <div className='w-full h-full justify-center py-20'>
        <FormSearch onSearch={handleSearch} />
        <FormList searchInput={searchInput} />
      </div>
    </>
  )
}

export default Home