class DeptAdapter {

    static index() {
        return fetch('http://localhost:4000/api/v1/departments').then(res => res.json())
    }

    // static create(obj) {
    //     let postConfig = {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             name: obj.name,
    //             title: obj.title,
    //             location: obj.location,
    //             direct: obj.direct,
    //             office: obj.office,
    //             department_id: obj.department_id
    //         })
    //     }
    //     return fetch('http://localhost:4000/api/v1/employees', postConfig).then(res => res.json())
    // }


}

export default DeptAdapter