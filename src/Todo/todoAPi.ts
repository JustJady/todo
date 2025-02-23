export const getAllTodos = async () => {
    try {
        return await fetch(`https://jsonplaceholder.typicode.com/todos`, {
            method: "GET",
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        }).then(response => {
            return response.json();
        })
    } catch (error) {
        return error;
    }
}

export const getAllUsers = async () => {
    try {
        return await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "GET",
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        }).then(response => {
            return response.json();
        })
    } catch (error) {
        return error;
    }
}