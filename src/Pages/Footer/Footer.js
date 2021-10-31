import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer-1 pl-20 bg-gray-900 text-white py-8 sm:py-12">
                <div className="container mx-auto px-4">
                    <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
                        <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
                            <h5 className="text-xl font-bold mb-6">Packages</h5>
                            <ul className="list-none footer-links">
                                <li className="mb-2">
                                    <Link to="/home" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Paragliding</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/home" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Rafting</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/home" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Surfing</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/home" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Niagara Falls</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/home" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Hot Air Ballooning</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/home" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Skiing
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
                            <h5 className="text-xl font-bold mb-6">WHY CHOOSE US?
                            </h5>
                            <ul className="list-none footer-links">
                                <li className="mb-2">
                                    <p className="border-b border-solid border-transparent ">Diverse Destinations

                                    </p>
                                </li>
                                <li className="mb-2">
                                    <p className="border-b border-solid border-transparent ">Value for Money

                                    </p>
                                </li>
                                <li className="mb-2">
                                    <p className="border-b border-solid border-transparent ">Support Team

                                    </p>
                                </li>
                                <li className="mb-2">
                                    <p className="border-b border-solid border-transparent ">Fast Booking

                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
                            <h5 className="text-xl font-bold mb-6">About</h5>
                            <ul className="list-none footer-links">
                                <li className="mb-2">
                                    <p className="border-b border-solid border-transparent ">Team</p>
                                </li>
                                <li className="mb-2">
                                    <p className="border-b border-solid border-transparent ">Locations</p>
                                </li>
                                <li className="mb-2">
                                    <p className="border-b border-solid border-transparent ">Privacy</p>
                                </li>
                                <li className="mb-2">
                                    <p className="border-b border-solid border-transparent ">Terms</p>
                                </li>
                            </ul>
                        </div>
                        <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
                            <h5 className="text-xl font-bold mb-6">Help</h5>
                            <ul className="list-none footer-links">
                                <li className="mb-2">
                                    <p className="border-b border-solid border-transparent ">Support</p>
                                </li>
                                <li className="mb-2">
                                    <p className="border-b border-solid border-transparent ">Help Center</p>
                                </li>
                                <li className="mb-2">
                                    <p className="border-b border-solid border-transparent ">Contact Us</p>
                                </li>
                            </ul>
                        </div>
                        <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
                            <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left">Stay connected</h5>
                            <div className="flex sm:justify-center xl:justify-start">
                                <p href="" className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600">
                                    <i className="fab fa-facebook"></i>
                                </p>
                                <p href="" className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400">
                                    <i className="fab fa-twitter"></i>
                                </p>
                                <p href="" className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600">
                                    <i className="fab fa-google-plus-g"></i>
                                </p>
                            </div>
                            <div className="pt-10">
                                <Link to="/home">
                                    <img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
                                    <img className="hidden lg:block h-8 w-auto" src="https://i.ibb.co/RcsRKZr/cover.png" alt="Workflow" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <p className="text-center">
                        Copyright ©2021 All rights reserved by Let's Travel

                    </p>

                    {/* <div className="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t">
                        <div className="sm:w-full px-4 md:w-1/6">
                            <strong>FWR</strong>
                        </div>
                        <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
                            <h6 className="font-bold mb-2">Address</h6>
                            <Link className="not-italic mb-4 text-sm">
                                123 6th St.<br />
                                Melbourne, FL 32904
                            </Link>
                        </div>
                        <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
                            <h6 className="font-bold mb-2">Free Resources</h6>
                            <p className="mb-4 text-sm">Use our HTML blocks for <strong>FREE</strong>.<br />
                                <em>All are MIT License</em></p>
                        </div>
                        <div className="px-4 md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-0">
                            <button className="px-4 py-2 bg-purple-800 hover:bg-purple-900 rounded text-white">Get Started</button>
                        </div>
                    </div> */}
                </div>
            </footer>
        </div>
    );
};

export default Footer;