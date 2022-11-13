import React from "react";
import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";
import Stars from "./Stars";
const Nft = ({ image, price, location, name, available }) => {
	return (
		<Wrapper>
			<div className="container">
				<img src={image} alt={name} />
			</div>
			<div className="heart">
				<AiFillHeart />
			</div>
			<footer>
				<div>
					<h5>{name}</h5>
					<h5>{location}</h5>
				</div>
				<div>
					<p>{price}</p>

					<h5>{available}</h5>
				</div>
			</footer>
			<Stars />
		</Wrapper>
	);
};

const Wrapper = styled.article`
	padding: 1rem;
	padding-block-end: 0.4rem;
	border-radius: 1rem;
	border: 1px solid #d7d7d7;
	position: relative;
	.heart {
		position: absolute;
		top: 8%;
		right: 10%;
		svg {
			font-size: 1.25rem;
			color: #d7d7d7;
		}
	}

	.container {
		position: relative;
		background: var(--clr-black);
		border-radius: 1rem;
	}
	img {
		width: 100%;
		display: block;
		object-fit: cover;
		border-radius: 0.8rem;
		transition: var(--transition);
	}

	footer {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		margin-block-end: 0.5rem;
	}
	footer h5,
	footer p {
		margin-bottom: 0;
		font-weight: 600;
		font-size: 0.6rem;
	}

	footer p {
		margin-inline-start: 2rem;
	}
`;
export default Nft;
