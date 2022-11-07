import '../styles/Cart.css'
import LogementData from '../data/logement_data.json'
import PartoutKasa from '../assets/Partout_Kasa.png'
import { Link } from 'react-router-dom';



function Cart() {

    return (
        <section className="Gallery">
            <div className='kasa-Body'>
                <div className="sectionP">
                <p style={{
                backgroundImage: `url(${(PartoutKasa)})`
                }}>Chez vous, partout et ailleurs</p>
                </div>
            </div>
                <div className='galleryImage'>
                    {LogementData.map((l) => (
                    <Link key={l.id} to={`/ficheLogement/${l.id}`}>
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