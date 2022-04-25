import spinner from '../../resources/spinner.svg'
import './Spinner.sass'

function Spinner () {
    return (
        <div className="spinner">
            <img src={spinner} alt="spinner" className="spinner__img" />
            <div className="spinner__text">Загрузка...</div>
        </div>
    )
}

export default Spinner