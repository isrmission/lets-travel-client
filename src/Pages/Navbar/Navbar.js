import userEvent from '@testing-library/user-event';
import React from 'react';
import { Link } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth/UseAuth';

const Navbar = () => {
    const { user, logOut } = UseAuth();

    return (
        <nav className="bg-gray-800 sticky top-0">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <Link to="/home">
                                <img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
                                <img className="hidden lg:block h-8 w-auto" src="https://i.ibb.co/RcsRKZr/cover.png" alt="Workflow" />
                            </Link>
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <Link to="/home">
                                    <button href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Home</button>
                                </Link>

                                <Link to="/dashboard">
                                    <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</button>
                                </Link>

                                <Link to="/packages">
                                    <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Packages</button>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">


                        {/* <!-- Profile dropdown --> */}
                        <div className="ml-3 relative flex items-center">
                            <Link to="/dashboard">
                                <div>
                                    {user.email && <button type="button" className="flex  hover:bg-white  border-2 p-1 items-center bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                        <span className="sr-only">Open user menu</span>
                                        <img className="h-8 w-8 rounded-full" src={user.photoURL} alt="" />
                                        <span className="text-gray-300 ml-2 hover:text-black">{user.displayName}</span>
                                    </button>


                                    }

                                </div>
                            </Link>
                            {
                                !user.email ? <Link to="/login">
                                    <button className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Login</button>
                                </Link> :
                                    <button onClick={logOut} className="text-gray-300 ml-2 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Logout</button>
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Mobile menu, show/hide based on menu state. --> */}
            <div className="sm:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    {/* <!--Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}

                    <Link to="/home">
                        <button className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Home</button>
                    </Link>

                    <Link to="/dashboard">
                        <button className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</button>
                    </Link>

                    <Link to="/packages">
                        <button className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Packages</button>
                    </Link>
                    {/* 
                    <button href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</button> */}
                </div>
            </div>
        </nav >
    );
};

export default Navbar;