import "./App.css";

import AnimatedBackground from "./components/AnimatedBackground/Index";
import Contact from "./modules/Contact/Index";
import Footer from "./modules/Footer/Index";
import Hero from "./modules/Hero/Index";
import PreviousWork from "./modules/PerviousWork/Index";
import Services from "./modules/Services/Index";

function App() {
	return (
		<div>
			<AnimatedBackground />
			<Hero className="section" />
			<Services className="section" />
			<PreviousWork className="section" />
			<Contact className="section" />
			<Footer />
		</div>
	);
}

export default App;
