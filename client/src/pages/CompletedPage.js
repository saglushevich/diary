import Buttons from "../components/Buttons/Buttons";
import { Modal } from "../components/Modal/Modal";

function CompletedPage () {
    return (
        <>
            <Buttons/>
            <Modal message={"Регистрация завершена успешно! Вы можете войти в свой аккаунт"} button={"Войти"} link={"/login"}/>
        </>
    )
}

export default CompletedPage