import React from "react";
import styled from "styled-components";
import Nft from "./Nft-item";

const Featured = ({ text, nftItems }) => {
	return (
		<Wrapper>
			<h1>{text}</h1>
			<div className="items-container">
				{nftItems.map((product) => {
					return <Nft key={product.id} {...product} />;
				})}
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	padding-block-end: 3rem;

	img {
		height: 210px;
	}
	h1 {
		text-align: center;
		font-size: 1.3rem;
	}

	.items-container {
		display: grid;
		gap: 2rem 1.5rem;
		justify-content: center;

		justify-items: center;
	}

	@media (min-width: 40rem) {
		h1 {
			font-size: 2.7rem;
		}
		.items-container {
			grid-template-columns: repeat(2, 250px);
		}
	}

	@media (min-width: 1170px) {
		.items-container {
			grid-template-columns: repeat(4, 250px);
		}
	}
`;

export default Featured;
