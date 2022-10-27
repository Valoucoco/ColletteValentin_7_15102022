import {Routes, Route} from "react-router-dom"
import Header from './Header'
import Cart from './Cart'
import Error from './Error'
import Apropos from './Apropos'
import Fiche_logement from './Fiche_logement'
import Footer from './Footer'

// for (let i = 0; i < toto.length; i++) {
    //         console.log(id , data[i].id)
    //     }

function App() {
	return (
			<main>
			<Routes>
				<Route exact path="/" 
					element={<>
						<Header/>
						<Cart/>
						<Footer/>
					</>}
				/>
				<Route path="/Apropos"
					element={<>
						<Header/>
						<Apropos />
						<Footer/>
					</>}
				/>
				<Route path="/Fiche_logement/:id"
					element={<>
					<Header/>
					<Fiche_logement />
					<Footer/>
					</>}
				/>
				<Route path="*"
					element={<>
					<Header/>
					<Error />
					<Footer/>
					</>}
				/>
			</Routes>
			</main>
			)
}

export default App