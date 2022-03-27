/* eslint-disable react-hooks/exhaustive-deps */
import './Notes.sass'
import NotesItem from '../NotesItem/NotesItem'
import {useEffect} from 'react'
import {loadNotes, loadingNotes} from '../../reduxActions/reduxActions'
import {useSelector, useDispatch} from 'react-redux';
import {getInfo} from '../../actions/user'

function Notes () {
    const loading = useSelector(state => state.loading);
    const currentDate = useSelector(state => state.date)
    const term = useSelector(state => state.term)
    const filter = useSelector(state => state.filter)
    const data = useSelector(state => state.data)
    const dispatch = useDispatch()

    useEffect (() => {
        dispatch(loadingNotes())
        getInfo().then(items => items.data.user.notes).then(items => dispatch(loadNotes(items)))
    }, [])

    const filterPost = (items, filter) => {
        switch (filter) {
            case 'important':
                return items.filter(item => item.important);
            case 'today':
                return items.filter(item => item.date === currentDate);
            default:
                return items
        }
    }

    const searchNote = (items, term) => {
        if (term.length <= 1) {
            return items;
        }

        return items.filter(item => {
            return item.title.toUpperCase().indexOf(term.toUpperCase()) > -1
        })
    }

    let visibleDate = filterPost(searchNote(data, term), filter)

    return (
        <section className="notes">
            <div className="container">
                <div className="notes__block">
                    <ul className="notes__list">
                        {
                            loading ? <div className="notes__warning">Загрузка...</div> : (visibleDate.length > 0 ? visibleDate.map(item => {
                                const {_id} = item;
                                const {...itemProps} = item
                                return <NotesItem key={_id} {...itemProps}/>
                            }) : <div className="notes__warning">Список пуст</div>)
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Notes