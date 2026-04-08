// PreviousWork.jsx
import styles from "./PreviousWork.module.scss";
import Button from "../../components/Button/Index";

const work = [
	{
		id: 1,
		company: "Primary Source Brooklyn",
		pills: ["Brand Voice", "Founder Narrative", "Store Communications"],
		cta: "Meet the brand",
		link: "https://primarysource.nyc/?srsltid=AfmBOorsTK3ddviQa5KgbugYl3ASuesNDW7eWC2yvc9DT8C4Hsu8V3pJ",
		newTab: true
	},
	{
		id: 2,
		company: "DeMasi Strength & Conditioning",
		pills: ["Brand Design System", "Logo", "Concept Strategy"],
		cta: "Go behind the scenes",
		link: "https://placeholder.com",
		newTab: false
	},
	{
		id: 3,
		company: "My Creative Portfolio",
		pills: [],
		clientList: {
			headline: "62 brand voices and counting.",
			clients: [
				"Nordstrom",
				"Harley-Davidson",
				"City of Chicago Public Health",
				"McDonald’s",
				"Converse",
				"Nicklaus Children's Hospital",
				"TransUnion",
				"Walgreens",
				"Penn National Gaming",
				"and more."
			]
		},
		cta: "Take a deep dive",
		link: "https://www.anastasiaguletsky.com/",
		newTab: true
	}
];

const WorkItem = ({ company, pills, clientList, cta, link, newTab, index }) => {
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

				{/* Pills — only renders if pills exist */}
				{pills && pills.length > 0 && (
					<ul className={styles.pillList}>
						{pills.map((pill, i) => (
							<li key={i} className={styles.pill}>
								{pill}
							</li>
						))}
					</ul>
				)}

				{/* Client List — only renders if clientList exists */}
				{clientList && (
					<div className={styles.clientList}>
						<p className={styles.clientHeadline}>
							{clientList.headline}
						</p>
						<p className={styles.clients}>
							{clientList.clients.map((client, i) => (
								<span key={i}>
									{client}
									{i < clientList.clients.length - 1 && (
										<span className={styles.separator}>
											,{" "}
										</span>
									)}
								</span>
							))}
						</p>
					</div>
				)}

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
