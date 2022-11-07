import '../styles/Cart.css'
import LogementData from '../data/logement_data.json'
import Partout_Kasa from '../assets/Partout_Kasa.png'
import { Link } from 'react-router-dom';



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
                <div className='galleryImage'>
                    {LogementData.map((l) => (
                    <Link key={l.id} to={`/fiche_logement/${l.id}`}>
                        <div className="boxKey" 
                        style={{
                            backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), 
                            url(${(l.cover)})`
                        }}>
                            <p className="boxTitre">{l.title}</p>
                        </div>
                    </Link>
                    ))}
                </div>
            </section>
        );
}
export default Cart