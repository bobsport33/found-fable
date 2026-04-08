/**
 * Button Component
 *
 * Props:
 * ─────────────────────────────────────────────────────
 * children  (node)    required  — Button label or content
 *
 * onClick   (func)    optional  — Click handler function
 *
 * disabled  (bool)    optional  — Disables the button
 *                     default: false
 *
 * type      (string)  optional  — HTML button type
 *                     default: "button"
 *                     options:  "button" | "submit" | "reset"
 *
 * variant   (string)  optional  — Visual style of the button
 *                     default: "primary"
 *                     options:  "primary"   — Filled background
 *                               "secondary" — Outlined, light fill on hover
 *                               "ghost"     — Text only, light fill on hover
 *
 * theme     (string)  optional  — Color palette for the button
 *                     default: "peach"
 *                     options:  "peach"     — Warm peach tones
 *                               "blueLight" — Soft light blue tones
 *                               "green"     — Natural green tones
 *                               "blue"      — Bold blue tones
 * ─────────────────────────────────────────────────────
 * Example:
 * <Button variant="secondary" theme="green" onClick={() => {}}>
 *   Get In Touch
 * </Button>
 */

import styles from "./Button.module.scss";

const Button = ({
	children,
	onClick,
	disabled = false,
	variant = "primary",
	theme = "peach",
	type = "button"
}) => {
	return (
		<button
			type={type}
			className={`${styles.button} ${styles[variant]} ${styles[theme]}`}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
};

export default Button;
