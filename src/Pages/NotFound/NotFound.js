import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="ml-20 my-48">
            <p className="text-blue-600 font-bold">404 ERROR</p>
            <p className="font-bold text-6xl mb-3">Page not found</p>
            <p className="font-gray-50 font-bold">Sorry, we couldn't find the page you're looking for.</p>
            <Link to="/home">
                <p className="py-4 text-blue-800 font-bold">Go back home...</p>
            </Link>
        </div>
    );
};

export default NotFound;