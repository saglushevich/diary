export const loadingData = () => {
    return {
        type: "LOADING_DATA"
    }
}

export const loadedData = () => {
    return {
        type: "LOADED_DATA"
    }
}

export const loadNotes = (value) => {
    return {
        type: 'LOAD_NOTES',
        payload: value
    }
}

export const setTerm = (value) => {
    return {
        type: "SET_TERM",
        payload: value
    }
}

export const setFilter = (value) => {
    return {
        type: "SET_FILTER",
        payload: value
    }
}

export const setDate = (value) => {
    return {
        type: "SET_DATE",
        payload: value
    }
}

export const resetState = () => {
    return {
        type: "RESET_STATE"
    }
}

export const changeNotes = (value) => {
    return {
        type: "CHANGE_NOTES",
        payload: value
    }
}

export const addNoteToList = (value) => {
    return {
        type: "ADD_NOTE",
        payload: value
    }
}

export const addContactToList = (value) => {
    return {
        type: "ADD_CONTACT",
        payload: value
    }
}

export const loadContacts = (value) => {
    return {
        type: 'LOAD_CONTACTS',
        payload: value
    }
}

export const changeContacts = (value) => {
    return {
        type: "CHANGE_CONTACTS",
        payload: value
    }
}
