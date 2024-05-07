import AddEmployee from "./AddEmployee";
import EmpList from "./EmpList";
import UpdateEmployee from "./UpdateEmployee";
import DeleteEmployee from "./user/DeleteEmployee";


const Employee = () => {
    return (
        <div className="container mt-5 border rounded">
            <h1 className="text-center text-orange mb-4">Employee Component</h1>
            <div className="row">
                <div className="col-md-6">
                    <AddEmployee />
                </div>
                <div className="col-md-6">
                    <EmpList />
                    <UpdateEmployee/>
                    <DeleteEmployee/>
                    
                </div>
            </div>
        </div>
    );
};

export default Employee;
