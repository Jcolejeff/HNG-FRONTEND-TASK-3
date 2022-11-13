import { Header, Footer, Featured, CallToAction } from "../components";
import { nftItems } from "../data";

const Home = () => {
	return (
		<main>
			<Header />
			<Featured
				text="Inspiration for your next adventure"
				nftItems={nftItems}
			/>
			<CallToAction />

			<Footer />
		</main>
	);
};

export default Home;
