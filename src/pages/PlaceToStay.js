import styled from "styled-components";
import { Featured, Footer } from "../components";
import { PlaceToBeItems } from "../data";
import filterSvg from "../images/filter.svg";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
const NftPage = () => {
	const options = [
		"Restaurant",
		"Cottage",
		"Castle",
		"Fantasy city",
		"beach",
		"Carbins",
		"Off-grid",
	];
	const defaultOption = "filter";
	return (
		<Wrapper>
			<div className="Container">
				<div className="filters">
					<ul className="list">
						<li>Restaurant</li>
						<li>Cottage</li>
						<li>Castle</li>
						<li>fantasy city</li>
						<li>beach</li>
						<li>Carbins</li>
						<li>Off-grid</li>

						<li>Farm</li>
					</ul>
					<div className="sort">
						<div>Location</div>
						<img src={filterSvg} alt="" />
					</div>
				</div>
			</div>
			<section className="mobile">
				<Dropdown
					options={options}
					value={defaultOption}
					placeholder="Select an option"
				/>
				<div className="sort">
					<div>Location</div>
					<img src={filterSvg} alt="" />
				</div>
			</section>

			<Featured nftItems={PlaceToBeItems}></Featured>
			<Footer />
		</Wrapper>
	);
};

const Wrapper = styled.main`
	height: 100vh;
	padding-block: 4rem;
	.mobile {
		display: flex;
		justify-content: space-around;
	}
	.Container {
		display: none;
		width: 75%;
		margin-inline: auto;
		padding-bottom: 2rem;
	}
	.filters {
		display: grid;
		grid-template-columns: 86% 8rem;
	}
	.list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(15px, 1fr));
		list-style: none;
	}
	.sort {
		display: flex;
		align-items: center;
		border-radius: 0.5rem;
		border: 0.4px solid black;
		cursor: pointer;
		padding-inline: 0.7rem;
		padding-block: 0.3rem;
		font-size: 0.9rem;
		img {
			width: 1rem;
			margin-inline-start: 1rem;
		}
	}
	@media (min-width: 1000px) {
		.Container {
			display: block;
		}
		.mobile {
			display: none;
		}
	}
`;
export default NftPage;
