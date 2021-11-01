import React from 'react';
import { Link } from 'react-router-dom';
import './Tour.css';

const Tour = (props) => {
    const { _id, details, duration, name, price, img1, location } = props.service;
    return (
        <div className="rounded-t-lg bg-white m-auto" style={{ width: '430px' }}>
            <div className="container2 border-b-4 border-green-500">
                <Link to={`/details/${_id}`}>
                    <img className="rounded-t-lg" src={img1} style={{ height: '250px', width: '430px' }} alt="" />
                    <div class="bottom-right text-xl bg-green-500 px-5 pt-1 rounded-tl-lg"><span>$</span>{price}</div>
                </Link>

            </div>
            <div className="m-5">
                <h1 className="font-bold text-2xl pb-3">{name}</h1>
                <p>{details.slice(0, 120)}...</p>

            </div>
            <div className="border-t border-black flex justify-between mb-2">
                <div className="mx-auto">
                    <p className=" my-2"><i className="far fa-clock "></i> {duration}</p>

                </div>
                <div className="mx-auto border-l border-black  border-r px-5">
                    <p className=" my-2"><i class="fas fa-map-marker-alt"></i> {location}</p>

                </div>
                <div className="mx-auto">
                    <Link to={`/details/${_id}`}>
                        <i className="fas fa-arrow-circle-right mt-2 text-2xl text-green-400" ></i>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Tour;