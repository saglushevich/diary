import './AddForm.sass'
import nextId from 'react-id-generator'
import {useState} from 'react';
import {addNote} from '../../actions/note';
import {addNoteToList} from '../../reduxActions/reduxActions'
import {useDispatch} from 'react-redux';

function AddForm () {
    let htmlId = nextId();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const dispatch = useDispatch()

    const onFormSubmit = (e) => {
        e.preventDefault();
        let data = {
            _id: htmlId,
            title,
            owner: sessionStorage.getItem("name"),
            description,
            important: false,
            date
        }
        addNote(data)
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
                        <input onChange={(e) => setTitle(e.target.value)} value={title} required name='note' type="text" className="add__form-input" placeholder='Введите запись'/>
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