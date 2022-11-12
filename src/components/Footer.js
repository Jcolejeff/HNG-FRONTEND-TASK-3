import styled from "styled-components";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
	return (
		<Wrapper>
			<FooterContainer className="bottom">
				<article>
					<img src="/images/footer2.svg" alt="" />
					<img src="/images/footer1.svg" alt="" />
					<div>
						<FaFacebook />
						<FaInstagram />
						<FaTwitter />
					</div>
				</article>
				<article>
					<h3>Community</h3>
					<ul>
						<li>Road Map</li>
						<li>Road Map</li>
						<li>Road Map</li>
						<li>Road Map</li>
					</ul>
				</article>
				<article>
					<h3>Places</h3>
					<ul>
						<li>Road Map</li>
						<li>Road Map</li>
						<li>Road Map</li>
						<li>Road Map</li>
					</ul>
				</article>
				<article>
					<h3>About Us</h3>
					<ul>
						<li>Road Map</li>
						<li>Road Map</li>
						<li>Road Map</li>
						<li>Road Map</li>
					</ul>
				</article>
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
	ul {
		list-style: none;
	}
`;
const FooterContainer = styled.div``;
