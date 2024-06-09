import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Update() {
    const [data, setData] = useState([]);
  const { id } = useParams();

    const navigate = useNavigate();

    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.post('http://localhost:5000/update_data'+id, data)
        .then (res =>{
            navigate('/');

        }).catch (err =>console.log(err));
    }
  return (
    <div>
        <h2>Update</h2>
    </div>
  )
}

export default Update