import React, { useState } from 'react'

const FormSearch = ({onSearch}) => {

  const [searchInput, setSearchInput] = useState('');

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchInput);
  };


  return (
    <>
        <div className='m-auto max-w-[450px] text-center bg-white p-7 rounded-md'> 
            <h1 className='justify-center text-center font-bold'>Wilcard Search</h1>
            <form className='flex items-center m-auto py-2' onSubmit={handleSearch}>
                <div className='justify-center m-auto gap-1 flex'>
                    <input 
                      type="text" 
                      className='p-1 m-auto bg-none border-[#121212] border-2 rounded-md border-solid'
                      onChange={handleInputChange}
                      value={searchInput} />
                    <button className='bg-[#2F58CD] p-1 text-white rounded-md px-3 hover:bg-[#4768c2]'>Search</button>
                </div>
            </form>
        </div>
    </>
  )
}

export default FormSearch