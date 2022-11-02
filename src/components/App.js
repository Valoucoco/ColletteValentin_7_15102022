import {Routes, Route} from "react-router-dom"
import Header from './Header'
import Cart from './Cart'
import Error from './Error'
import Apropos from './Apropos'
import Slideshow from './Slideshow'
import Footer from './Footer'
import FicheLogement from './FicheLogement'


function App() {
	return (
			<main>
				<Header />
					<Routes>
						<Route exact path="/" 
							element={<>
								<Cart/>
							</>}
						/>
						<Route path="/Apropos"
							element={<>
								<Apropos />
							</>}
						/>
						<Route path="/Fiche_logement/:id"
							element={<>
							<Slideshow/>
							<FicheLogement />
							</>}
						/>
						<Route path="*"
							element={<>
							<Error />
							</>}
						/>
					</Routes>
				<Footer />
			</main>
			)
}

export default App