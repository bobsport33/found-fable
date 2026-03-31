import React from "react";
import styles from "./Contact.module.scss";

const Contact = ({ className }) => {
	return (
		<section
			id="Contact"
			className={`${styles.contact} ${className ?? ""}`}
		></section>
	);
};

export default Contact;
