import './Error.css'
function Error() {
	return (
		<div className='Error'>
            <h1 className='Error_h1'>404</h1>
			<div className='Error_paragraphe'>Oups! La page que vous demandez n'existe pas.</div>
			<a href= '{/*lienVersAccueil*/}' className='Error_linkBack'>Retourner sur la page d'accueil</a>
		</div>
	)
}

export default Error