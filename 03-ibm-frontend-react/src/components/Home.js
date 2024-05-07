import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="jumbotron text-center" style={{ backgroundColor: 'lightpink' }}>
                <h1 className="text-dark">Hi! This is Home Component</h1>
                <Link to='/login' className="btn btn-primary mt-3">Login to continue</Link>
            </div>
        </>
    );
};

export default Home;
