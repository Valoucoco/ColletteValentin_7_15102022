import '../styles/Body.css'
import Partout_Kasa from '../assets/Partout_Kasa.png'

function Body({ children }) {
	return <div className='kasa-Body'>{children}
            <div className="section__p">
                <p style={{
                backgroundImage: `url(${(Partout_Kasa)})`
                }}>Chez vous, partout et ailleurs</p>
            </div>
    </div>
}

export default Body