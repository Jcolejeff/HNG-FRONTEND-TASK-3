import { Home, PlaceToStay, ErrorPage } from "./pages";
import { ScrollToTop, Navbar, Modal } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
	return (
		<Router>
			<ScrollToTop>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/place-to-stay" element={<PlaceToStay />} />
					<Route path="*" element={<ErrorPage />}></Route>
				</Routes>
				<Modal />
			</ScrollToTop>
		</Router>
	);
};

export default App;
