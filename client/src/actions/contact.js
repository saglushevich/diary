import axios from 'axios'

export const addContact = async (data) => {
    try {
        const {title, owner, phone} = data
        await axios.post(`http://localhost:8000/api/auth/contact`, {
            title,
            owner,
            phone
        })
    } catch (e) {
        console.log('Ты лох с базой данных')
        alert(e.response.data.message)
    }
}

export const getContacts = async (owner) => {
    try {
        const response = await axios.get(`http://localhost:8000/api/auth/getContacts/${owner}`)
        return response
    } catch (error) {
        console.log('Ты - датабейс!')
    }
}

export const deleteContact = async (_id) => {
    try {
        await axios.delete(`http://localhost:8000/api/auth/contact/${_id}`)
    } catch (error) {
        console.log('Ты - датабейс неудаленый!')
    }
}

export const updateContact = async (_id, changes) => {
    try {
        return await axios.put(`http://localhost:8000/api/auth/updateContact/${_id}`, {
            changes
        })
    } catch (error) {
        console.log('Ne obnovleno')
        console.log(error)
    }
}