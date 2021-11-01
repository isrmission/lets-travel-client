import React, { useEffect, useState } from 'react';
import Tour from '../Home/PopularTours/Tour/Tour';

const Packages = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://shrieking-mansion-79706.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])
    return (
        <div className="travelBg pt-5">
            <div className="text-center py-5 bg-gray-50 bg-opacity-25">
                <h1 className="italic font-mono text-xl font-bold">Take a Look at Our
                </h1>
                <h1 className='font-extrabold text-4xl'>MOST POPULAR TOURS
                </h1>
            </div>
            <div className="py-10">

                <div className="grid gap-y-16 grid-cols-3">
                    {
                        services.map(service => <Tour
                            key={service.id} service={service}
                        ></Tour>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Packages;