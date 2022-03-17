import './Filters.sass'
import {setFilter} from '../../reduxActions/reduxActions'
import {useSelector, useDispatch} from 'react-redux';

function Filters () {
    const dispatch = useDispatch()
    const filterSelected = useSelector(data => data.filter)

    const btnsData = [
        {filter: 'all', title: 'Все записи'},
        {filter: 'important', title: 'Важные'},
        {filter: 'today', title: 'Сегодня'}
    ]

    const btns = btnsData.map(item => {
        const {filter, title} = item;
        const active = filterSelected === filter;
        const activeClass = active ? {'backgroundColor' : '#fff', 'color' : '#3D5A80'} : {'backgroundColor' : 'transparent', 'border': '3px solid #FFFFFF'}
        return (
            <div key={filter} onClick={() => dispatch(setFilter(filter))} className="filters__item" style={activeClass}>{title}</div>
        )
    })

    return (
        <div className="filters">
            <div className="container">
                <div className="filters__block">
                    {btns}
                </div>
            </div>
        </div>
    )
}

export default Filters