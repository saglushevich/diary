import nextId from 'react-id-generator'
import {useState} from 'react'
import {useDispatch} from 'react-redux';
import {update} from '../../actions/user';
import {addContactToList} from '../../reduxActions/reduxActions'

function AddContactForm () {
    let htmlId = nextId();
    const [title, setTitle] = useState('');
    const [phone, setPhone] = useState('');
    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault();
        let contact = {
            _id: htmlId,
            title,
            phone
        }
        update(sessionStorage.getItem("id"), {$push: {contacts: contact}})
        dispatch(addContactToList(contact));
        setTitle("")
        setPhone("");
    }


    return (
        <div className="add">
            <div className="container">
                <div className="add__block">
                    <div className="add__block-title">Добавьте контакты:</div>
                    <form onSubmit={onSubmit} className="add__form add__form_small">
                        <input onChange={(e) => setTitle(e.target.value)} value={title} required name='contact' type="text"  minLength="3" className="add__form-input add__form-input_large" placeholder='Введите имя'/>
                        <input onChange={(e) => setPhone(e.target.value)} value={phone} required name='phone' type="text" minLength="6" className="add__form-input add__form-input_large" placeholder='Введите номер'/>
                        <button className="add__form-btn add__form-btn_contact">Добавить</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddContactForm;