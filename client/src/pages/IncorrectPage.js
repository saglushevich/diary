import Buttons from "../components/Buttons/Buttons";
import { Registration } from "../components/Authorization/Authorization";
import { Modal } from "../components/Modal/Modal";

function IncorrectPage () {
    return (
        <>
            <Buttons/>
            <Registration/>
            <Modal message={"Пользователь с таким именем уже зарегистрирован. Повторите попытку"} button={"Повторить"} link={"/registration"}/>
        </>
    )
}

export default IncorrectPage