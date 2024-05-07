import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Menubar = () => {

    const loginStatus = useSelector(store => store.user.loginStatus);

    if (loginStatus) {
        return (
            <>
                <ul className="nav nav-pills">
                    <li className="nav-item"> <Link to={'/'} className="nav-link">Home</Link> </li>
                    <li className="nav-item"> <Link to={'/emp'} className="nav-link">Employee</Link> </li>
                    <li className="nav-item"> <Link to={'/parent'} className="nav-link">Parent</Link> </li>
                    <li className="nav-item"> <Link to={'/logout'} className="nav-link text-danger">Logout</Link> </li>
                </ul>
            </>
        );
    }
    else {
        return (
            <>
                <ul className="nav nav-pills">
                    <li className="nav-item"> <Link to={'/'} className="nav-link">Home</Link> </li>
                    <li className="nav-item"> <Link to={'/register'} className="nav-link">Register</Link> </li>
                    <li className="nav-item"> <Link to={'/login'} className="nav-link">Login</Link> </li>
                </ul>
            </>
        );
    }
};

export default Menubar;
