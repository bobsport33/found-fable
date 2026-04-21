// Contact.jsx
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./Contact.module.scss";
import Button from "../../components/Button/Index";

// ── Zod Schema ──
const contactSchema = z.object({
	name: z.string().min(1, "Name is required"),
	email: z
		.string()
		.min(1, "Email is required")
		.email("Please enter a valid email address"),
	phone: z.string().optional(),
	message: z.string().min(1, "Message is required"),
	karaoke: z.string().optional()
});

const Contact = () => {
	const [submitted, setSubmitted] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset
	} = useForm({
		resolver: zodResolver(contactSchema)
	});

	const onSubmit = async (data) => {
		try {
			const res = await fetch("/.netlify/functions/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(data)
			});

			if (!res.ok) {
				throw new Error("Failed to send message");
			}

			setSubmitted(true);
			reset();
		} catch (error) {
			console.error(error);
			alert("Something went wrong. Please try again.");
		}
	};

	return (
		<section className={`section ${styles.contact}`} id="contact">
			<div className={styles.contact__inner}>
				{/* ── Left: Copy ── */}
				<div className={styles.contact__copy}>
					<h2 className={styles.contact__heading}>
						Let's Work Together
					</h2>
					<p className={styles.contact__intro}>
						Building something great is always more fun with the
						right person (slash creative director slash hype squad
						slash karaoke partner) in your corner.
					</p>
					<p className={styles.contact__body}>
						Got a brand that needs a voice? Building one from
						scratch? Here's how it works: we start with a creative
						consult, I put together a plan that's custom built for
						you, then we get to work!
					</p>
					<p className={styles.contact__body}>
						Just looking to add a creative lead to your team? Send
						me details about your project and timing, and I'll be in
						touch!
					</p>
				</div>

				{/* ── Right: Form or Success ── */}
				<div className={styles.contact__formWrapper}>
					{submitted ? (
						<div className={styles.contact__successMessage}>
							<span className={styles.contact__successIcon}>
								✌️
							</span>
							<h3 className={styles.contact__successHeading}>
								Message sent!
							</h3>
							<p className={styles.contact__successBody}>
								Thanks for reaching out! I'll be in touch soon
								to start building something great together.
							</p>
							<Button
								variant="ghost"
								theme="peach"
								onClick={() => setSubmitted(false)}
							>
								Send another message
							</Button>
						</div>
					) : (
						<form
							className={styles.contact__form}
							onSubmit={handleSubmit(onSubmit)}
							noValidate
						>
							{/* Name */}
							<div className={styles.contact__field}>
								<label
									className={styles.contact__label}
									htmlFor="name"
								>
									Name{" "}
									<span className={styles.contact__required}>
										*
									</span>
								</label>
								<input
									id="name"
									type="text"
									className={`${styles.contact__input} ${errors.name ? styles["contact__input--error"] : ""}`}
									placeholder="Your name"
									{...register("name")}
								/>
								{errors.name && (
									<p className={styles.contact__errorMessage}>
										{errors.name.message}
									</p>
								)}
							</div>

							{/* Email */}
							<div className={styles.contact__field}>
								<label
									className={styles.contact__label}
									htmlFor="email"
								>
									Email{" "}
									<span className={styles.contact__required}>
										*
									</span>
								</label>
								<input
									id="email"
									type="email"
									className={`${styles.contact__input} ${errors.email ? styles["contact__input--error"] : ""}`}
									placeholder="your@email.com"
									{...register("email")}
								/>
								{errors.email && (
									<p className={styles.contact__errorMessage}>
										{errors.email.message}
									</p>
								)}
							</div>

							{/* Phone */}
							<div className={styles.contact__field}>
								<label
									className={styles.contact__label}
									htmlFor="phone"
								>
									Phone
									<span className={styles.contact__optional}>
										{" "}
										(optional)
									</span>
								</label>
								<input
									id="phone"
									type="tel"
									className={styles.contact__input}
									placeholder="Your phone number"
									{...register("phone")}
								/>
							</div>

							{/* Message */}
							<div className={styles.contact__field}>
								<label
									className={styles.contact__label}
									htmlFor="message"
								>
									What's on your mind?{" "}
									<span className={styles.contact__required}>
										*
									</span>
								</label>
								<textarea
									id="message"
									className={`${styles.contact__textarea} ${errors.message ? styles["contact__textarea--error"] : ""}`}
									placeholder="Tell me about your brand, project or idea..."
									rows={5}
									{...register("message")}
								/>
								{errors.message && (
									<p className={styles.contact__errorMessage}>
										{errors.message.message}
									</p>
								)}
							</div>

							{/* Karaoke */}
							<div className={styles.contact__field}>
								<label
									className={styles.contact__label}
									htmlFor="karaoke"
								>
									What's your favorite karaoke song?
									<span className={styles.contact__optional}>
										{" "}
										(optional)
									</span>
								</label>
								<input
									id="karaoke"
									type="text"
									className={styles.contact__input}
									placeholder="Don't be shy..."
									{...register("karaoke")}
								/>
							</div>

							{/* Submit */}
							<div className={styles.contact__submitWrapper}>
								<Button
									type="submit"
									variant="primary"
									theme="peach"
									disabled={isSubmitting}
								>
									{isSubmitting
										? "Sending..."
										: "Get in touch"}
								</Button>
							</div>
						</form>
					)}
				</div>
			</div>
		</section>
	);
};

export default Contact;
