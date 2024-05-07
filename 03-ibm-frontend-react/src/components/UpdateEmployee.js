import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatedEmployee } from "../redux/EmpSlice";
import EmployeeService from '../services/EmployeeService';

const UpdateEmployee = ({ employeeId: initialEmployeeId }) => {
    const [employeeId, setEmployeeId] = useState(initialEmployeeId);
    const [employee, setEmployee] = useState({
        firstName: '',
        email: '',
        salary: '',
        aadhar: ''
    });

    const dispatch = useDispatch();

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'employeeId') {
            setEmployeeId(value);
        } else {
            setEmployee(prevEmployee => ({
                ...prevEmployee,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!employeeId) {
            console.error('Employee ID is required.');
            return;
        }
        try {
            const user = await EmployeeService.update(employee, employeeId); // Pass employee before employeeId
            console.log(user);
            dispatch(updatedEmployee(user));
        } catch (error) {
            console.log(error);
            if (error.code === 'ERR_BAD_REQUEST') {
                alert(error.message);
            }
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4 text-danger">Update Employee Details</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="employeeId" className="form-label text-black">Employee ID:</label>
                    <input type="text" className="form-control" id="employeeId" name="employeeId" value={employeeId} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label text-black">First Name:</label>
                    <input type="text" className="form-control" id="firstName" name="firstName" value={employee.firstName} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label text-black">Email:</label>
                    <input type="email" className="form-control" id="email" name="email" value={employee.email} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="salary" className="form-label text-black">Salary:</label>
                    <input type="number" className="form-control" id="salary" name="salary" value={employee.salary} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="aadhar" className="form-label text-black">Aadhar:</label>
                    <input type="text" className="form-control" id="aadhar" name="aadhar" value={employee.aadhar} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-danger">Update</button>
            </form>
        </div>
    );
};

export default UpdateEmployee;
