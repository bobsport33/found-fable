import styles from "./Services.module.scss";

const services = [
	{
		id: 1,
		title: "Brand Creative",
		subtitle:
			"You build what you love. For some people that’s Legos and fantasy football teams.* But for me, it’s all about building brand storylines that make people feel like they belong.",
		footnote:
			"*I’m much better at naming the teams than I ever was at the football part.",
		items: [
			"Campaign concepts",
			"Tone and voice guidelines",
			"Brand identity evolution",
			"Event themes and creative suite",
			"Product launch strategy"
		]
	},
	{
		id: 2,
		title: "Copywriting & Editorial",
		subtitle:
			"My bread and butter. Fourteen years of writing for the biggest brands across every category means I can find the right words fast and make them work hard.",
		footnote: null,
		items: [
			"Web copy and content",
			"TV, video, radio and podcast scripts",
			"Email and social campaigns",
			"Tagline and headline suites",
			"Professional article or blog writing",
			"Event communications"
		]
	},
	{
		id: 3,
		title: "Extras",
		subtitle:
			"My Mary Poppins bag of tricks: unexpected skills I've picked up along the way and genuinely love putting to use.",
		footnote: null,
		items: [
			"Website redesigns (a joint venture with my partner!)",
			"Digital content strategy",
			"Ghostwriting",
			"Onboarding and training materials",
			"Event planning and design"
		]
	}
];

const ServiceCard = ({ title, subtitle, footnote, items }) => (
	<div className={styles.card}>
		<h3 className={styles.cardTitle}>{title}</h3>
		<p className={styles.cardSubtitle}>{subtitle}</p>
		<ul className={styles.itemList}>
			{items.map((item, index) => (
				<li key={index} className={styles.item}>
					{item}
				</li>
			))}
		</ul>
		{footnote && <p className={styles.footnote}>{footnote}</p>}
	</div>
);

const Services = ({ className }) => {
	return (
		<section
			id="services"
			className={`${styles.services} ${className ?? ""}`}
		>
			{/* Single connected wrapper */}
			<div className={styles.panel}>
				{/* Header */}
				<div className={styles.header}>
					<h2 className={styles.heading}>Creative Services</h2>
					<p className={styles.intro}>
						New business getting started from scratch? Or company
						needing a creative lead on contract? Tap me in. Here's
						what I can do for you:
					</p>
				</div>

				{/* Service Cards */}
				<div className={styles.grid}>
					{services.map((service) => (
						<ServiceCard key={service.id} {...service} />
					))}
				</div>

				{/* Footer Line */}
				<div className={styles.footer}>
					<p className={styles.footerText}>
						Don't see what you need? I'm good at a lot of things not
						listed here (non-profit comms guides, UX template
						strategy, demystifying marketing buzzwords, correcting
						apostrophe misuse in restaurant menus, Star Wars
						trivia).{" "}
						<a className={styles.highlight} href="#contact">
							Let's talk through it.
						</a>
					</p>
				</div>
			</div>
		</section>
	);
};

export default Services;
