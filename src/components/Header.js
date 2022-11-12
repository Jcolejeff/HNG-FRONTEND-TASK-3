import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Header = () => {
	return (
		<>
			<HeaderWrapper>
				<section></section>
				<section></section>
			</HeaderWrapper>
		</>
	);
};
export default Header;

const HeaderWrapper = styled.section`
	display: flex;
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
