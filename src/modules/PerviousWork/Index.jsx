// PreviousWork.jsx
import styles from "./PreviousWork.module.scss";
import Button from "../../components/Button/Index";

const work = [
	{
		id: 1,
		company: "Company 1",
		pills: ["Brand Voice", "Founder Narrative", "Store Communications"],
		cta: "Meet the brand",
		link: "https://placeholder.com",
		newTab: true
	},
	{
		id: 2,
		company: "Company 2",
		pills: ["Brand Design System", "Logo", "Concept Strategy"],
		cta: "Go behind the scenes",
		link: "https://placeholder.com",
		newTab: false
	},
	{
		id: 3,
		company: "My Creative Portfolio",
		pills: ["62 Brand Voices", "Multi-Category", "Long Client List"],
		cta: "Take a deep dive",
		link: "https://placeholder.com",
		newTab: true
	}
];

const WorkItem = ({ company, pills, cta, link, newTab, index }) => {
	const isEven = index % 2 === 0;

	return (
		<div
			className={`${styles.workItem} ${isEven ? styles.even : styles.odd}`}
		>
			{/* Image / Placeholder */}
			<div className={styles.imageWrapper}>
				<div className={styles.imagePlaceholder}>
					<span className={styles.placeholderText}>{company}</span>
				</div>
			</div>

			{/* Content */}
			<div className={styles.content}>
				<h3 className={styles.company}>{company}</h3>

				{/* Pills */}
				<ul className={styles.pillList}>
					{pills.map((pill, i) => (
						<li key={i} className={styles.pill}>
							{pill}
						</li>
					))}
				</ul>

				{/* CTA */}
				<a
					href={link}
					target={newTab ? "_blank" : "_self"}
					rel={newTab ? "noreferrer noopener" : undefined}
					className={styles.ctaLink}
				>
					<Button variant="secondary" theme="peach">
						{cta} →
					</Button>
				</a>
			</div>
		</div>
	);
};

const PreviousWork = () => {
	return (
		<section className={`section ${styles.previousWork}`}>
			{/* Header */}
			<div className={styles.header}>
				<h2 className={styles.heading}>Previous Work</h2>
			</div>

			{/* Work Items */}
			<div className={styles.workList}>
				{work.map((item, index) => (
					<WorkItem key={item.id} {...item} index={index} />
				))}
			</div>
		</section>
	);
};

export default PreviousWork;
