import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addData } from './Redux/Reducer';
import toast from 'react-hot-toast'




const SideBar = () => {

    const dispatch = useDispatch();
    const [formData, setFormData] = useState({ name: '', email: '', number: '',address:'' });
    

   
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };


      const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addData(formData));
        setFormData({ name: '', email: '',number:'',address:'' });
    
            toast.success('Data add'); 
        
      };


    return (
        <div className="flex">
            {/* Sidebar */}
            <div className="bg-gray-800 w-64 h-screen">
                <h1 className='className="block text-white font-bold mt-7 text-center text-2xl p-4 md:text-3xl'>DashBoard</h1>
                <div className="p-4 mt-10">
                    <Link to={'/'} href="#" className="block text-white font-bold my-5 hover:bg-blue-600" >Form</Link>

                    <Link to={'/user'} href="#" className="block text-white font-bold hover:bg-blue-600" >User data</Link>

                </div>
            </div>



            {/* Dashboard htmlForm */}
            <div className="flex-grow p-8">
                <h2 className="text-2xl font-bold mb-4 bg-pink-600 text-white p-5">Personal form</h2>

                <form onSubmit={handleSubmit} className="flex flex-wrap" >


                    <div className="w-full md:w-1/3 mb-4 md:pr-2">
                        <label htmlFor="username" className="block mb-1" >Name</label>
                        <input type="text" name='name' value={formData.name} onChange={handleChange} placeholder="Enter your username" className="w-full p-2 border border-gray-300 rounded" required ></input>
                    </div>



                    <div className="w-full md:w-1/3 mb-4 md:px-2">
                        <label htmlFor="middleName" className="block mb-1">Email</label>
                        <input type="email" name='email' value={formData.email} onChange={handleChange}   placeholder="Enter you Email" className="w-full p-2 border border-gray-300 rounded" required></input>
                    </div>




                    <div className="w-full md:w-1/3 mb-4 md:pl-2">
                        <label htmlFor="id" className="block mb-1">Number</label>
                        <input type="number" name='number' value={formData.number} onChange={handleChange}   placeholder="Number" className="w-full p-2 border border-gray-300 rounded" required ></input>
                    </div>




                    <div className=" md:w-full mb-4">
                        <label htmlFor="password" className="block mb-1">Address</label>
                        <input type="text" name='address' value={formData.address} onChange={handleChange}   placeholder="Address" className="w-full p-2 border border-gray-300 rounded" required></input>
                    </div>





                    {/*  Button */}
                    <button type="submit" className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700">submit</button>
                </form>
            </div>


        </div>
    );
};

export default SideBar;
