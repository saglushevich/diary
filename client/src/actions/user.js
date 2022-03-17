import axios from 'axios'

export const registration = async (name, password) => {
    try {
        let a = await axios.post(`http://localhost:8000/api/auth/registration`, {
            name,
            password
        })
        return a
    } catch (error) {
        console.log(error)
        return false
    }
}

export const login = async (name, password) => {
    try {
        const response = await axios.post(`http://localhost:8000/api/auth/login`, {
            name,
            password
        })
        sessionStorage.setItem("name", response.data.user.name)
        sessionStorage.setItem("id", response.data.user.id)
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}