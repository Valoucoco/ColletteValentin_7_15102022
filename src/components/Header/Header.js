import './Header.css'
import logoKasa from '../../assets/logo_Kasa.png'
import { Link } from 'react-router-dom'


function Banner() {
	return <div className='kasaBanner'>
	<img src={logoKasa} alt='logo de Kasa' className='logoKasa' />
					<ul className='HeaderMenu'>
						<Link to="/"><span>Accueil</span></Link>
						<Link to="/Apropos"><span className='Border'>A Propos</span></Link>
					</ul>
					</div>
}

export default Banner
