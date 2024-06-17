import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function OrderDeails() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const {order_id} = useParams();

    const [error, setError] = useState(''); // Added error state

    const [values, setValues] = useState({
        sno: '',
        status: ''
      });

    

    useEffect(() => {
        axios.get('http://localhost:5000/customer')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, []);
    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put('http://localhost:5000/update_order/'+order_id,{values})
          .then((res) => {
            //navigate('/View'); // Navigate to the View page after submission
          })
          .catch((err) => {
            setError('Error creating drug. Please try again.');
            console.log(err);
          });
      };

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
                            <th>Order ID</th>
                            <th>Drug Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Amount</th>
                            <th>SNO</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(data) && data.map((d, i) => (
                            <tr key={i}>
                                <td>{d.order_id}</td>
                                <td>{d.drug_name}</td>
                                <td>{d.quantity}</td>
                                <td>{d.price}</td>
                                <td>M{d.total_amount}.00</td>
                                <td>{d.sno}</td>
                                <td>{d.status}</td>
                               
                                <td>
                                    <Link onClick={e => handleDelete(d.id)} className='btn btn-sm btn-danger'>Delete</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="d-flex form-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="ORDER ID"
              value={values.sno}
              onChange={(e) => setValues({ ...values, sno: e.target.value })}
              
            />
            <input
              type="text"
              className="form-control"
              placeholder="STATUSE"
              value={values.status}
              onChange={(e) => setValues({ ...values, status: e.target.value })}
            />
            
          </div>
          <Link onClick={handleUpdate} className='btn btn-sm btn-primary'>Update Status</Link>

            </div>
        </div>
    );
}
export default OrderDeails;
