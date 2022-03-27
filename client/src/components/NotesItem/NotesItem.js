import './NotesItem.sass'
import deleteIcon from '../../resources/delete.png'
import makeImportant from '../../resources/tag.png'
import arrow from '../../resources/down.png'
import pencil from '../../resources/pencil.png'
import {EditNoteModal} from '../Modal/Modal'
import {update} from '../../actions/user'
import {changeNotes} from '../../reduxActions/reduxActions'
import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react'

function NotesItem (props) {
    const {_id, title, date, description, important} = props;

    const [popupState, setPopupState] = useState(false)
    const [descriptionState, setDescriptionState] = useState(false);

    const data = useSelector(state => state.data)
    const currentDate = useSelector(state => state.date)
    const dispatch = useDispatch()

    const deleteItem = (_id) => {
        const elements = data.filter(item => item._id !== _id);
        dispatch(changeNotes(elements))
        update(sessionStorage.getItem("id"), {$pull: {notes: {_id: _id}}})
    }

    const updateItem = async (_id, changes) => {
        const elements = data.map(item => {
            if(item._id === _id) {
                return {...item, ...changes}
            }
            return item
        })
        dispatch(changeNotes(elements))
        update(sessionStorage.getItem("id"), {$set: {notes: elements}})
    }

    return (
        <>
            <li key={_id} style={important ? {'background' : '#B8F5DF'} : null} className="notesItem">
                <div className="notesItem__main">
                    <div style={date < currentDate ? {"color": "#F5251C"} : null} className="notesItem__title">{title.length > 30 ? `${title.slice(0, 30)}...` : title}</div>
                    <div className="notesItem__actions">
                        <div style={date < currentDate ? {"color": "#F5251C"} : null} className="notesItem__title notesItem__date">{date}</div>
                        <div onClick={() => setPopupState(popupState => !popupState)} className="notesItem__icon" title='Отредактировать запись'><img src={pencil} alt="editNote" /></div>
                        <div onClick={() => deleteItem(_id)} className="notesItem__icon" title='Удалить запись'><img src={deleteIcon} alt="deleteIcon" /></div>
                        <div onClick={() => updateItem(_id, {important: !important})} className="notesItem__icon" title='Отметить запись'><img src={makeImportant} alt="makeImportant" /></div>
                        <div onClick={() => setDescriptionState(descriptionState => !descriptionState)} className="notesItem__icon" title='Показать описание'><img src={arrow} alt="showContent" /></div>
                    </div>
                </div>
                <div style={descriptionState ? {'display' : 'block'} : null} className="notesItem__descr">{description}</div>
            </li>

            <div className="popup" style={popupState ? {"display": "block"} : {"display": "none"}}>
                <EditNoteModal _id={_id} title={title} description={description} date={date} onSetPupupState={() => setPopupState(popupState => !popupState)} updateItem={updateItem}/>
            </div>
            
        </>
    )
}


export default NotesItem