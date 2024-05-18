import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addData } from './Redux/Reducer';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';

const SideBar = () => {
    const dispatch = useDispatch();

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        dispatch(addData(data));
        reset();
        toast.success('Data added successfully');
    };

    return (
        <div className="flex">
            {/* Sidebar */}
            <div className="bg-gray-800 w-64 h-screen">
                <h1 className="text-white font-bold mt-7 text-center text-2xl p-4 md:text-3xl">Dashboard</h1>
                <div className="p-4 mt-10">
                    <Link to="/" className="block text-white font-bold my-5 hover:bg-blue-600">Form</Link>
                    <Link to="/user" className="block text-white font-bold hover:bg-blue-600">User Data</Link>
                </div>
            </div>

            {/* Dashboard Form */}
            <div className="flex-grow p-8">
                <h2 className="text-2xl font-bold mb-4 bg-pink-600 text-white p-5">Personal Form</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap">
                    <div className="w-full md:w-1/3 mb-4 md:pr-2">
                        <label htmlFor="name" className="block mb-1">Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your name"
                            className="w-full p-2 border border-gray-300 rounded"
                            {...register("name", { required: 'Name is required' })}
                        />
                        {errors.name && <span className="text-md text-red-600">{errors.name.message}</span>}
                    </div>

                    <div className="w-full md:w-1/3 mb-4 md:px-2">
                        <label htmlFor="email" className="block mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full p-2 border border-gray-300 rounded"
                            {...register("email", { required: 'Email is required' })}
                        />
                        {errors.email && <span className="text-md text-red-600">{errors.email.message}</span>}
                    </div>

                    <div className="w-full md:w-1/3 mb-4 md:pl-2">
                        <label htmlFor="number" className="block mb-1">Number</label>
                        <input
                            type="number"
                            id="number"
                            placeholder="Enter your number"
                            className="w-full p-2 border border-gray-300 rounded"
                            {...register("number", { required: 'Number is required' })}
                        />
                        {errors.number && <span className="text-md text-red-600">{errors.number.message}</span>}
                    </div>

                    <div className="md:w-full mb-4">
                        <label htmlFor="address" className="block mb-1">Address</label>
                        <input
                            type="text"
                            id="address"
                            placeholder="Enter your address"
                            className="w-full p-2 border border-gray-300 rounded"
                            {...register("address", { required: 'Address is required' })}
                        />
                        {errors.address && <span className="text-md text-red-600">{errors.address.message}</span>}
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default SideBar;
