import {
	Header,
	Footer,
	Navbar,
	Featured,
	CallToAction,
	Modal,
} from "../components";
import styled from "styled-components";
const Home = () => {
	return (
		<main>
			<Navbar />
			<Header />
			<Featured />
			<CallToAction />
			<Footer />
			<Modal />
		</main>
	);
};

export default Home;
const Wrapper = styled.main``;
