import {Routes, Route} from "react-router-dom"
import Header from './Header/Header'
import Cart from './Cart'
import Error from './Error/Error'
import APropos from './aPropos/APropos'
import Slideshow from './FicheLogement/Slideshow'
import Footer from './Footer/Footer'
import FicheLogement from './FicheLogement/FicheLogement'


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
						<Route path="/aPropos"
							element={<>
								<APropos />
							</>}
						/>
						<Route path="/FicheLogement/:id"
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