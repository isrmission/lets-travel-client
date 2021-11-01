import React from 'react';

const AllOrders = (props) => {
    const { _id, name, email, quantity, packageName } = props.request;

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
    return (
        <div>
            <div>
                <table class="table-auto border border-black text-center mx-auto">
                    {/* <thead>
                            <tr className="">
                                <th>Name</th>
                                <th>Email</th>
                                <th>Quantity</th>
                                <th>Package Name</th>
                            </tr>
                        </thead> */}
                    <tbody className=" text-center">
                        <tr className="">
                            <td className="px-10">{name}</td>
                            <td className=" px-10">{email}</td>
                            <td className="px-5">{quantity}</td>
                            <td className=" px-10">{packageName}</td>
                            <button onClick={() => handleDelete(_id)} class="p-1 pl-5 pr-4 bg-transparent border-2 border-green-500 text-green-500 text-lg rounded-lg hover:bg-green-500 hover:text-gray-100 focus:border-4 focus:border-green-300">Delete</button>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllOrders;