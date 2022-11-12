import { Header, Footer, Navbar } from "../components";
import { useGlobalContext } from "../context";
const Home = () => {
	const { isModalOpen, closeModal } = useGlobalContext();
	console.log(isModalOpen);
	return (
		<main>
			<Navbar />
		</main>
	);
};

export default Home;
