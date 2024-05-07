import axios from "axios";
import { useEffect, useState } from "react";

const EmpList = () => {
    const [empList, setEmpList] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8090/emp/get-all-emps')
            .then((resp) => {
                setEmpList(resp.data);
            });
    }, []);

    return (
        <div className="container mt-5" style={{ backgroundColor: 'lightpink' }}>
            <h1 className="text-center">EmpList Component</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th style={{ color: 'orange' }}>ID</th>
                        <th style={{ color: 'blue' }}>Name</th>
                        <th style={{ color: 'orange' }}>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {empList && empList.map(emp =>
                        <tr key={emp.employeeId}>
                            <td>{emp.employeeId}</td>
                            <td>{emp.firstName}</td>
                            <td>{emp.salary}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default EmpList;
