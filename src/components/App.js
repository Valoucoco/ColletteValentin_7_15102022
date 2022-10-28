import {Routes, Route} from "react-router-dom"
import Header from './Header'
import Cart from './Cart'
import Error from './Error'
import Apropos from './Apropos'
import Slideshow from './Slideshow'
import Footer from './Footer'
// import Fiche_Logement from './Fiche_Logement'


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
					<Slideshow />
					{/* <Fiche_Logement /> */}
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