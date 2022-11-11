import { Header, Footer } from "../components";
import { useGlobalContext } from "../context";
const Home = () => {
	const { isModalOpen, closeModal } = useGlobalContext();
	console.log(isModalOpen);
	return (
		<>
			<Header />
			<Footer />
		</>
	);
};

export default Home;
