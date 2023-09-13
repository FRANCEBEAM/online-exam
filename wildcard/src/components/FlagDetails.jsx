import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

const FlagDetails = () => {
    const { id } = useParams();
    const [flag, setFlag] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8081/details/${id}`)
        .then(res => {
          setFlag(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
      axios.delete(`http://localhost:8081/delete/${id}`)
      .then(res => {
        navigate('/')
        console.log(res)
      })
      .catch(err => console.log(err))
    }

  return (
    <div className='w-full h-full py-20 bg-[rgb(34,40,49)]'>
      <div className='w-full h-full max-w-[680px] m-auto '>
      <Link className='text-white underline' to='/'>Back</Link>
        {flag.map((country) => (
          <div className='pt-7' key={country.id}>
            <img className='w-32' src={country.flag_img} alt="" />
            <h1 className='text-white text-4xl font-bold pt-3'>{country.flag_name}</h1>
            <p className='text-white font-light pt-1'>{country.flag_official}</p>
            <p className='text-white pt-7 text-base'>{country.flag_desc}</p>
            <div className='pt-6'>
              <p className='text-white pt-4 text-base font-bold'>Population: <span className='font-light'>{country.flag_pop}</span></p>
              <p className='text-white pt-4 text-base font-bold'>TimeZones: <span className='font-light'>{country.flag_timezone}</span></p>
              <p className='text-white pt-4 text-base font-bold'>Continent: <span className='font-light'>{country.flag_continent}</span></p>
            </div>
            <div className='pt-7 gap-4 flex'>
              <Link to={`/edit/${country.id}`} className='bg-[#2F58CD] p-2 px-6 text-white rounded-md font-bold'>Edit</Link>
              <button onClick={() => handleDelete(country.id)} className='bg-[#CD2F4B] p-2 px-6 text-white rounded-md font-bold'>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FlagDetails