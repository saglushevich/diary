import '../../styles/styles.sass'
import './Manipulations.sass'
import SearchPanel from '../SearchPanel/SearchPanel'
import Filters from '../Filters/Filters'

function Manipulations () {
    return (
        <section className="manipulations">
            <div className="container">
                <div className="manipulations__block">
                    <SearchPanel/>
                    <Filters/>
                </div>
            </div>
        </section>
    )
}

export default Manipulations