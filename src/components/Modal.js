import React from "react";
import { useGlobalContext } from "../context";
import { FaTimes } from "react-icons/fa";
import { MdOutlineNavigateNext } from "react-icons/md";
import styled from "styled-components";

const Modal = () => {
	const { isModalOpen, closeModal } = useGlobalContext();
	return (
		<Wrapper>
			<div
				className={`${
					isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
				}`}
			>
				<div className="modal-container">
					<div className="header">
						<h3>Connect Wallet</h3>
						<button className="close-modal-btn" onClick={closeModal}>
							<FaTimes></FaTimes>
						</button>
					</div>

					<hr />
					<section>
						<p>Choose your preferred wallet:</p>
						<div className="container">
							<div className="icon">
								<span>
									<img src="images/metamask-icon.png" alt="" />
								</span>
								<span>
									<h3>Metamask</h3>
								</span>
							</div>
							<MdOutlineNavigateNext />
						</div>
						<div className="container">
							<div className="icon">
								<span>
									<img src="/images/walletconnect-icon.png" alt="" />
								</span>
								<span>
									<h3>WalletConnect</h3>
								</span>
							</div>
							<MdOutlineNavigateNext />
						</div>
					</section>
				</div>
			</div>
		</Wrapper>
	);
};

export default Modal;
const Wrapper = styled.main`
	.modal-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		display: grid;
		place-items: center;

		visibility: hidden;
		z-index: -1;
	}
	/* OPEN/CLOSE MODAL */
	.show-modal {
		visibility: visible;
		z-index: 10;
	}
	.modal-container {
		background: var(--clr-white);
		border-radius: 1rem;
		width: 90vw;

		max-width: var(--fixed-width);

		position: relative;
		.header {
			display: flex;
			padding-inline: 1rem;
			justify-content: space-between;
		}
		section {
			padding: 1rem;
			.container {
				display: flex;
				align-items: center;
				padding-inline: 1rem;
				justify-content: space-between;
				width: 90%;
				background: #f8f9fa;
				/* DTC Mid Gray */
				margin-block-end: 1rem;
				border: 1px solid #cfd8dc;
				border-radius: 12px;
			}
			svg {
				font-size: 2rem;
			}
			.icon {
				display: flex;
				align-items: center;
				span {
					margin-inline-end: 1rem;
				}
			}
		}
	}
	.close-modal-btn {
		font-size: 1rem;
		background: transparent;
		border-color: transparent;
		color: black;
		cursor: pointer;
	}
`;
