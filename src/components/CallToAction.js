import React from "react";
import styled from "styled-components";
const CallToAction = () => {
	return (
		<Wrapper>
			<section className="text">
				<h1>Metabnb NFTs</h1>
				<p>
					Discover our NFT gift cards collection. Loyal customers gets amazing
					gift cards which are traded as NFTs. These NFTs gives our cutomer
					access to loads of our exclusive services.
				</p>
				<button>Learn More</button>
			</section>
			<section className="images">
				<img src="/images/hero-img-1.png" alt="" className="image image1" />
				<img src="/images/hero-img-1.png" alt="" className="image image1" />
				<img src="/images/hero-img-1.png" alt="" className="image image1" />
			</section>
		</Wrapper>
	);
};

export default CallToAction;
const Wrapper = styled.article`
	min-height: 95vh;
	background: var(--clr-primary);
	color: var(--clr-white);
	.text {
		button {
			color: #a02279;
			border: none;
		}
	}

	.images {
		width: 14rem;
		position: relative;
	}
	.image {
		width: 100%;
		height: auto;
		object-fit: cover;
		height: 13rem;
		border-radius: 1rem;
	}
`;
