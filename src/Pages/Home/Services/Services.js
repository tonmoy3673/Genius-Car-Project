import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services,setServices]=useState([]);
        useEffect(()=>{
            fetch('services.json')
            .then(res=>res.json())
            .then(data=>setServices(data))

        },[])
    return (
        <div>
            <div className='text-center'>
            <p className='text-2xl font-bold text-orange-600'>Services</p>
            <h1 className='text-5xl font-semibold py-3 text-stone-600'>Our Service Area</h1>
            <p className='mb-10'>The majority have suffered alteration in some form, by injected humour, or randomised <br/> words which don't look even slightly believable. </p>
        </div>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            
            {
                services.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
            }
        </div>
        </div>
    );
};

export default Services;