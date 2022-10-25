import '../styles/Cart.css'
import LogementData from '../datas/logement_data.json'
import Partout_Kasa from '../assets/Partout_Kasa.png'

function Cart() {
    return (

        

        <section className="Gallery">
            <div className='kasa-Body'>
                <div className="section__p">
                <p style={{
                backgroundImage: `url(${(Partout_Kasa)})`
                }}>Chez vous, partout et ailleurs</p>
                </div>
            </div>
                {LogementData.map((l) => (
                <div className="boxKey" key={l.id} 
                style={{
                backgroundImage: `url(${(l.cover)})`
                }}>
                    <p className="boxTitre">{l.title}</p>
                </div>
                ))}
            </section>
        );
}
export default Cart