import React from "react";
import styled from "styled-components";
import { nftItems } from "../data";
import Nft from "./Nft-item";
const Featured = () => {
	return (
		<Wrapper>
			<h2>Inspiration for your next adventure</h2>
			<article>
				{nftItems.map((item) => {
					return <Nft {...item} />;
				})}
			</article>
		</Wrapper>
	);
};

export default Featured;

const Wrapper = styled.article`
	h2 {
		text-align: center;
	}
	article {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		justify-items: center;
	}
`;
