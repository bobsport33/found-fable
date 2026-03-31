import React from "react";
import FoundFableLogo from "../../assets/svgs/LogoTest.svg?react";
import styles from "./Hero.module.scss";

const Hero = ({ className }) => {
	return (
		<section id="hero" className={`${styles.hero} ${className ?? ""}`}>
			{/* Logo */}
			<div className={styles.hero__logo}>
				<FoundFableLogo />
			</div>
			{/* subtext */}
			<h2 className={styles.hero__subtitle}>
				Branding _Copywriting_ Creative Direction
			</h2>
			<h3>
				Your brand has a story worth telling. I'll help you find it,
				shape it and make it yours.
			</h3>
			{/* button */}
			<button>Get in touch</button>
		</section>
	);
};

export default Hero;
