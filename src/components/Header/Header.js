import './Header.css'
import logo_Kasa from '../../assets/logo_Kasa.png'
import { Link } from 'react-router-dom'


function Banner() {
	return <div className='kasa-Banner'>
	<img src={logo_Kasa} alt='logo de Kasa' className='logo_Kasa' />
					<ul className='Header_menu'>
						<Link to="/"><span>Accueil</span></Link>
						<Link to="/Apropos"><span className='Border'>A Propos</span></Link>
					</ul>
					</div>
}

export default Banner
