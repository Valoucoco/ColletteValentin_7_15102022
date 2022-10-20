import '../styles/Cart.css'
import LogementData from '../datas/logement_data.json'
console.log(LogementData)

function Cart() {
    return (
        <main>
            <section className="Gallery">
                {LogementData.map((l) => (
                <div className="boxKey" key={l.id}>
                    <p className="boxTitre">{l.title}</p>
                    <img className="boxImg" src={l.cover} alt="" />
                </div>
                ))}
            </section>
        </main>
        );
}
export default Cart