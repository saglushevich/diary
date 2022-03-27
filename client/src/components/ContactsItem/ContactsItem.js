import './ContactsItem.sass'
import pencil from '../../resources/pencil.png'
import deleteIcon from '../../resources/delete.png'
import {changeContacts} from '../../reduxActions/reduxActions'
import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react'
import {update} from '../../actions/user'

function ContactsItem (props) {
    const {title, phone, _id} = props
    const [clicked, setClicked] = useState(false)
    const dispatch = useDispatch()
    const contacts = useSelector(state => state.contacts)

    const [newTitle, setNewTitle] = useState(title);
    const [newPhone, setNewPhone] = useState(phone);

    const deleteContact = (_id) => {
        const elements = contacts.filter(item => item._id !== _id);
        dispatch(changeContacts(elements))
        update(sessionStorage.getItem("id"), {$pull: {contacts: {_id: _id}}})
    }

    const updateContact = async (_id, changes) => {
        const elements = contacts.map(item => {
            if(item._id === _id) {
                return {...item, ...changes}
            }
            return item
        })
        dispatch(changeContacts(elements))
        update(sessionStorage.getItem("id"), {$set: {contacts: elements}})
    }

    const onSubmit = (e) => {
        e.preventDefault();
        updateContact(_id, {title: newTitle, phone: newPhone});
        setClicked(clicked => !clicked)
    }

    return (
        <>
            {
                clicked ? 
                    <li className='contacts__item'>
                        <form onSubmit={onSubmit} style={{"display": 'flex'}}>
                            <input onChange={(e) => setNewTitle(e.target.value)} defaultValue={title} required name='contact' type="text"  minLength="3" className='add__form-input_edit' placeholder='Введите имя'/>
                            <input onChange={(e) => setNewPhone(e.target.value)} defaultValue={phone} required name='phone' type="text"  minLength="6" className='add__form-input_edit' placeholder='Введите номер'/>
                            <button className='add__form-btn add__form-btn_small'>Готово</button>
                        </form>
                    </li>
                :
                    <li className="contacts__item">
                        <div className="contacts__item-text">{title}</div>
                        <div className="contacts__actions">
                            <div className="contacts__item-text">{phone}</div>
                            <div onClick={() => setClicked(clicked => !clicked)} className="contacts__item-icon"><img src={pencil} alt="correctItem" /></div>
                            <div onClick={() => deleteContact(_id)} className="contacts__item-icon"><img src={deleteIcon} alt="deleteItem" /></div>  
                        </div>
                    </li>
            }
        </>
    )
}

export default ContactsItem