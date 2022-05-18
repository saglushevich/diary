/* eslint-disable react-hooks/exhaustive-deps */
import  Buttons from "../components/Buttons/Buttons";
import Info from "../components/Info/Info";
import Manipulations from "../components/Manipulations/Manipulations";
import Notes from "../components/Notes/Notes";
import AddForm from "../components/AddForm/AddForm";
import Footer from "../components/Footer/Footer";
import Contacts from "../components/Contacts/Contacts";
import AddContactForm from "../components/AddContactForm/AddContactForm";
import Spinner from "../components/Spinner/Spinner";

import {getInfo} from '../actions/user'
import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {loadContacts, loadNotes, setLoadingStatus} from '../reduxActions/reduxActions'

function MainPage () {
    const loading = useSelector(state => state.loading);

    const dispatch = useDispatch();

    useEffect (async () => {
        dispatch(setLoadingStatus(true))
        await getInfo().then(items => items.data.user.contacts).then(items => dispatch(loadContacts(items)));
        await getInfo().then(items => items.data.user.notes).then(items => dispatch(loadNotes(items)));
        dispatch(setLoadingStatus(false))
    }, [])

    return (
        <>
        {loading ? <Spinner/> : 
            <>
                <Buttons/>
                <Info/>
                <Manipulations/>
                <Notes/>
                <AddForm/>
                <Contacts/>
                <AddContactForm/>
                <Footer/>
            </> 
            
        }
        </>
    )
}



export default MainPage

