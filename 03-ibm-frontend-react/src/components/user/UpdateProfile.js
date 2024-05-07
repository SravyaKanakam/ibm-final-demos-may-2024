import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userUpdateProfile } from "../../redux/UserSlice";
import UserService from "../../services/UserService";

const UpdateProfile = () => {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.user.loggedInUser);
    const token = useSelector(store => store.user.jwtToken);
    const [formData, setFormData] = useState(userData);

    const handleChange = (evt) => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        });
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            const user = await UserService.updateUserProfile(formData, token);
            dispatch(userUpdateProfile(user));
        }
        catch (error) {
            console.log(error);
            if (error.code === 'ERR_BAD_REQUEST')
                alert(error.message);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header bg-primary text-white">
                            <h1 className="text-center">Update Your Profile</h1>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="firstName" style={{ color: '#FF1493' }}>First Name:</label>
                                    <input type="text" name="firstName" id="firstName" value={formData.firstName}
                                        onChange={handleChange} className="form-control" autoFocus required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastName" style={{ color: '#1E90FF' }}>Last Name:</label>
                                    <input type="text" name="lastName" id="lastName" value={formData.lastName}
                                        onChange={handleChange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone" style={{ color: '#FF1493' }}>Phone:</label>
                                    <input type="number" name="phone" id="phone" value={formData.phone}
                                        onChange={handleChange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email" style={{ color: '#1E90FF' }}>Email:</label>
                                    <input type="email" name="email" id="email" value={formData.email}
                                        onChange={handleChange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="avatar" style={{ color: '#FF1493' }}>Avatar:</label>
                                    <input type="text" name="avatar" id="avatar" value={formData.avatar}
                                        onChange={handleChange} className="form-control" />
                                        <br/>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Update Your Profile</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;
