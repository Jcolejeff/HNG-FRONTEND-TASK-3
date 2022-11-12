import { Header, Footer, Navbar, Featured, CallToAction } from "../components";
import { useGlobalContext } from "../context";
const Home = () => {
	const { isModalOpen, closeModal } = useGlobalContext();
	console.log(isModalOpen);
	return (
		<main>
			<Navbar />
			<Header />
			<Featured />
			<CallToAction />
			<Footer />
		</main>
	);
};

export default Home;
