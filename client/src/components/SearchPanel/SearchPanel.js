import './SearchPanel.sass'
import {useState} from 'react'
import {setTerm} from '../../reduxActions/reduxActions'
import {useDispatch} from 'react-redux';

function SearchPanel () {
    const [request, setRequest] = useState('');

    const dispatch = useDispatch()

    const onUpdateSearch = (e) => {
        setRequest(e.target.value)
        dispatch(setTerm(request))
    }

    return (
        <div className="search">
            <div className="container">
                <form className='search__form'>
                    <input required value={request} onChange={onUpdateSearch}  className='search__input' name='request' type="text" placeholder='Введите запись'/>
                </form>
            </div>
        </div>
    )
}

export default SearchPanel