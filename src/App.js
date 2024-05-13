// npm start

import React from 'react';
import './App.css';
import porsche365 from './img/porsche365.png'
import porsche911 from './img/porsche911.png'
import porscheCarrera from './img/porshceCarrera.png'
import porscheTycan from './img/porshceTycan.png'
import Menu from './components/Menu';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Main />

      <main>
        
        <section className="car-models">
          <div className="models-container">
            <h2 className="models-title">
              Самые знаковые модели
            </h2>
            <ul className="models-list">
              <li className="models-item">
                <div className="model-item-desc">
                  <h3>Porsche 365</h3>
                  <p> Первый серийный автомобиль Porsche.</p>
                </div>
                <img src={porsche365} alt="" />
              </li>
              <li className="models-item">
                <div className="model-item-desc">
                  <h3>Porsche 911</h3>
                  <p>Более мощный, комфортабельный и современный преемник модели 356. Изначально назывался
                    Porsche 901. Но у компании Peugeot были эксклюзивные права во Франции на имена машин,
                    образованных тремя цифрами с нулём посередине. В итоге Porsche изменили название на 911.
                  </p>
                </div>
                <img src={porsche911} alt="" />
              </li>
              <li className="models-item">
                <div className="model-item-desc">
                  <h3>Porsche Carrera GT</h3>
                  <p>Автомобиль был некоторое время быстрейшим серийным автомобилем Северной Петли
                    Нюрбургринга - 7 минут 28 секунд. Этот результат был побит суперкаром Pagani Zonda F.
                  </p>
                </div>
                <img src={porscheCarrera} alt="" />
              </li>
              <li className="models-item">
                <div className="model-item-desc">
                  <h3>Porsche Tycan</h3>
                  <p>Первый серийный электрокар от Порше</p>
                </div>
                <img src={porscheTycan} alt="" />
              </li>
            </ul>
          </div>
        </section>
      </main>
      <footer className="main-footer">
        <div className="footer-container">
          <h2 className="footer-text">
            Футер
          </h2>
        </div>
      </footer>
    </div>
  );
}

export default App;



