import '../styles/Logement.css'

function Body({ children }) {
	return <div className='kasa-Body'>{children}
        <div className="section__p">
            <div className="section__paragraphe">
                <p>Chez vous, partout et ailleurs</p>
            </div>
        
        </div>
    </div>
}
export default Body