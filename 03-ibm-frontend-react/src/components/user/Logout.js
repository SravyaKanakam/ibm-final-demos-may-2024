import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { userLogout } from '../../redux/UserSlice';
import { useState } from "react";

const Logout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [afterLogout, setAfterLogout] = useState('');

    const logoutSubmit = () => {
        setAfterLogout(`You've logged out successfully!`);
        setTimeout(() => {
            dispatch(userLogout());
            navigate('/login');
        }, 2000);
    };

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <div className="card bg-dark text-white">
                        <div className="card-header bg-danger text-center">
                            <h3>Logout</h3>
                        </div>
                        <div className="card-body">
                            <button onClick={logoutSubmit} className="btn btn-danger btn-block">Logout</button>
                            {afterLogout && <p className="text-center mt-3">{afterLogout}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Logout;
