import React from 'react';

const LatestNews = (props) => {
    const { title, publishDate, img } = props.service;
    return (
        <div className="border flex flex-col rounded-lg justify-items-center bg-white">

            <div className="mx-auto">
                <img className="rounded-t-lg mx-auto" src={img} alt="" />
            </div>
            <div className="m-5">
                <h1 className="font-bold text-2xl pb-2">
                    {title}
                </h1>
                <p className="pb-3">
                    {publishDate}
                </p>

                <button className="button px-5 py-3 border text-white bg-blue-800 rounded">Read More</button>
            </div>
        </div>
    );
};

export default LatestNews;