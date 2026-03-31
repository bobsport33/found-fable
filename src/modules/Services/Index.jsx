import React from "react";
import styles from "./Services.module.scss";

const Services = ({ className }) => {
	return (
		<section
			id="services"
			className={`${styles.services} ${className ?? ""}`}
		>
			Services
		</section>
	);
};

export default Services;
