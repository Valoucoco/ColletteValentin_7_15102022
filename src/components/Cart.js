import '../styles/Cart.css'
import LogementData from '../datas/logement_data.json'
console.log(LogementData)

function Cart() {
    return (
            <section className="Gallery">
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