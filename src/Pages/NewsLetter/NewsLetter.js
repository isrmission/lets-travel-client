import React from 'react';
import './NewsLetter.css'
const NewsLetter = () => {
    return (
        <div className="newsLBG">
            <div className="text-center py-28 bg-blue-800 bg-opacity-75">
                <h1 className='font-extrabold py-2 text-5xl'>JOIN THE NEWSLETTER
                </h1>
                <h1 className="italic font-mono text-2xl font-bold">To receive our best monthly deals
                </h1>
                <div className="flex pt-5 justify-center items-center">
                    <input className="rounded-l-lg p-3 pl-6" placeholder="Enter Email" type="email" name="" id="" />
                    <input className="text-white bg-transparent bg-gray-800 paddingCustom rounded-r-lg" type="submit" value="Subscribe" />
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;