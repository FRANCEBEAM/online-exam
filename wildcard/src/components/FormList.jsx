import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

const FormList = ({searchInput}) => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8081/')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])

    const filteredData = data.filter((country) =>
    country.flag_name.toLowerCase().includes(searchInput.toLowerCase())
    );
    
  return (
    <>
        <div className='pt-10'>
            {filteredData.map((country) => (
                <Link to={`/details/${country.id}`} className='bg-white max-w-[450px] m-auto mt-5 p-10 flex gap-12' key={country.id}>
                    <div>
                        <img className='w-24' src={country.flag_img} alt="" />
                    </div>
                    <div className=''>
                        <h1 className='text-4xl font-bold'>{country.flag_name}</h1>
                        <p className='pt-3'>{country.flag_official}</p>
                    </div>
                </Link>))}
        </div>
    </>
  )
}

export default FormList