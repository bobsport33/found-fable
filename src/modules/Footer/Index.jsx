import styles from "./Footer.module.scss";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className={styles.footer}>
			©{currentYear} Found Fable LLC
		</footer>
	);
};

export default Footer;
