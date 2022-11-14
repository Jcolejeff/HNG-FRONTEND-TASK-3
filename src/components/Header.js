import styled from "styled-components";
import heroImage from "../images/hero image.png";
import mbTonkenImg from "../images/mbToken.svg";
import openseaImg from "../images/opensea.svg";
import metamaskImg from "../images/metamask.svg";

const Header = () => {
	return (
		<Wrapper>
			<HeaderWrapper>
				<section className="text">
					<header>
						<h1>
							Rent a <span className="pink-text"> Place</span> away from{" "}
							<span className="pink-text">Home</span> in the{" "}
							<span className="pink-text"> Metaverse</span>
						</h1>
					</header>
					<p>
						we provide you access to luxury and affordable houses in the
						metaverse, get a chance to turn your imagination to reality at your
						comfort zone
					</p>
					<div className="input">
						<input type="text" placeholder="search for location" />
						<button> Search</button>
					</div>
				</section>
				<section className="hero-img">
					<img src={heroImage} alt="hero-img" />
				</section>
			</HeaderWrapper>
			<div className="banner">
				<img src={mbTonkenImg} alt="icon-mbtoken" />
				<img src={metamaskImg} alt="icon-metamask" />
				<img src={openseaImg} alt="icon-opensea" />
			</div>
		</Wrapper>
	);
};
export default Header;

const Wrapper = styled.section`
	padding-block: 2rem;
	.banner {
		display: flex;
		justify-content: space-around;
		background: var(--clr-primary);
		color: var(--clr-white);

		@media (max-width: 40rem) {
			img {
				width: 6.5rem;
			}
		}
	}
`;

const HeaderWrapper = styled.section`
	display: grid;
	grid-template-columns: 1fr;
	width: 80%;
	margin-inline: auto;
	.hero-img {
		margin-block-end: 2rem;

		width: 18rem;
		img {
			width: 100%;
			display: block;
			object-fit: cover;
		}
	}

	.text {
		width: 90%;
		h1 {
			font-style: normal;
			font-weight: 400;
			font-size: 1.7rem;
			color: #434343;
		}
		p {
			font-weight: 400;
			line-height: 1.5;
			font-size: 1rem;
		}
	}
	.pink-text {
		color: #a02279;
		font-weight: 600;
	}
	.input {
		display: grid;
		grid-template-columns: 60% 1fr;
		margin-block: 2rem;
		input {
			border-top-left-radius: 0.3rem;
			border-bottom-left-radius: 0.3rem;
			padding: 0.4rem;
			border: 1px solid #a3a3a3;
		}
		button {
			background: linear-gradient(90deg, #a02279 11.45%, #a02279 11.46%);
			border: none;
			color: var(--clr-white);
			padding: 0.6rem;
			border-top-right-radius: 0.5rem;
			border-bottom-right-radius: 0.5rem;
		}
	}
	@media (min-width: 40rem) {
		grid-template-columns: 1fr 1fr;
		padding: 2rem;

		.hero-img {
			width: 30rem;
			img {
				width: 100%;
				display: block;
				object-fit: cover;
			}
		}
		.text {
			align-self: center;
			width: 90%;
			h1 {
				font-size: 2.6rem;
				color: #434343;
			}
			p {
				font-weight: 400;
				line-height: 1.5;
				font-size: 1.3rem;
				margin-block: 3rem;
			}
		}
		.input {
			input {
				padding: 1rem;
			}
		}
	}
`;
