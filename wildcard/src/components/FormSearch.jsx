import React, { useState } from 'react'


const FormSearch = ({handleSearch, searchField, setSearchField}) => {
  return (
    <>
        <div className='search-wrapper'>
            <h1 className='content'>Wildcard Search</h1>  
            <form onSubmit={handleSearch} className='form'>
            <input 
            type="text" 
            className='input-search' 
            value={searchField}           
            onChange={(e) => setSearchField(e.target.value)} 
            placeholder="Search countries" 
/>
                <button type='submit' className='btn-search'>Search</button>
            </form>
        </div>
    </>
  )
}

export default FormSearch