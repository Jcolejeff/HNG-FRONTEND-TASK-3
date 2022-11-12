import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Header = () => {
	return (
		<Wrapper>
			<HeaderWrapper>
				<section className="text">
					<header>
						<h1>Rent a Place away from Home in the Metaverse</h1>
					</header>
					<p>
						we provide you access to luxury and affordable houses in the
						metaverse, get a chance to turn your imagination to reality at your
						comfort zone
					</p>
					<div>
						<input type="text" placeholder="search for location" />
						<button> search</button>
					</div>
				</section>
				<section className="hero-imgs">
					<img
						src="/images/hero-img-1.png"
						alt="hero-img"
						className="img one"
					/>
					<img
						src="/images/hero-img-1.png"
						alt="hero-img"
						className="img two"
					/>
					<img
						src="/images/hero-img-1.png"
						alt="hero-img "
						className="img three"
					/>
					<img
						src="/images/hero-img-1.png"
						alt="hero-img"
						className="img four"
					/>
				</section>
			</HeaderWrapper>
			<div>
				<h3>heloo</h3>
				<h3>heloo</h3>
				<h3>heloo</h3>
			</div>
		</Wrapper>
	);
};
export default Header;

const Wrapper = styled.section`
	div {
		width: 100%;
		display: flex;
		justify-content: space-around;
		background: var(--clr-primary);
		color: var(--clr-white);
	}
`;
const HeaderWrapper = styled.section`
	display: flex;
	margin-block-end: 10rem;
	.hero-imgs {
		display: grid;
		position: relative;
		grid-template-columns: 1fr 1fr;
		gap: 0.3rem;
		.img {
			width: 11rem;
			border-radius: 0.7rem;
		}
		.one {
			position: relative;
			top: 5rem;
		}
		.three {
			position: relative;
			top: 5rem;
		}
	}
	.text {
		h1 {
			font-style: normal;
			font-weight: 400;
			font-size: 56px;
			color: #434343;
		}
	}
`;

const CustomImage = styled(LazyLoadImage)`
	border-radius: 50%;
	width: 100px;
	height: 100px;
	margin: 5px;
	margin-block-start: 5rem;
`;

const UserNameText = styled.h4`
	color: black;
`;
