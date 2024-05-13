import porscheLogo from '../../img/icons/porsche-logo.png'


function Dates() {

    return(
    <section className="dates">
        <div className="dates-container">
            <h2 className="dates-title">Ключевые этапы</h2>

            <p className="dates-text">
                <img src={porscheLogo} alt="" />
                <span>1931—1948:</span> От задумок к серийному производству
            </p>
        </div>
    </section>
    )
}


export default Dates;