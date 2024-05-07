import React from "react";
import { useSelector } from "react-redux";
import UpdateProfile from "./UpdateProfile";

const Profile = () => {
    const userData = useSelector((state) => state.user.loggedInUser);

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header bg-primary text-white">
                            <h1 className="text-center">User Profile</h1>
                        </div>
                        <div className="card-body">
                            {userData && (
                                <div>
                                    <p><strong style={{ color: '#FF1493' }}>Username:</strong> <span style={{ color: '#1E90FF' }}>{userData.username}</span></p>
                                    <p><strong style={{ color: '#1E90FF' }}>First Name:</strong> <span style={{ color: '#FF1493' }}>{userData.firstName}</span></p>
                                    <p><strong style={{ color: '#FF1493' }}>Last Name:</strong> <span style={{ color: '#1E90FF' }}>{userData.lastName}</span></p>
                                    <p><strong style={{ color: '#1E90FF' }}>Phone:</strong> <span style={{ color: '#FF1493' }}>{userData.phone}</span></p>
                                    <p><strong style={{ color: '#FF1493' }}>Email:</strong> <span style={{ color: '#1E90FF' }}>{userData.email}</span></p>
                                    {userData.avatar && <img className="img-fluid" src={userData.avatar} alt="Avatar" />}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <UpdateProfile />
        </div>
    );
};

export default Profile;
