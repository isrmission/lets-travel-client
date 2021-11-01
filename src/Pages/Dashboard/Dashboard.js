import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth/UseAuth';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import PendingBookings from '../PendingBookings/PendingBookings';

const Dashboard = () => {

    const { user } = UseAuth();
    const [pState, setPState] = useState(false);
    const [allOrders, setAllOrders] = useState(false);


    const handlePending = e => {
        e.preventDefault();
        setPState(true)
        setAllOrders(false)

    }

    const handleAllOrders = e => {
        e.preventDefault();
        setAllOrders(true)
        setPState(false)
    }

    return (
        <div className="pb-40">
            <h1 className="text-4xl text-center mt-10 font-bold">
                Welcome, {user.displayName}
            </h1>
            <div className="text-center my-6">


                <button onClick={handlePending} class="p-2 mx-5 font-bold pl-5 pr-5 bg-transparent border-2 border-yellow-500 text-yellow-500 text-lg rounded-lg hover:bg-yellow-500 hover:text-gray-100 focus:border-4 focus:border-yellow-300">My Orders</button>

                <button onClick={handleAllOrders} class="p-2 mx-5 pl-5 pr-5 bg-transparent border-2 border-green-500 text-green-500 text-lg rounded-lg hover:bg-green-500 hover:text-gray-100 focus:border-4 focus:border-green-300">Manage All Orders</button>
                <Link to="/add-service">
                    <button class="p-2 pl-5 mx-5 pr-5 bg-transparent border-2 border-gray-500 text-gray-500 text-lg rounded-lg hover:bg-gray-500 hover:text-gray-100 focus:border-4 focus:border-gray-300">Add a new Service</button>
                </Link>


            </div>
            <div>
                {
                    pState === true &&
                    <PendingBookings></PendingBookings>
                }

            </div>
            <div>
                {
                    allOrders === true &&
                    <ManageAllOrders></ManageAllOrders>
                }
            </div>
        </div >
    );
};

export default Dashboard;