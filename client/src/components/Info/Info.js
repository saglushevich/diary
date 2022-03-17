import '../../styles/styles.sass'
import './Info.sass'
import {useSelector, useDispatch} from 'react-redux';
import {setDate} from '../../reduxActions/reduxActions'

function Info () {
    const notesLength = useSelector(state => state.data.length)
    const contactsLength = useSelector(state => state.contacts.length)
    const importantNotes = useSelector(state => state.data.filter(item => item.important).length)
    const dispatch = useDispatch()

    const getZero = (num) => {
        if (num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    const date = new Date();
    const currentDate = `${date.getFullYear()}-${getZero(date.getMonth() + 1)}-${getZero(date.getDate())}`
    dispatch(setDate(currentDate))

    return (
        <section className="info">
            <div className="container">
                <div className="info__block">
                    <div className="info__block-title">Текущие заметки</div>
                    <div className="info__block-text">Общее число записей: {notesLength}</div>
                    <div className="info__block-text">Общее число контактов: {contactsLength}</div>
                    <div className="info__block-text">Число “важных” записей: {importantNotes}</div>
                    <div className="info__block-text">Дата: {currentDate}</div>
                </div>
            </div>
        </section>
    )
}

export default Info