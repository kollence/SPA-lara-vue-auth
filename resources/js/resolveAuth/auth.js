export function login(credentials) {
    return new Promise((res, rej) => {
        axios.post('api/auth/login', credentials)
             .then((resolve) => {
                 res(resolve.data);
             })
             .catch((err) => {
                 rej('Wrong email or password');
             })
    })
}

export function getUserIfLocalStroage() {
    const user = localStorage.getItem("user");

    if (!user) {
        return null;
    }

    return JSON.parse(user);
}