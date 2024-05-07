import axios from "axios";
import { useState } from "react";

const AddEmployee = () => {
    const backendUrl = 'https://jsonplaceholder.typicode.com/users';
    const [empData, setEmpData] = useState({ firstName: '', email: '', aadhaar: '', salary: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (evt) => {
        setEmpData({ ...empData, [evt.target.name]: evt.target.value });
        setErrors({ ...errors, [evt.target.name]: '' });
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        if (!empData.firstName.trim()) {
            newErrors.firstName = "First name is required";
            isValid = false;
        }

        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(empData.email)) {
            newErrors.email = "Invalid email address";
            isValid = false;
        }

        if (!/^\d{12}$/.test(empData.aadhaar)) {
            newErrors.aadhaar = "Aadhaar must be a 12-digit number";
            isValid = false;
        }

        if (empData.salary <= 0 || isNaN(empData.salary)) {
            newErrors.salary = "Salary must be a positive number";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (validateForm()) {
            axios.post(backendUrl, empData)
                .then((resp) => {
                    alert(`${resp.data.firstName} with id ${resp.data.id} added successfully!`);
                    setEmpData({ firstName: '', email: '', aadhaar: '', salary: '' });
                })
                .catch(error => {
                    console.error("Error adding employee:", error);
                });
        }
    };

    return (
        <div className="container mt-5" style={{ backgroundColor: 'lightblue' }}>
            <h1 className="text-center">Add Employee Component</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName" style={{ color: 'green' }}>First Name:</label>
                    <input type="text" id="firstName" name="firstName" value={empData.firstName} onChange={handleChange} className="form-control" placeholder="Enter first name" required autoFocus />
                    {errors.firstName && <span className="error" style={{ color: 'violet' }}>{errors.firstName}</span>}
                </div>
                <br/>
                <div className="form-group">
                    <label htmlFor="email" style={{ color: 'green' }}>Email:</label>
                    <input type="email" id="email" name="email" value={empData.email} onChange={handleChange} className="form-control" placeholder="Enter email" />
                    {errors.email && <span className="error" style={{ color: 'violet' }}>{errors.email}</span>}
                </div>
                <br/>
                <div className="form-group">
                    <label htmlFor="aadhaar" style={{ color: 'green' }}>Aadhaar:</label>
                    <input type="number" id="aadhaar" name="aadhaar" value={empData.aadhaar} onChange={handleChange} className="form-control" placeholder="Enter aadhaar" />
                    {errors.aadhaar && <span className="error" style={{ color: 'violet' }}>{errors.aadhaar}</span>}
                </div>
                <br/>
                <div className="form-group">
                    <label htmlFor="salary" style={{ color: 'green' }}>Salary:</label>
                    <input type="number" id="salary" name="salary" value={empData.salary} onChange={handleChange} className="form-control" placeholder="Enter salary" />
                    {errors.salary && <span className="error" style={{ color: 'violet' }}>{errors.salary}</span>}
                </div>
                <br/>
                <button type="submit" className="btn btn-success btn-block">Add Employee</button>
            </form>
        </div>
    );
};

export default AddEmployee;
