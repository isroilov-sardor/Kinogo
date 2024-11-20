import './index.css';
import Film from '../Film';

function FilmList(props) {
    const { kinos } = props
    return (
        <div list>
            <div className=" container list-container">
                {
                    kinos.length > 0 && kinos.map((user, index) => {
                        return (
                            <Film key={index} user={user}></Film>
                        )
                    })
                }
            </div>
        </div >
    )
}
export default FilmList;