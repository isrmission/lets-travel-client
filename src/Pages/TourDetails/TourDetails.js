import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth/UseAuth';
import './TourDetails.css';



const TourDetails = () => {

    const { id } = useParams();
    const [service, setService] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // const [ttotal, setTtotal] = useState('');
    const { register, reset, handleSubmit } = useForm();
    const { user } = UseAuth();

    useEffect(() => {

        const url = `https://shrieking-mansion-79706.herokuapp.com/services/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setService(data)
                // console.log(data)
            })
            .catch(error => console.log(error.message))
            .finally(() => setIsLoading(false));

    }, [])

    if (isLoading) {
        return (
            <h1 className="text-8xl italic text-center my-60 font-black">
                Loading...
            </h1>
        )
    }
    // const details = service.filter(service => id === service._id)

    // console.log(details);

    const handleName = (e) => {
        e.target.value = `${user.displayName}`
    }
    const handleEmail = (e) => {
        e.target.value = `${user.email}`
    }
    const handlePackage = (e) => {
        e.target.value = `${service.name}`
    }
    // const handleTotal = (e) => {
    //     const quantity = e.target.value;
    //     const total = quantity * `${service.price}`
    //     setTtotal(total);
    // }

    const onSubmit = data => {
        console.log(data);
        axios.post('https://shrieking-mansion-79706.herokuapp.com/pending', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Request Pending. Please wait for Approval')
                    reset()
                }
            })
    }

    return (
        <div>
            <div className="contain">
                <img src={service.img1} alt="Snow" style={{ height: '500px', width: "100%" }} />
                <div className="centered text-4xl text-black font-bold">{service.name}</div>
            </div>

            <div className="container mx-auto">
                <div className="flex justify-between">
                    <div className="ml-20 mr-10 shadow-lg border ">
                        <div className="flex justify-between text-center border-b">
                            <div className="mx-auto py-10 px-10">
                                <p className="text-2xl font-bold">Duration<br /><span className="text-xl font-normal text-center">{service.duration}</span></p>
                            </div>
                            <div className=" border-l-2 border-r-2 py-10 px-40">
                                <p className="text-2xl font-bold">
                                    Location <br /> <span className="text-xl font-normal">
                                        {service.location}
                                    </span>
                                </p>
                            </div>
                            <div className="mx-auto py-10 px-10">
                                <p className="text-2xl font-bold">
                                    Age <br /><span className="text-xl font-normal">
                                        {service.age}
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="py-10 border-b-2  px-10">
                            <p>
                                {service.details}
                            </p>
                        </div>
                        <div className="grid grid-cols-2 px-10 py-5 border-b-2 flex items-center">
                            <div>
                                <h1>
                                    DEPARTURE TIME
                                </h1>
                            </div>
                            <div>
                                <p>
                                    {service.sTime}
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 px-10 py-5 border-b-2 flex items-center">
                            <div>
                                <h1>
                                    RETURN TIME
                                </h1>
                            </div>
                            <div>
                                <p>
                                    {service.eTime}
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 px-10 py-5 border-b-2 flex items-center">
                            <div>
                                <h1>
                                    WEAR
                                </h1>
                            </div>
                            <div>
                                <p>
                                    {service.wear}
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 px-10 py-5  flex items-center">
                            <div>
                                <h1>
                                    INCLUDED
                                </h1>
                            </div>
                            <div>
                                <p>
                                    {service.included}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20 mx-10">
                        <div className="text-center bg-green-400 px-16 pb-10 pt-4 rounded-lg hover:bg-green-500 ">
                            <p className='italic font-mono text-xl font-black'>
                                Find your dream tour today!
                            </p>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input type="text" onClick={handleName} className="border rounded py-1 border-gray-600 text-center my-2" placeholder={user.email ? user.displayName : 'Your Name'} {...register("name", { required: true })} /><br />
                                <input type="email" onClick={handleEmail} className="border rounded py-1 border-gray-600 text-center my-2" placeholder={user.email ? user.email : "Your Email"} {...register("email", { required: true })} /><br />
                                <input type="text" className="border rounded py-1 border-gray-600 text-center my-2" placeholder="Phone Number"{...register("phone", { required: true })} /><br />
                                <input type="date" className="border rounded py-1 border-gray-600 text-center my-2" {...register("date", { required: true })} /><br />
                                <input type="number" className="border rounded py-1 border-gray-600 text-center my-2" placeholder="Quantity" min="1" {...register("quantity", { required: true }, { min: 1, max: 10 })} /><br />
                                <input type="name" onClick={handlePackage} placeholder={service.name} readOnly {...register("packageName", { required: true })} className="border rounded py-1 border-gray-600 text-center my-2" /><br />
                                {/* <span className="text-white font-bold text-xl">
                                    TOTAL: <span>$</span><span>{user.email ? ttotal : `${service.price}`}</span>
                                </span> */}
                                <div className="flex justify-center mt-1">
                                    <input type='submit' className="p-2 mt-3 text-xl pl-10 pr-9 bg-green-700 border-2 border-green-500 text-gray-100 text-sm rounded-lg hover:bg-white hover:text-green-500 focus:border-4 focus:border-green-300 font-bold" value="BOOK NOW" />
                                </div>
                            </form>

                        </div>

                    </div>
                </div>


            </div>
            <div className="text-center py-5 mt-20 bg-gray-400 bg-opacity-25">
                {/* <h1 className="italic font-mono text-xl font-bold">Take a Look at Our
                </h1> */}
                <h1 className='font-extrabold text-4xl'>PHOTOS
                </h1>
            </div>
            <div className="bg-gray-100 pb-10">
                <div className="p-20 grid justify-items-center gap-10 ">
                    <div><img className="rounded-xl" src={service.img1} alt="" /></div>
                    <div className="grid grid-cols-4 gap-5 ">
                        <div><img className="rounded-xl m-auto" style={{ height: '180px' }} src={service.img2} alt="" /></div>
                        <div><img className="rounded-xl m-auto" style={{ height: '180px' }} src={service.img3} alt="" /></div>
                        <div><img className="rounded-xl m-auto" style={{ height: '180px' }} src={service.img4} alt="" /></div>
                        <div><img className="rounded-xl m-auto" style={{ height: '180px' }} src={service.img5} alt="" /></div>
                    </div>
                </div>

                <div className="flex justify-center ">
                    <Link to="/home">
                        <button className="p-2 mt-3 pl-10 pr-9 bg-green-500 border-2 border-green-500 text-gray-100 text-sm rounded-lg hover:bg-white hover:text-green-500 focus:border-4 focus:border-green-300 font-bold"> BACK HOME</button>
                    </Link>
                </div>
            </div>


        </div>
    );
};

export default TourDetails;