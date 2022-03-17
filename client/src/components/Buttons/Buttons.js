import '../../styles/styles.sass'
import './Buttons.sass'
import {NavLink} from "react-router-dom";
import { resetState } from '../../reduxActions/reduxActions';
import {useDispatch} from 'react-redux'

function Buttons () {
    const dispatch = useDispatch()

    const clearSessionStorage = () => {
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("id")
        dispatch(resetState())
    }

    return (
        <div className="buttons">
            <div className="container">
                <header className="header">
                    {sessionStorage.getItem('name') ? 
                        <NavLink to="/"><div onClick={clearSessionStorage} className="button">Выход</div></NavLink> :
                        <>
                            <NavLink to="/registration"><div className="button button-registration">Регистрация</div></NavLink>
                            <NavLink to="/login"><div className="button">Войти</div></NavLink>
                        </>
                    } 
                </header>
            </div>
        </div>
    )
}



export default Buttons