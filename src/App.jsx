import React, { useState } from "react";
import './App.css';
import logo from './images/kinogo-logo.svg';
import image1 from './images/count-immage.svg';
import data from './assets/data.json';
import image from './images/heart-icon.svg'


function App() {
  const [counter, setCounter] = useState(0);
  const onClikc = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="all">
      <div className="header">
        <div className="container head-container">
          <div className="logo-same">
            <a href="#"> <img src={logo} width={40} height={40} alt="logo" />
            </a>
            <a href="#" className="logo-desc">Kinogo</a>
          </div>
          <ul className="head-links">
            <li className="head-items"><a href="#">Bosh sahifa</a></li>
            <li className="head-items"><a href="#">Kinolar</a></li>
            <li className="head-items"><a href="#">Yangiliklar</a></li>
          </ul>
          <div className="count-head">
            <img src={image1} width={25} height={20} alt="count-icon" />
            <div className="count-desc">{counter} likes</div>
          </div>
        </div>
      </div>
      <div className="cards">
        <div className="container list-container">
          {
            data.length > 0 && data.map((item, index) => [
              <div key={index} className="film-container">
                <img src={image} onClick={onClikc} className='plus-image' width={30} height={30} alt="" />
                <img className='film-image' src={item.Images} alt="" />
                <div className="film-all-same">
                  <div className="film-name">{item.Title}</div>
                  <div className="film-plot">{item.Plot}</div>
                  <div className="film1-same">
                    <div className="film-year-same">
                      <div className="fil-year-desc">Yil:</div>
                      <div className="film-year">{item.Year}</div>
                    </div>
                    <div className="film-reyt-same">
                      <div className="film-reyt-desc">Reyting:</div>
                      <div className="film-year">{item.Rated}</div>
                    </div>
                  </div>
                  <div className="film2-same">
                    <div className="film-born-same">
                      <div className="film-born-desc">Chiqarilgan sana</div>
                      <div className="film-born">{item.Released}</div>
                    </div>
                    <div className="film-runtime-same">
                      <div className="film-runtime-desc">Davomiyligi:</div>
                      <div className="film-runtime">{item.Runtime}</div>
                    </div>
                  </div>
                  <div className="film3-same">
                    <div className="film-janr-same">
                      <div className="film-janr-desc">Janr:</div>
                      <div className="film-janr">{item.Genre}</div>
                    </div>
                    <div className="film-director-same">
                      <div className="film-direct-desc">Rejjisor:</div>
                      <div className="film-director">{item.Director}</div>
                    </div>
                  </div>
                  <div className="film4-same">
                    <div className="film-writer-same">
                      <div className="film-wr-desc">Yozuvchi:</div>
                      <div className="film-writer">{item.Writer}</div>
                    </div>
                    <div className="film-actor-same">
                      <div className="film-actor-desc">Aktyorlar:</div>
                      <div className="film-actors">{item.Actors}</div>
                    </div>
                  </div>
                  <div className="film5-same">
                    <div className="film-lang-same">
                      <div className="film-lang-desc">Til:</div>
                      <div className="film-language">{item.Language}</div>
                    </div>
                    <div className="film-place-same">
                      <div className="film-place-desc">Mamlakat:</div>
                      <div className="film-place">{item.Country}</div>
                    </div>
                  </div>
                  <div className="film6-same">
                    <div className="film-pluses-same">
                      <div className="film-pl-desc">Mukofotlar: </div>
                      <div className="film-pluses">{item.Awards}</div>
                    </div>
                    <div className="film-imbdreyting-same">
                      <div className="film-imbd-desc">IMBd Reyting:</div>
                      <div className="film-imbdReyting">{item.imdbRating}</div>
                    </div>
                  </div>
                </div>
              </div>
            ])
          }
        </div>
      </div>
    </div>
  );
}

export default App;
