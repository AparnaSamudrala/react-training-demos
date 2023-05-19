import store from "../store"

export const employeeGetAll = () => {
    console.log('get all');
    return {
        type: 'employee/getAll',
        data: {} 
    }
}

export const employeeAdd = (employee) => {
    console.log('add');
    return {
        type: 'employee/add',
        data: employee
    }
}

export const empDelete = (id) => {
    return {
        type: "employee/delete",
        data: id
    }
}

export const getEmp = (id) => {
    return ({
        type: "employee/getById",
        data: 1
    });
}

export const empUpdate = (employee) => {
            console.log("in update!!");
            console.log(employee);
            return ({
                type: "employee/update",
                data: employee
        });
    
    };


export const employee_action_creator = (employee) => {
    store.dispatch(employeeAdd(employee));
    return function(dispatch, getState) {
        return dispatch(employeeGetAll);
    }
}

/** 
export const employee_action_creator = () => {
    return async function(dispatch, getState) {
        try {
            const data = await fetch("https://randomuser.me/api/?results=10")
            const dataJson = data.json()
            console.log(dataJson);
            return dispatch(employeeGetAll(dataJson))
        } catch (err) {
            return dispatch(employeeErr())

        }
    };
}
*/