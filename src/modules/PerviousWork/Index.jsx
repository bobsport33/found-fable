import React from "react";
import styles from "./PreviousWork.module.scss";

const PreviousWork = ({ className }) => {
	return (
		<section
			id="prev"
			className={`${styles.prev} ${className ?? ""}`}
		></section>
	);
};

export default PreviousWork;
