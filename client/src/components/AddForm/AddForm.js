import './AddForm.sass'
import {useState} from 'react';
import {update} from '../../actions/user';
import {addNoteToList} from '../../reduxActions/reduxActions'
import {useDispatch} from 'react-redux';

function AddForm () {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const dispatch = useDispatch()

    const onFormSubmit = (e) => {
        e.preventDefault();
        let data = {
            _id: Math.floor(Math.random() * (1125899906842624 - 1) + 1),
            title,
            description,
            important: false,
            date
        }
        update(sessionStorage.getItem("id"), {$push: {notes: data}})
        dispatch(addNoteToList(data))
        setTitle("")
        setDescription("")
        setDate("")
    }

    return (
        <section className="add">
            <div className="container">
                <div className="add__block">
                    <div className="add__block-title">Добавить запись в список:</div>
                    <form onSubmit={onFormSubmit} className='add__form'>
                        <input onChange={(e) => setTitle(e.target.value)} value={title} required minLength="3" name='note' type="text" className="add__form-input" placeholder='Введите запись'/>
                        <input onChange={(e) => setDescription(e.target.value)} value={description} name='descr' type="text" className="add__form-input" placeholder='Введите описание'/>
                        <input onChange={(e) => setDate(e.target.value)} value={date} name='date' type="date" className="add__form-input add__form-date" placeholder='дд-мм-гггг'/>
                        <button className="add__form-btn">Добавить</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default AddForm