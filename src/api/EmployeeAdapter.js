class EmployeeAdapter {
        
    static index(){
        return fetch('http://localhost:4000/api/v1/employees').then(res => res.json())
    }
}

export default EmployeeAdapter