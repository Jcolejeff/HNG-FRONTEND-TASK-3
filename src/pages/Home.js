import {
	Header,
	Footer,
	Navbar,
	Featured,
	CallToAction,
	Modal,
} from "../components";
import styled from "styled-components";
import { nftItems } from "../data";

const Home = () => {
	return (
		<main>
			<Header />
			<Featured
				text="Inspiration for your next adventure"
				nftItems={nftItems}
			/>
			<CallToAction />

			<Modal />
			<Footer />
		</main>
	);
};

export default Home;
const Wrapper = styled.main``;
