import axios from 'axios';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import UseAuth from '../../hooks/UseAuth/UseAuth';

const AddService = () => {
    const { register, reset, handleSubmit } = useForm();
    const { user } = UseAuth();

    const onSubmit = data => {
        console.log(data);
        axios.post('https://shrieking-mansion-79706.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Successfully added a new service')
                    reset()
                }
            })
    }

    return (
        <div className="pb-20 bg-gray-200">
            <div className="py-5">
                <h1 className="bg-gray-400 text-center py-3 text-4xl font-bold">
                    Welcome, {
                        user.email && user.displayName
                    }
                </h1>
            </div>

            <div style={{ width: '30%' }} className="mx-auto mt-16 text-center bg-green-400 px-16 pb-5 pt-4 rounded-lg hover:bg-gray-800 hover:text-gray-400">

                <form onSubmit={handleSubmit(onSubmit)}>

                    <h1 className="text-center text-2xl font-bold">
                        Please fill these information:
                    </h1>
                    <input className="border px-20 rounded py-1 border-gray-600 text-center my-2" required placeholder='Service Name' type="text" {...register("name")} />
                    <input className="border px-20 rounded py-1 border-gray-600 text-center my-2" required placeholder='Duration' type="text" {...register("duration")} />
                    <input className="border px-20 rounded py-1 border-gray-600 text-center my-2" required placeholder='Price' type="number" {...register("Price")} />
                    <input className="border px-20 rounded py-1 border-gray-600 text-center my-2" required placeholder='Image URL' type="url" {...register("img1")} />
                    <textarea placeholder="Service Details" required className="border px-12 rounded py-1 border-gray-600 text-center my-2" cols="31" rows="3" {...register("details")}></textarea>
                    <div className="flex justify-center mt-1">

                        <input type="submit" className="p-2 mt-3 text-xl pl-10 pr-9 bg-green-700 border-2 border-white text-gray-100 text-sm rounded-lg hover:bg-white hover:text-green-500 focus:border-4 focus:border-green-400 hover:border-green-400 font-bold" value="Add a Service" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddService;