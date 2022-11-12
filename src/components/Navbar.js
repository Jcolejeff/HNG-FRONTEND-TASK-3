import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links } from "../data";
import logo from "../images//logo/logo (2).svg";
import logo1 from "../images//logo/logo-house.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Navbar = () => {
	const [showLinks, setShowLinks] = useState(false);
	const linksContainerRef = useRef(null);
	const linksRef = useRef(null);
	const { openModal } = useGlobalContext();

	const toggleLinks = () => {
		setShowLinks(!showLinks);
	};
	useEffect(() => {
		const linksHeight = linksRef.current.getBoundingClientRect().height;
		if (showLinks) {
			linksContainerRef.current.style.height = `10rem`;
		} else {
			linksContainerRef.current.style.height = "0px";
		}
	}, [showLinks]);
	return (
		<Wrapper>
			<div className="nav-center">
				<div className="nav-header">
					<div>
						<img src={logo1} className="logo" alt="logo" />
						<img src={logo} className="logo" alt="logo" />
					</div>
					<button className="nav-toggle" onClick={toggleLinks}>
						<FaBars />
					</button>
				</div>
				<div className="links-container" ref={linksContainerRef}>
					<ul className="links" ref={linksRef}>
						{links.map((link) => {
							const { id, url, text } = link;
							return (
								<Link to={url} key={id}>
									{text}
								</Link>
							);
						})}
					</ul>
				</div>
				<button onClick={openModal} className="connect-button">
					Connect wallet
				</button>
			</div>
		</Wrapper>
	);
};

export default Navbar;
const Wrapper = styled.nav`
	background: var(--clr-white);
	box-shadow: var(--light-shadow);
	.nav-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem;
	}
	.nav-toggle {
		font-size: 1.5rem;
		color: var(--clr-primary-5);
		background: transparent;
		border-color: transparent;
		transition: var(--transition);
		cursor: pointer;
	}
	.nav-toggle:hover {
		color: var(--clr-primary-1);
		transform: rotate(90deg);
	}
	.logo {
		height: 15px;
	}
	.links a {
		color: var(--clr-grey-3);
		font-size: 1rem;
		text-transform: capitalize;
		letter-spacing: var(--spacing);
		display: block;
		padding: 0.5rem 1rem;
		transition: var(--transition);
		text-decoration: none;
	}
	.links a:hover {
		background: var(--clr-primary-8);
		color: var(--clr-primary-5);
		padding-left: 1.5rem;
	}

	.links-container {
		height: 0;
		overflow: hidden;
		transition: var(--transition);
	}
	.connect-button {
		display: none;
	}
	@media (min-width: 800px) {
		.logo {
			height: 30px;
		}
		.nav-center {
			margin: 0 auto;
			display: flex;
			align-items: center;
			justify-content: space-around;
			padding: 1rem;
		}
		.nav-header {
			padding: 0;
		}
		.nav-toggle {
			display: none;
		}
		.links-container {
			height: auto !important;
		}
		.links {
			display: flex;
			justify-content: space-between;
		}
		.links a {
			padding: 0;
			margin: 0 2rem;
		}
		.links a:hover {
			padding: 0;
			background: transparent;
		}
		.connect-button {
			/* MAJOR */
			display: block;
			background: linear-gradient(90deg, #a02279 11.45%, #a02279 11.45%);
			border-radius: 10px;
			color: white;
			padding-inline: 2rem;
			padding-block: 0.8rem;
			border: none;
			font-size: 0.8rem;
		}
	}
`;
