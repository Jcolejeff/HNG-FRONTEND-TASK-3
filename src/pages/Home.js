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
		<Wrapper>
			<Navbar />
			<Header />
			<Featured />
			<CallToAction />
			<Footer />
			<Modal />
		</Wrapper>
	);
};

export default Home;
const Wrapper = styled.main`
	.modal-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		display: grid;
		place-items: center;

		visibility: hidden;
		z-index: -1;
	}
	/* OPEN/CLOSE MODAL */
	.show-modal {
		visibility: visible;
		z-index: 10;
	}
	.modal-container {
		background: var(--clr-white);
		border-radius: var(--radius);
		width: 90vw;
		height: 30vh;
		max-width: var(--fixed-width);
		text-align: center;
		display: grid;
		place-items: center;
		position: relative;
	}
	.close-modal-btn {
		position: absolute;
		top: 1rem;
		right: 1rem;
		font-size: 1rem;
		background: transparent;
		border-color: transparent;
		color: var(--clr-red-dark);
		cursor: pointer;
	}
`;
