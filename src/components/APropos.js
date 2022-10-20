import '../styles/APropos.css'
import img_apropos_Kasa from '../assets/d_a-propos_Kasa.png'

console.log('ici')
function Banner({ children }) {
	return <div className='a_propos_Kasa'>{children}
	<img src={img_apropos_Kasa} alt='Un paysage montagneux' className='img_apropos_Kasa' />
					</div>
	
}

export default Banner