import icon1 from '../img/icons/main-btn.svg'
import icon2 from '../img/icons/clock-btn.svg'
import icon3 from '../img/icons/boxes-btn.svg'
import icon4 from '../img/icons/crown-btn.svg'

function Menu() {
    return (
        <nav className="navigation">
            <div className="nav-items">
                <a href="#" className="nav-item">
                    <img src={icon1} alt="main" />
                </a>
                <a href="#" className="nav-item">
                    <img src={icon2} alt="main" />
                </a>
                <a href="#" className="nav-item">
                    <img src={icon3} alt="main" />
                </a>
                <a href="#" className="nav-item">
                    <img src={icon4} alt="main" />
                </a>
            </div>
        </nav>
    )
}

export default Menu;