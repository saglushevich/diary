import axios from 'axios'

export const registration = async (name, password) => {
    try {
        return await axios.post(`https://frozen-caverns-19486.herokuapp.com/api/auth/registration`, {
            name,
            password
        })
    } catch (error) {
        console.log(error)
        return false
    }
}

export const login = async (name, password) => {
    try {
        const response = await axios.post(`https://frozen-caverns-19486.herokuapp.com/api/auth/login`, {
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

export const update = async (_id, changes) => {
    try {
        return await axios.put(`https://frozen-caverns-19486.herokuapp.com/api/auth/update/${_id}`, {
            changes
        })
    } catch (error) {
        console.log(error)
    }
}

export const getInfo = async (_id = sessionStorage.getItem("id")) => {
    try {
        return await axios.get(`https://frozen-caverns-19486.herokuapp.com/api/auth/user/${_id}`)
    } catch (error) {
        console.log(error)
    }
}