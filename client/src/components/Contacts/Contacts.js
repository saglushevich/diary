/* eslint-disable react-hooks/exhaustive-deps */
import './Contacts.sass'
import ContactsItem from '../ContactsItem/ContactsItem'
import {useSelector, useDispatch} from 'react-redux';
import { getContacts } from '../../actions/contact'
import {loadContacts, loadingNotes} from '../../reduxActions/reduxActions'
import {useEffect} from 'react'

function Contacts () {
    const loading = useSelector(state => state.loading);
    const contacts = useSelector(state => state.contacts);
    const dispatch = useDispatch();

    useEffect (() => {
        dispatch(loadingNotes())
        getContacts(sessionStorage.getItem("name")).then(items => items.data.contact).then(items => dispatch(loadContacts(items)))
    }, [])


    return (
        <section className="contacts">
            <div className="container">
                <ul className="contacts__list">
                    {
                        loading ? <div className="notes__warning">Загрузка...</div> :  (contacts.length > 0 ? contacts.map(item => {
                            const {_id} = item;
                            const {...itemProps} = item
                            return <ContactsItem key={_id} {...itemProps}/>
                        }) : <div className="notes__warning">Список пуст</div>) 
                    }
                </ul>
            </div>
        </section>
    )
}

export default Contacts 