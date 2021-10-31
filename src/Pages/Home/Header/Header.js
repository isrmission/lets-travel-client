import React from 'react';
import sample from '../../../videos/clip.mp4'
import poster from '../../../images/poster.PNG'
import './Header.css';

const Header = () => {
    return (
        <div className="flex justify-center	items-center  relative overflow-hidden	 py-60">
            <div>
                <video className='videoTag' id='videoBG' poster={poster} autoPlay loop muted>
                    <source src={sample} type='video/mp4' />
                </video>
            </div>
            <div>
                <div className="text-center font-bold text-white">
                    <h1 className="text-3xl	py-3">Find your special tour today</h1>
                    <h1 className="text-6xl	">With <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-600">Let's Travel</span></h1>
                </div>
                <div className="flex justify-center mt-10">
                    <button class="p-2 pl-10 pr-9 bg-green-500 border-2 border-green-500 text-gray-100 text-lg rounded-lg hover:bg-transparent hover:text-green-500 focus:border-4 focus:border-green-300 font-bold"><i class="fas fa-eye"></i> VIEW TOURS</button>
                </div>
            </div>
        </div>
    );
};

export default Header;