import React, { useEffect, useState } from 'react';
import Tour from './Tour/Tour';
import './PopularTours.css';

const PopularTours = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                console.log(data)
            })
    }, [])
    return (
        <div className="travelBg pt-10">
            <div className="text-center py-5 bg-gray-50 bg-opacity-50">
                <h1 className="italic font-mono text-xl font-bold">Take a Look at Our
                </h1>
                <h1 className='font-extrabold text-4xl'>MOST POPULAR TOURS
                </h1>
            </div>
            <div className="py-10">

                <div className="grid gap-y-16 grid-cols-3">
                    {
                        services.slice(0, 6).map(service => <Tour
                            key={service._id} service={service}
                        ></Tour>)
                    }
                </div>
            </div>
        </div>
    );
};

export default PopularTours;