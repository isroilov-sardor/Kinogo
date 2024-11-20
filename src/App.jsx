import React, { useState } from "react";
import './App.css';
import logo from '../src/images/kinogo-logo.svg';
import image1 from '../src/images/count-immage.svg';
import FilmList from "./components/FilmList";
import data from './assets/data.json';

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
      <FilmList kinos={data} />
    </div>
  );
}

export default App;
