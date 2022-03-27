import './Homepage.sass'
import vabik from '../../resources/vabik.webp';

function Homepage () {
    return (
        <div className="homepage">
            <div className="container">
                <h1 className="homepage__title">Зарегистрируйтесь или войдите в аккаунт</h1>
                <img src={vabik} alt="vabik" className='homepage__img'/>
            </div>
        </div>
    )
}

export default Homepage