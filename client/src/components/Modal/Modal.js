import {NavLink} from "react-router-dom";
import { useState } from "react";
import './Modal.sass'

function Modal (props) {
    const {message, button, link} = props

    return (
        <div className="popup">
            <div className="popup__dialog">
                <div className="popup__content">
                    <div className="popup__title">{message}</div>
                    <NavLink to={link}><button className="popup__btn">{button}</button></NavLink>    
                </div>
            </div>    
        </div>
    )
}

function EditNoteModal (props) {
    const {title, description, date, _id, onSetPupupState, updateItem} = props
    
    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);
    const [newDate, setNewDate] = useState(date);
    
    const onFormSubmit = (e) => {
        e.preventDefault();
        updateItem(_id, {title: newTitle, description: newDescription, date: newDate})
        onSetPupupState()
    }

    return (
        <div className="popup__dialog">
                <div className="popup__content">
                    <form onSubmit={onFormSubmit}>
                        <div className="popup__title">Отредактируйте запись: </div>
                        <input onChange={(e) => setNewTitle(e.target.value)} required placeholder="Запись" defaultValue={title} name="note" type="text" className="popup__input"></input>
                        <input onChange={(e) => setNewDescription(e.target.value)} placeholder="Описание" defaultValue={description} name="descr" type="text" className="popup__input"></input>
                        <input onChange={(e) => setNewDate(e.target.value)} placeholder="дд-мм-гггг" defaultValue={date} name="date" type="date" className="popup__input"></input>
                        <button className="popup__btn">Сохранить</button>
                    </form> 
                </div>
            </div>    
    )
}

export {Modal, EditNoteModal}