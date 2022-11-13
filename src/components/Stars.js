import React from "react";
import styled from "styled-components";
import { BsStarFill } from "react-icons/bs";
const Stars = () => {
	const tempStars = Array.from({ length: 5 }, (_, index) => {
		return (
			<span key={index}>
				<BsStarFill />
			</span>
		);
	});
	return (
		<Wrapper>
			<div className="stars">{tempStars}</div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	span {
		color: #a02279;
		font-size: 0.5rem;
		margin-right: 0.4rem;
	}
	p {
		margin-left: 0.5rem;
		margin-bottom: 0;
	}
	margin-bottom: 0.5rem;
`;
export default Stars;
