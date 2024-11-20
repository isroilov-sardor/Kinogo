import './index.css';
import image from '../../images/heart-icon.svg'

function Film(props) {
    const { Images, Title, Year, Rated, Released, Runtime, Genre, Plot, Director, Writer, Actors, Language, Country, Awards, imdbRating } = props.user;
    function onClick(){
        setCount(counter + 1)
    }
    return (
        <div className="film">
            <div className="film-container">
                <img src={image} onClick={onClick} className='plus-image' width={30} height={30} alt="" />
                <img className='film-image' src={Images} alt="" />
                <div className="film-all-same">
                    <div className="film-name">{Title}</div>
                    <div className="film-plot">{Plot}</div>
                    <div className="film1-same">
                        <div className="film-year-same">
                            <div className="fil-year-desc">Yil:</div>
                            <div className="film-year">{Year}</div>
                        </div>
                        <div className="film-reyt-same">
                            <div className="film-reyt-desc">Reyting:</div>
                            <div className="film-year">{Rated}</div>
                        </div>
                    </div>
                    <div className="film2-same">
                        <div className="film-born-same">
                            <div className="film-born-desc">Chiqarilgan sana</div>
                            <div className="film-born">{Released}</div>
                        </div>
                        <div className="film-runtime-same">
                            <div className="film-runtime-desc">Davomiyligi:</div>
                            <div className="film-runtime">{Runtime}</div>
                        </div>
                    </div>
                    <div className="film3-same">
                        <div className="film-janr-same">
                            <div className="film-janr-desc">Janr:</div>
                            <div className="film-janr">{Genre}</div>
                        </div>
                        <div className="film-director-same">
                            <div className="film-direct-desc">Rejjisor:</div>
                            <div className="film-director">{Director}</div>
                        </div>
                    </div>
                    <div className="film4-same">
                        <div className="film-writer-same">
                            <div className="film-wr-desc">Yozuvchi:</div>
                            <div className="film-writer">{Writer}</div>
                        </div>
                        <div className="film-actor-same">
                            <div className="film-actor-desc">Aktyorlar:</div>
                            <div className="film-actors">{Actors}</div>
                        </div>
                    </div>
                    <div className="film5-same">
                        <div className="film-lang-same">
                            <div className="film-lang-desc">Til:</div>
                            <div className="film-language">{Language}</div>
                        </div>
                        <div className="film-place-same">
                            <div className="film-place-desc">Mamlakat:</div>
                            <div className="film-place">{Country}</div>
                        </div>
                    </div>
                    <div className="film6-same">
                        <div className="film-pluses-same">
                            <div className="film-pl-desc">Mukofotlar: </div>
                            <div className="film-pluses">{Awards}</div>
                        </div>
                        <div className="film-imbdreyting-same">
                            <div className="film-imbd-desc">IMBd Reyting:</div>
                            <div className="film-imbdReyting">{imdbRating}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Film;