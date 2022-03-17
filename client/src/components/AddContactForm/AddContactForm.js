import nextId from 'react-id-generator'
import {useState} from 'react'
import {useDispatch} from 'react-redux';
import {addContact} from '../../actions/contact'
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
            owner: sessionStorage.getItem("name"),
            title,
            phone
        }
        addContact(contact);
        dispatch(addContactToList(contact));
        setTitle("")
        setPhone("");
    }


    return (
        <div className="add">
            <div className="container">
                <div className="add__block">
                    <div className="add__block-title">Добавьте контакты:</div>
                    <form onSubmit={onSubmit} className="add__form" style={{"display": "flex"}}>
                        <input onChange={(e) => setTitle(e.target.value)} value={title} required name='contact' type="text"  minLength="3" className="add__form-input add__form-input_large" placeholder='Введите имя'/>
                        <input onChange={(e) => setPhone(e.target.value)} value={phone} required name='phone' type="text" minLength="7" className="add__form-input add__form-input_large" placeholder='Введите номер'/>
                        <button className="add__form-btn" style={{"marginTop": 0}}>Добавить</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddContactForm;