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
		// TODO: wire up to EmailJS, Formspree or custom endpoint
		console.log("Form data:", data);

		// Simulate a short delay for now
		// await new Promise((resolve) => setTimeout(resolve, 800));

		setSubmitted(true);
		reset();
	};

	return (
		<section className={`section ${styles.contact}`} id="contact">
			<div className={styles.inner}>
				{/* ── Left: Copy ── */}
				<div className={styles.copy}>
					<h2 className={styles.heading}>Let's Work Together</h2>
					<p className={styles.intro}>
						Building something great is always more fun with the
						right person (slash creative director slash hype squad
						slash karaoke partner) in your corner.
					</p>
					<p className={styles.body}>
						Got a brand that needs a voice? Building one from
						scratch? Here's how it works: we start with a creative
						consult, I put together a plan that's custom built for
						you, then we get to work!
					</p>
					<p className={styles.body}>
						Looking to add a creative lead to your team? Just get in
						touch and we'll figure out the details.
					</p>
				</div>

				{/* ── Right: Form or Success ── */}
				<div className={styles.formWrapper}>
					{submitted ? (
						<div className={styles.successMessage}>
							<span className={styles.successIcon}>✌️</span>
							<h3 className={styles.successHeading}>
								Message sent!
							</h3>
							<p className={styles.successBody}>
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
							className={styles.form}
							onSubmit={handleSubmit(onSubmit)}
							noValidate
						>
							{/* Name */}
							<div className={styles.field}>
								<label className={styles.label} htmlFor="name">
									Name{" "}
									<span className={styles.required}>*</span>
								</label>
								<input
									id="name"
									type="text"
									className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
									placeholder="Your name"
									{...register("name")}
								/>
								{errors.name && (
									<p className={styles.errorMessage}>
										{errors.name.message}
									</p>
								)}
							</div>

							{/* Email */}
							<div className={styles.field}>
								<label className={styles.label} htmlFor="email">
									Email{" "}
									<span className={styles.required}>*</span>
								</label>
								<input
									id="email"
									type="email"
									className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
									placeholder="your@email.com"
									{...register("email")}
								/>
								{errors.email && (
									<p className={styles.errorMessage}>
										{errors.email.message}
									</p>
								)}
							</div>

							{/* Phone */}
							<div className={styles.field}>
								<label className={styles.label} htmlFor="phone">
									Phone
									<span className={styles.optional}>
										{" "}
										(optional)
									</span>
								</label>
								<input
									id="phone"
									type="tel"
									className={styles.input}
									placeholder="Your phone number"
									{...register("phone")}
								/>
							</div>

							{/* Message */}
							<div className={styles.field}>
								<label
									className={styles.label}
									htmlFor="message"
								>
									What's on your mind?{" "}
									<span className={styles.required}>*</span>
								</label>
								<textarea
									id="message"
									className={`${styles.textarea} ${errors.message ? styles.inputError : ""}`}
									placeholder="Tell me about your brand, project or idea..."
									rows={5}
									{...register("message")}
								/>
								{errors.message && (
									<p className={styles.errorMessage}>
										{errors.message.message}
									</p>
								)}
							</div>

							{/* Karaoke */}
							<div className={styles.field}>
								<label
									className={styles.label}
									htmlFor="karaoke"
								>
									What's your favorite karaoke song?
									<span className={styles.optional}>
										{" "}
										(optional)
									</span>
								</label>
								<input
									id="karaoke"
									type="text"
									className={styles.input}
									placeholder="Don't be shy..."
									{...register("karaoke")}
								/>
							</div>

							{/* Submit */}
							<div className={styles.submitWrapper}>
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
