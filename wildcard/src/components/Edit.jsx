import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const initialValues = {
        flag_name: '',
        flag_official: '',
        flag_desc: '',
        flag_pop: '',
        flag_timezone: '',
        flag_continent: '',
      };

    useEffect(() => {
        axios.get(`http://localhost:8081/details/${id}`)
        .then(res => {
            setValues({
                ...values, flag_name: res.data[0].flag_name,
                flag_official: res.data[0].flag_official,
                flag_desc: res.data[0].flag_desc,
                flag_pop: res.data[0].flag_pop,
                flag_timezone: res.data[0].flag_timezone,
                flag_continent: res.data[0].flag_continent,
            })
        })
        .catch(err => console.log(err))
    }, [id])
    
    const [values, setValues] = useState(initialValues);

    const handleUpdate = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8081/update/${id}`, values)
        .then( res => {
            navigate('/')
            console.log(res)
        })
        .catch(err => console.log(err))
    }
    

  return (
    <div className='w-full h-full m-auto'>
        <div className='w-full h-full max-w-[600px] m-auto py-12'>
            <h1 className='font-bold text-4xl'>Edit Content</h1>
            <form className='flex flex-col pt-10 gap-y-5' onSubmit={handleUpdate}>
                <div className='flex flex-col'>
                    <label>Country Name:</label>
                    <input className='p-2' type="text" onChange={(e) => setValues({...values, flag_name: e.target.value})} value={values.flag_name} />
                </div>
                <div className='flex flex-col'>
                    <label>Country Official:</label>
                    <input className='p-2' type="text" onChange={(e) => setValues({...values, flag_official: e.target.value})} value={values.flag_official} />
                </div>
                <div className='flex flex-col'>
                    <label>Country Description:</label>
                    <textarea cols="20" rows="10" onChange={(e) => setValues({...values, flag_desc: e.target.value})} value={values.flag_desc}></textarea>
                </div>
                <div className='flex flex-col'>
                    <label>Country Population:</label>
                    <input className='p-2' type="text" onChange={(e) => setValues({...values, flag_pop: e.target.value})} value={values.flag_pop} />
                </div>
                <div className='flex flex-col'>
                    <label>Country TimeZone:</label>
                    <input className='p-2' type="text" onChange={(e) => setValues({...values, flag_timezone: e.target.value})} value={values.flag_timezone} />
                </div>
                <div className='flex flex-col'>
                    <label>Country Continents:</label>
                    <input className='p-2' type="text" onChange={(e) => setValues({...values, flag_continent: e.target.value})} value={values.flag_continent} />
                </div>
                <div className='pt-3'>
                    <button className='bg-[#2F58CD] p-3 px-6 rounded-md text-white font-bold'>Update</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Edit