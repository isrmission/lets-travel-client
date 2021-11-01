import React, { useEffect, useRef, useState } from 'react';

const Pbooking = (props) => {
    const { _id, name, email, quantity, packageName } = props.request;
    const { status, setStatus } = useState();
    const handleDelete = id => {
        const warning = window.confirm("Are you sure to delete your order?");

        if (warning) {
            const url = `https://shrieking-mansion-79706.herokuapp.com/pending/${id}`;
            fetch((url), {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully')
                        // const remainingUsers=users.filter(user=>user._id!==id);
                        window.location.reload();
                    }
                })
        }
    }

    const handleconfirm = () => {
        setStatus(false)
    };

    return (
        <div>
            <div>
                <div class="text-center py-2">
                    <div>
                        <ul className="flex justify-center">
                            <li className=' border-double border-4 mr-5 border-green-600' style={{ width: '50%' }}>
                                <div className=" flex justify-around">
                                    <div>
                                        <p className="font-bold">Name</p>
                                        <p>{name}</p>
                                    </div>
                                    <div>
                                        <p className="font-bold">Email</p>
                                        <p>{email}</p>
                                    </div>
                                    <div>
                                        <p className="font-bold">Package</p>
                                        <p>{packageName}</p>
                                    </div>
                                    <div>
                                        <p className="font-bold">Quantity</p>
                                        <p>{quantity}</p>
                                    </div>
                                    {
                                        <div>
                                            <p className="font-bold">Status</p>
                                            <p className="text-red-400">
                                                Pending
                                            </p>
                                        </div>
                                    }
                                </div>
                            </li>
                            {/* {<button onClick={() => handleconfirm} class="p-1 mr-4 pl-5 pr-4 bg-transparent border-2 border-green-500 text-green-500 text-lg rounded-lg hover:bg-green-500 hover:text-gray-100 focus:border-4 focus:border-green-300">Confirm</button>} */}
                            {/* <button onClick={() => handleCancel} class="p-1 pl-5 pr-4 mr-3 bg-transparent border-2 border-green-500 text-green-500 text-lg rounded-lg hover:bg-green-500 hover:text-gray-100 focus:border-4 focus:border-green-300">Cancel Order</button> */}

                            <button onClick={() => handleDelete(_id)} class="p-1 pl-5 pr-4 bg-transparent border-2 border-green-500 text-green-500 text-lg rounded-lg hover:bg-green-500 hover:text-gray-100 focus:border-4 focus:border-green-300">Delete</button>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pbooking;