import styled from "styled-components";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
	return (
		<Wrapper>
			<FooterContainer className="bottom">
				<article className="logo">
					<div className="images">
						<img src="/images/meta-white.png" alt="" />
					</div>

					<div>
						<FaFacebook />
						<FaInstagram />
						<FaTwitter />
					</div>
				</article>

				<section>
					<article>
						<ul>
							<h3>Community</h3>
							<li>Road Map</li>
							<li>Road Map</li>
							<li>Road Map</li>
							<li>Road Map</li>
						</ul>
					</article>
					<article>
						<ul>
							<h3>Places</h3>
							<li>Road Map</li>
							<li>Road Map</li>
							<li>Road Map</li>
							<li>Road Map</li>
						</ul>
					</article>
					<article>
						<ul>
							<h3>About Us</h3>
							<li>Road Map</li>
							<li>Road Map</li>
							<li>Road Map</li>
							<li>Road Map</li>
						</ul>
					</article>
				</section>
			</FooterContainer>
			<p>&copy; 2022 Metabnb</p>
		</Wrapper>
	);
};

export default Footer;

const Wrapper = styled.footer`
	background-color: black;
	color: white;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	.logo {
		text-align: center;

		div {
			display: flex;
			justify-content: space-evenly;
			margin-block: 1rem;
		}
	}
	article {
	}
	ul {
		list-style: none;
	}
	@media (min-width: 40rem) {
		align-items: flex-start;
	}
`;
const FooterContainer = styled.div`
	display: flex;
	flex-direction: column;

	section {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-column-gap: 4rem;
	}
	@media (min-width: 40rem) {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		gap: 15rem;
		section {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			grid-column-gap: 15rem;
		}
	}
`;
