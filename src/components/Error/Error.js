import './Error.css'
function Error() {
	return (
		<div className='Error'>
            <h1 className='ErrorH1'>404</h1>
			<div className='ErrorParagraphe'>Oups! La page que vous demandez n'existe pas.</div>
			<a href= '{/*lienVersAccueil*/}' className='ErrorLinkBack'>Retourner sur la page d'accueil</a>
		</div>
	)
}

export default Error