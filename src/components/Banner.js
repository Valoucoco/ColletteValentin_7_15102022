import '../styles/Banner.css'
import logo_Kasa from '../assets/logo_Kasa.png'


function Banner({ children }) {
	return <div className='kasa-Banner'>{children}
	<img src={logo_Kasa} alt='logo de Kasa' className='logo_Kasa' />
					<ul className='Header_menu'>
						<li>Accueil</li>
						<li>A Propos</li>
					</ul>
					</div>
	
}

export default Banner