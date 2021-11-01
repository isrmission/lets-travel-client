import React, { useEffect, useState } from 'react';
import Tour from '../Home/PopularTours/Tour/Tour';
import LatestNews from './LatestNews.js/LatestNews';

const LatestNewses = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://shrieking-mansion-79706.herokuapp.com/latestNews')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                console.log(data)
            })
    }, [])
    return (
        <div className="bg-gray-400 py-20 bg-opacity-50">

            <div>
                <div className="text-center py-5 bg-white">

                    <h1 className='font-extrabold text-4xl'>OUR LATEST NEWS
                    </h1>
                </div>
                <div className="grid grid-cols-3 pt-20 gap-x-10 mx-20">
                    {
                        services.map(service => <LatestNews
                            key={service._id} service={service}
                        ></LatestNews>)
                    }
                </div>
            </div>
        </div>
    );
};

export default LatestNewses;