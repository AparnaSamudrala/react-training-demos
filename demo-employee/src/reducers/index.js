const initializeState = {
    employees: []
}

const employeeReducer = (state = initializeState, action) => {
    console.log(action.type);
    switch (action.type) {
        case "employee/add":
            if (!state.employees) state.employees = [];
            console.log(action.data);
            return {employees: [...state.employees, action.data]};
        case "employee/edit":
            return {
                employees: state.employees,
                //employee= action.whatever is fetched from api
                employee: action.data
            };
            case "employee/delete":
                const Employee = state.employees.filter((el,i) => i !== action.data);
                console.log(Employee);
                return{
                    employees: Employee
                };
        case "employee/getAll":
        default:
            console.log(state.employees);
            return state;
    }
}

export default employeeReducer;