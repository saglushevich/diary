import './Contacts.sass'
import ContactsItem from '../ContactsItem/ContactsItem'
import {useSelector} from 'react-redux';

function Contacts () {

    const sortByField = (field) => {
        return (a, b) => a[field] > b[field] ? 1 : -1
    }

    const loading = useSelector(state => state.loading);
    const contacts = useSelector(state => state.contacts).sort(sortByField('title'))

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