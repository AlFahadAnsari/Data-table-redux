import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';
import * as XLSX from 'xlsx';

const User = () => {
  const entries = useSelector((state) => state.data.entries);
  const [filteredEntries, setFilteredEntries] = useState(entries);

  const columns = [
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true
    },
    {
      name: 'Email',
      selector: row => row.email,
      sortable: true
    },
    {
      name: 'Number',
      selector: row => row.number,
      sortable: true
    },
    {
      name: 'Address',
      selector: row => row.address,
      sortable: true
    },
  ];

  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    const filteredData = entries.filter(row =>
      row.name.toLowerCase().includes(searchQuery) ||
      row.email.toLowerCase().includes(searchQuery) ||
      row.number.toString().includes(searchQuery) ||
      row.address.toLowerCase().includes(searchQuery)
    );
    setFilteredEntries(filteredData);
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredEntries);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "UserData");
    XLSX.writeFile(workbook, "UserData.xlsx");
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="bg-gray-800 w-64 h-screen">
        <h1 className="text-white font-bold mt-7 text-2xl p-4">Dashboard</h1>
        <div className="p-4 mt-10">
          <Link to="/" className="block text-white font-bold hover:bg-blue-600 p-2">Form</Link>
          <Link to="/user" className="block text-white font-bold hover:bg-blue-600 p-2">User Data</Link>
        </div>
      </div>

      {/* Table */}
      <div className='w-full mt-10'>
        <div className='flex justify-end items-center mx-5 my-5'>
          <input
            type="text"
            placeholder='Search...'
            className='border-2 p-2 rounded-lg'
            onChange={handleSearch}
          />
          <button
            onClick={exportToExcel}
            className='ml-2 bg-green-500 text-white p-2 rounded-lg'
          >
            Export to Excel
          </button>
        </div>

        <DataTable
          columns={columns}
          data={filteredEntries}
          pagination
        />
      </div>
    </div>
  );
};

export default User;
