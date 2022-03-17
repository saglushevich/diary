import { useState } from 'react';
import {NavLink, useHistory} from "react-router-dom";
import {registration, login} from '../../actions/user'
import './Authorization.sass'

function Registration () {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const onFormSubmit = async (e) => {
        e.preventDefault();
        let process = await registration(name, password)
        
        if(process) {
            history.push("/completed")
        } else {
            history.push("/incorrect")
        }
    }

    return (
        <div className="auth">
            <form onSubmit={onFormSubmit}>
                <div className="auth__title">Регистрация</div>
                <input onChange={(e) => setName(name => e.target.value)} value={name} minLength="4" required placeholder="Имя пользователя" name="username" type="text" className="auth__input"/>
                <input onChange={(e) => setPassword(password => e.target.value)} value={password} minLength="4" required placeholder="Пароль" name="password" type="password" className="auth__input"/>
                <button className="auth__btn">Создать</button>
                <NavLink to="/"><div className="auth__close">На главную</div></NavLink>
            </form>    
        </div>
    )
}

function Login() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const onFormSubmit = async (e) => {
        e.preventDefault();
        let res = await login(name, password);
        if(res) {
            history.push("/main")
        } else {
            history.push("/failure")
        }
    }

    return (
        <div className="auth">
            <form onSubmit={onFormSubmit}>
                <div className="auth__title">Вход в аккаунт</div>
                <input onChange={(e) => setName(name => e.target.value)} value={name} required placeholder="Имя пользователя" name="username" type="text" className="auth__input"/>
                <input onChange={(e) => setPassword(password => e.target.value)} value={password} required placeholder="Пароль" name="password" type="password" className="auth__input"/>
                <button className="auth__btn">Войти</button>
                <NavLink to="/"><div className="auth__close">На главную</div></NavLink>
            </form>
        </div>
    )
}

export {Registration, Login}