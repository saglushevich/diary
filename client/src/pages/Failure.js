import Buttons from "../components/Buttons/Buttons";
import { Login } from "../components/Authorization/Authorization";
import { Modal } from "../components/Modal/Modal";

function FailurePage () {
    return (
        <>
            <Buttons/>
            <Login/>
            <Modal message={"Неверный логин или пароль. Повторите попытку"} button={"Повторить"} link={"/login"}/>
        </>
    )
}

export default FailurePage