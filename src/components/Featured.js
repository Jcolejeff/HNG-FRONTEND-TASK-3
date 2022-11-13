import React from "react";
import styled from "styled-components";
import { nftItems } from "../data";
import Nft from "./Nft-item";

const GridView = () => {
	return (
		<Wrapper>
			<h1>Inspiration for your next adventure</h1>
			<div className="items-container">
				{nftItems.map((product) => {
					return <Nft key={product.id} {...product} />;
				})}
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	padding: 1rem;

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
			font-size: 3rem;
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

export default GridView;
