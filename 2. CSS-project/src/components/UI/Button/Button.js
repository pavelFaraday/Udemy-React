import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
	return (
		<>
			<button
				type={props.type}
				className={styles.button}
				onClick={props.onClick}
			>
				{props.children}
			</button>
			<h2 className={styles.traw}>Hello</h2>
		</>
	);
};

export default Button;
