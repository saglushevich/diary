import axios from 'axios'

export const addNote = async (data) => {
    try {
        const {title, owner, description, date, important} = data
        const response = await axios.post(`http://localhost:8000/api/auth/note`, {
            title,
            owner,
            description,
            date,
            important
        })
        console.log('создана запись в этой датабейс')
        alert(response.data.message)
    } catch (e) {
        console.log('Ты лох с базой данных')
        alert(e.response.data.message)
    }
}

export const getNotes = async (owner) => {
    try {
        const response = await axios.get(`http://localhost:8000/api/auth/getNotes/${owner}`)
        return response
    } catch (error) {
        console.log('Ты - датабейс!')
    }
}

export const deleteNote = async (_id) => {
    try {
        await axios.delete(`http://localhost:8000/api/auth/note/${_id}`)
    } catch (error) {
        console.log('Ты - датабейс неудаленый!')
    }
}

export const updateNote = async (_id, changes) => {
    try {
        return await axios.put(`http://localhost:8000/api/auth/updateNote/${_id}`, {
            changes
        })
    } catch (error) {
        console.log('Ne obnovleno')
        console.log(error)
    }
}