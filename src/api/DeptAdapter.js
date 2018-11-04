class DeptAdapter {

    static index() {
        return fetch('http://localhost:4000/api/v1/departments').then(res => res.json())
    }

    static create(string) {
        let postConfig = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: string
            })
        }
        return fetch('http://localhost:4000/api/v1/departments', postConfig).then(res => res.json())
    }


}

export default DeptAdapter