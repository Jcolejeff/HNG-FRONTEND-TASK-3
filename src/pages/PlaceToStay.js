import styled from "styled-components";
import { Featured, Footer } from "../components";
import { PlaceToBeItems } from "../data";
const NftPage = () => {
	return (
		<Wrapper>
			<Featured nftItems={PlaceToBeItems}></Featured>
			<Footer />
		</Wrapper>
	);
};

const Wrapper = styled.main`
	height: 100vh;
	padding-block: 2rem;
`;
export default NftPage;
