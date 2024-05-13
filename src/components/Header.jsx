
import car from '../img/car.png'

function Header() {
    return (
        <header className="header">
            <div className="header-content-container">
                <div className="header-content">
                    <div className="header-top-half"></div>
                    <div className="header-bottom-half"></div>
                    <h1 className="header-title-porsche">Porsche</h1>
                    <img src={car} alt="" className="header-img" />
                    <button className="header-btn">Окунуться в историю</button>
                </div>
                <video src={"./video/189847_en_3000000.mp4"} autoplay loop muted>Видео не поддерживается вашим
                    устройством</video>
            </div>
        </header>
    )
}

export default Header;