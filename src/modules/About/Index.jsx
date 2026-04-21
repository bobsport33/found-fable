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
			<div className={styles.about__inner}>
				{/* Left — Text Content */}
				<div className={styles.about__content}>
					<div className={styles.about__headingBlock}>
						<span className={styles.about__kicker} />
						<h2 className={styles.about__heading}>
							Working With Found Fable
						</h2>
					</div>
					<p className={styles.about__intro}>
						Hi, I'm Anastasia! ✌️ The Founder and Creative Director
						behind Found Fable. After many years in the agency
						world, I've seen great brand stories get lost somewhere
						between a boss, their boss's boss and the deck that
						nobody reads. Found Fable is my answer to that: a studio
						where the story actually comes first, and everything
						else gets built around it.
					</p>
					<p className={styles.about__stepsLabel}>
						Here's a peek into my storytelling process:
					</p>
					{/* Steps — horizontal trio */}
					<div className={styles.about__stepsList}>
						{steps.map((step) => (
							<div key={step.id} className={styles.about__step}>
								<span className={styles.about__stepAccent} />
								<span className={styles.about__stepTitle}>
									{step.title}
								</span>
								<span className={styles.about__stepDescription}>
									{step.description}
								</span>
							</div>
						))}
					</div>
				</div>
				{/* Right — Headshot */}
				<div className={styles.about__imageWrapper}>
					<img
						src="/headshot.png"
						alt="Anastasia, Founder and Creative Director of Found Fable"
						className={styles.about__image}
					/>
				</div>
			</div>
		</section>
	);
};

export default About;
