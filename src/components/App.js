import {Routes, Route} from "react-router-dom"
import Header from './Header'
import Cart from './Cart'
import Error from './Error'
import Apropos from './Apropos'
import Logement from './Logement'
import Footer from './Footer'


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
				<Route path="/Logement"
					element={<>
					<Header/>
					<Logement />
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