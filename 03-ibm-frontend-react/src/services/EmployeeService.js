import axios from 'axios';
const BASE_URL = 'http://localhost:8090/emp';
const EmployeeService = {
    add: async (userData) => {
        try {
            const response = await axios.post(`${BASE_URL}/add-emp`, userData);
            return response.data;
        } catch (error) {
            console.log(error);
            // return error;
            throw new Error(error);
        }
    },
    update: async (employee, eid) => {
        try {
            const response = await axios.patch(`${BASE_URL}/update-emp/${eid}`, employee);
            return response.data;
        } catch (error) {
            console.error(error);
            throw new Error(error.response.data.message || error.message);
        }
    },
    delete: async (eid) => {
        try {
            const response = await axios.delete(`${BASE_URL}/delete-emp/${eid}`);
            console.log("hi i do the actual work ")
            console.log(response.data);
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
            throw new Error(error);
        }
    },
    search: async (fName) => {
        try {
            const response = await axios.get(`${BASE_URL}/get-emp-by-name/${fName}`)
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    },
    getAll: async () => {
        try {
            const response = await axios.get(`${BASE_URL}/get-all-emps`)
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    }
};
export default EmployeeService;