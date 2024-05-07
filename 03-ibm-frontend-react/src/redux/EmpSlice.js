import { createSlice } from "@reduxjs/toolkit";
console.log('empSlice');
const empSlice = createSlice({
    name: 'emp',
    initialState : {
        empObj: {firstName: 'Sonu', salary: 10.50}  ,
        employees: [], // Array to store list of employees
        
    },
    reducers : { // more methods
        setEmpObj : (state, action) => {
            console.log(action.payload);
            state.empObj = action.payload;
        },

        addEmployee: (state, action) => {
            state.employees.push(action.payload); // Push new employee to the array
        },
        
        updatedEmployee:(state,action)=>{
          const index=state.employees.findIndex(emp=>emp.id===action.payload.id);
             // If the employee is found, update its properties
             if (index !== -1) {
                state.employees[index] = action.payload;
            }
        },
        showEmpList:(state,action)=>{
             state.employees=action.payload;
        }
    }
});
export default empSlice.reducer;
export const {setEmpObj,addEmployee,updatedEmployee,showEmpList} = empSlice.actions;