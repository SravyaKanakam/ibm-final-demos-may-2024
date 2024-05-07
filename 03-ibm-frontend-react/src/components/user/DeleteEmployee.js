import axios from "axios";
import { useState, useEffect } from "react";


    const backendUrl = 'https://jsonplaceholder.typicode.com/users';
    
    const handleDelete = (id) => {
        axios.delete(`${backendUrl}/${id}`)
            .then(() => {
                setEmpList(empList.filter(emp => emp.id !== id));
            })
            .catch(error => {
                console.error("Error deleting employee:", error);
            });
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center">Employee List</h1>
            <ul className="list-group mt-3">
                {empList.map(emp => (
                    <li key={emp.id} className="list-group-item d-flex justify-content-between align-items-center">
                        {emp.firstName}
                        <button className="btn btn-danger" onClick={() => handleDelete(emp.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );


export default AddEmployee;
