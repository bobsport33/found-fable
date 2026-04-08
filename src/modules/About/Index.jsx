import styles from "./About.module.scss";

const steps = [
	{
		id: 1,
		title: "Found.",
		description: `I dig into your brand and unearth the story that's already there.`
	},
	{
		id: 2,
		title: "Shaped.",
		description:
			"I craft it into something clear, compelling and unmistakably yours."
	},
	{
		id: 3,
		title: "Told.",
		description: "We put it out into the world and make some noise."
	}
];

const About = ({ className }) => {
	return (
		<section id="Contact" className={`${styles.about} ${className ?? ""}`}>
			<div className={styles.inner}>
				{/* Left — Text Content */}
				<div className={styles.content}>
					<h2 className={styles.heading}>Working With Found Fable</h2>

					<p className={styles.intro}>
						Hi, I'm Anastasia! ✌️ The Founder and Creative Director
						behind Found Fable. After many years in the agency
						world, I've seen great brand stories get lost somewhere
						between a boss, their boss's boss and the deck that
						nobody reads. Found Fable is my answer to that: a studio
						where the story actually comes first, and everything
						else gets built around it.
					</p>

					<p className={styles.stepsLabel}>
						Here's a peek into my storytelling process:
					</p>

					<ol className={styles.stepsList}>
						{steps.map((step) => (
							<li key={step.id} className={styles.step}>
								<span className={styles.stepTitle}>
									{step.title}
								</span>
								<span className={styles.stepDescription}>
									{step.description}
								</span>
							</li>
						))}
					</ol>
				</div>

				{/* Right — Headshot */}
				<div className={styles.imageWrapper}>
					<div className={styles.imagePlaceholder}>
						<span className={styles.placeholderText}>
							Anastasia
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
