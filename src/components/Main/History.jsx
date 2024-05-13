import porsche1 from '../../img/porshce1.png'
import porsche2 from '../../img/porshce2.png'
import porsche3 from '../../img/porshce3.png'

function History(){
    return(
        <section className="history">
          <div className="history-container">
            <div className="histiry-left">
              <h2 className="history-title">История длиной в 90 лет</h2>
              <p className="history-text">
                К моменту выпуска первого автомобиля под своим именем Фердинанд Порше успел накопить немалый
                опыт. Основанное им 25 апреля 1931 года предприятие Dr. Ing. h.c. F. Porsche GmbH под его
                началом уже успело поработать над такими проектами, как 6-цилиндровый гоночный Auto Union и
                Volkswagen Käfer, ставший одним из самых продаваемых автомобилей в истории. В 1939 году был
                разработан первый автомобиль компании — Porsche 64, который стал прародителем всех будущих
                Porsche. Для постройки этого экземпляра Фердинанд Порше использовал многие компоненты от
                Volkswagen Käfer.
              </p>
            </div>
            <div className="history-right">
              <div className="history-images">
                <img src={porsche1} alt="" />
                <img src={porsche2} alt="" />
                <img src={porsche3} alt="" />
                <img src={porsche1} alt="" />
              </div>
            </div>
          </div>
        </section>
    )
}

export default History;