import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:5000/')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/delete_user${id}`)
            .then(res => navigate('/'))
            .catch(err => console.log(err));
    }

    return (
        <div className='d-flex justify-content-center bg-dark align-items-center vh-100'>
            <div className='bg-white rounded w-90 p-3'>
                <h2>Available Drugs</h2>
                <Link to="/create" className='btn btn-success'>Add +</Link>
                <h1>   </h1>
                <Link to="/view" className='btn btn-success'>View Drugs</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>SNO</th>
                            <th>Drug Name</th>
                            <th>Category</th>
                            <th>Quantity</th>
                            <th>Brand Name</th>
                            <th>Drug Dosage(ml)</th>
                            <th>Description</th>
                            <th>Manufacturer</th>
                            <th>Manufacture Date</th>
                            <th>Expiry Date</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(data) && data.map((d, i) => (
                            <tr key={i}>
                                <td>{d.sno}</td>
                                <td>{d.drug_name}</td>
                                <td>{d.category}</td>
                                <td>{d.quantity}</td>
                                <td>{d.brand_name}</td>
                                <td>{d.drug_dosage}</td>
                                <td>{d.description}</td>
                                <td>{d.manufacturer}</td>
                                <td>{d.manufactured_date}</td>
                                <td>{d.expiry_date}</td>
                                <td>{d.price}</td>
                                <td>
                                    <Link to={`/update/${d.id}`} className='btn btn-sm btn-primary'>Update</Link>
                                    <Link onClick={e => handleDelete(d.id)} className='btn btn-sm btn-danger'>Delete</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Home;
