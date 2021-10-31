import React from 'react';

const WhyUs = () => {
    return (
        <div className=" p-20  bg-gray-200">
            <div>
                <div>
                    <h1 className="text-5xl	font-medium mb-5 pb-10">
                        WHY CHOOSE US?
                    </h1>
                </div>
                <div className="flex items-center">
                    <div className="grid grid-cols-3 gap-4 flex-1">
                        <div className="flex">
                            <div className="mr-3">
                                <i className="fas fa-globe rounded-full bg-green-200 p-4 text-6xl"></i>
                            </div>
                            <div>
                                <p className="text-xl font-bold pb-2">
                                    Diverse Destinations
                                </p>
                                <p>
                                    Travelers from any country have a different thinking and unique nature and the variety, assuming any, will generally rely upon the difference in seasons.
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="mr-3">
                                <i className="fas fa-money-bill-wave rounded-full bg-green-200 p-4  text-6xl"></i>
                            </div>
                            <div>
                                <p className="text-xl font-bold pb-2">
                                    Value for Money
                                </p>
                                <p>
                                    We take great care to ensure that our products are the best value for money in the business, and we know that outstanding value means ensuring all things are right, not just the price.
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="mr-3">
                                <i className="fas fa-camera rounded-full bg-green-200 p-4  text-6xl"></i>
                            </div>
                            <div>
                                <div>

                                </div>
                                <div>
                                    <p className="text-xl font-bold pb-2">
                                        Beautiful Places
                                    </p>
                                    <p>
                                        Great and Beautiful Places are always enjoyable. That's why we offer the greatest and beautiful places for you.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="mr-3">
                                <i className="fas fa-calendar-alt rounded-full bg-green-200 p-4  text-6xl"></i>
                            </div>
                            <div>
                                <p className="text-xl font-bold pb-2">
                                    Fast Booking
                                </p>
                                <p>
                                    Booking with us means you'll have access to a whole host of amazing additional services, from fast-track airport security to our network of Local Guidelines.
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="mr-3">
                                <i className="fas fa-comments rounded-full bg-green-200 p-4  text-6xl"></i>
                            </div>
                            <div>
                                <p className="text-xl font-bold pb-2">
                                    Support Team
                                </p>
                                <p>
                                    We helping you with your booking or providing you with personal recommendations , we are happy to assist you in any way possible to make your travel experience exceptional..
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="mr-3">
                                <i className="fas fa-heart rounded-full bg-green-200 p-4  text-6xl"></i>
                            </div>
                            <div>
                                <p className="text-xl font-bold pb-2">
                                    Passionate Travel

                                </p>
                                <p>
                                    Everyone of our team members is passionate about traveling and ready to offer you exceptional service.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center bg-green-400 p-10 pt-6 rounded-lg ml-5">
                        <h1 className='text-3xl font-bold italic font-serif pb-3'>
                            Search Tours
                        </h1>
                        <p className="font-bold">
                            Find your dream tour today!
                        </p>
                        <form action="">
                            <input type="text" className="border-2 rounded-lg py-1 border-gray-600 text-center my-3" placeholder="Search tour" /><br />
                            <input type="text" className="border-2 rounded-lg py-1 border-gray-600 text-center my-3" placeholder="Destination" /><br />
                            <input type="text" className="border-2 rounded-lg py-1 border-gray-600 text-center my-3" placeholder="Tour Type" /><br />
                            <input type="text" className="border-2 rounded-lg py-1 border-gray-600 text-center my-3" placeholder="Month" /><br />
                            <button className="p-2 pl-10 pr-9 bg-green-500 border-2 border-green-500 text-gray-100 text-lg rounded-lg hover:bg-transparent hover:text-green-500 focus:border-4 focus:border-green-300 font-bold"><i className="fas fa-eye"></i> FIND TOURS</button>
                        </form>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default WhyUs;