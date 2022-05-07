const initial = {
    data: [],
    contacts: [],
    loading: false,
    filter: 'all',
    term: '',
    date: '',
}

const reducer = (state = initial, action) => {
    switch (action.type) {
        case "LOADING_DATA": 
            return {...state, loading: true}
        case "LOADED_DATA":
            return {...state, loading: false}
        case "LOAD_NOTES":
            return {...state, data: [...state.data, ...action.payload]}
        case "SET_TERM":
            return {...state, term: action.payload}
        case "SET_FILTER":
            return {...state, filter: action.payload}
        case "SET_DATE":
            return {...state, date: action.payload}
        case "RESET_STATE":
            return {data: [], contacts: [], loading: false, filter: 'all', term: '', date: ''}
        case "CHANGE_NOTES":
            return {...state, data: [...action.payload]}
        case "ADD_NOTE":
            return {...state, data: [...state.data, action.payload]}
        case "ADD_CONTACT":
            return {...state, contacts: [...state.contacts, action.payload]}
        case "LOAD_CONTACTS":
            return {...state, contacts: [...state.contacts, ...action.payload]}
        case "CHANGE_CONTACTS":
            return {...state, contacts: [...action.payload]}
        default:
            return state
    }
}

export default reducer