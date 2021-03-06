import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth/UseAuth';
import Pbooking from './PBooking/Pbooking';

const PendingBookings = () => {
    const { user } = UseAuth();
    const uEmail = user.email;
    const [requests, setRequests] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        fetch(`https://shrieking-mansion-79706.herokuapp.com/pending/${uEmail}`)
            .then(res => res.json())
            .then(data => {
                setRequests(data)
                // console.log(data)
            })
            .finally(() => setIsLoading(false));
    }, [])

    if (isLoading) {
        return (
            <h1 className="text-8xl italic text-center my-60 font-black">
                Loading...
            </h1>
        )
    }

    return (
        <div>
            <h1 className="text-center text-3xl font-bold py-5 bg-gray-200 my-10">
                My Orders
            </h1>


            {requests.length === 0 ?
                <div>
                    <h1 className="text-center text-4xl font-bold">
                        No Orders
                    </h1>
                    <p className="text-2xl text-center my-10">
                        To make an order please visit  <Link to="/packages">
                            <button class="p-2 pl-5 pr-5 bg-transparent border-2 border-gray-500 text-gray-500 text-lg rounded-lg hover:bg-gray-500 hover:text-gray-100 focus:border-4 focus:border-gray-300">Packages</button>
                        </Link>
                    </p>
                </div>

                :
                <div>
                    {
                        requests.map(request => <Pbooking key={request._id}
                            request={request}
                        ></Pbooking>)
                    }
                </div>
            }



        </div>
    );
};

export default PendingBookings;