import FoundFableLogo from "../../assets/svgs/LogoTest.svg?react";
import styles from "./Hero.module.scss";
import Button from "../../components/Button/Index";

const Hero = ({ className }) => {
	const handleScroll = () => {
		document.getElementById("contact").scrollIntoView();
	};
	return (
		<section id="hero" className={`${styles.hero} ${className ?? ""}`}>
			{/* Logo */}
			<div className={styles.hero__logo}>
				<FoundFableLogo />
			</div>
			{/* subtext */}
			<h2 className={styles.hero__subtitle}>
				Branding • Copywriting • Creative Direction
			</h2>
			<h3>
				Your brand has a story worth telling. Let’s find it, shape it
				and make it yours.
			</h3>
			{/* button */}
			{/* <button>Get in touch</button> */}
			<Button variant="secondary" theme="green" onClick={handleScroll}>
				Get in touch
			</Button>
		</section>
	);
};

export default Hero;
