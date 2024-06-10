import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function OrderDeails() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:5000/customer')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/delete_user${id}`)
            .then(res => navigate('/'))
            .catch(err => console.log(err));
    }
    return (
        <div className='d-flex justify-content-center bg-primary align-items-center vh-100'>
            <div className='bg-white rounded w-90 p-3'>
                <h2>Available Orders</h2>
                <h1>   </h1>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Drug Name</th>
                            <th>Quantity</th>
                            <th>Amount</th>
                            <th>Customer Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(data) && data.map((d, i) => (
                            <tr key={i}>
                               
                                <td>{d.drug_name}</td>
                                <td>{d.quantity}</td>
                                <td>{d.amount}</td>
                                <td>{d.name}</td>
                               
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
export default OrderDeails;
