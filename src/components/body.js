import '../styles/Body.css'
import Partout_Kasa from '../assets/Partout_Kasa.png'

function Body({ children }) {
	return <div className='kasa-Body'>{children}
        <img src={Partout_Kasa} alt='Chez vous et partout ailleurs' className='Partout_Kasa' />
    </div>
}

export default Body