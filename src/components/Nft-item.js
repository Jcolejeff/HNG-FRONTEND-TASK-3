import React from "react";
import styled from "styled-components";
const Nft = ({ image, price, location, name, available }) => {
	return (
		<Wrapper>
			<div>
				<img src={image} alt="" />
			</div>

			<section>
				<p>{name}</p>
				<p>{price}</p>
				<p>{location}</p>
				<p>{available}</p>
			</section>
			<span>44</span>
		</Wrapper>
	);
};

export default Nft;
const Wrapper = styled.div`
	width: 13rem;

	img {
		width: 100%;
		height: auto;
		object-fit: cover;
		height: 13rem;
		border-radius: 1rem;
	}
	section {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0rem;
		font-size: 0.8rem;

		p {
			margin: 0;
			margin-block-end: 0.6rem;
		}
	}
`;
