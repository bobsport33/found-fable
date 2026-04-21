// PreviousWork.jsx
import styles from "./PreviousWork.module.scss";
import Button from "../../components/Button/Index";

const work = [
	{
		id: 1,
		image: "/Primary_source.png",
		company: "Primary Source Brooklyn",
		pills: ["Brand Voice", "Founder Narrative", "Store Communications"],
		cta: "Meet the brand",
		link: "https://primarysource.nyc/...",
		newTab: true
	},
	{
		id: 2,
		image: "/DeMasiStrength.png",
		company: "DeMasi Strength & Conditioning",
		pills: ["Brand Design System", "Logo", "Concept Strategy"],
		cta: "Go behind the scenes",
		link: "/DeMasiBrandPallete.png",
		newTab: true
	},
	{
		id: 3,
		image: "/portfolio.png",
		company: "My Creative Portfolio",
		pills: [],
		clientList: {
			headline: "62 brand voices and counting.",
			clients: [
				"Nordstrom",
				"Harley-Davidson",
				"City of Chicago Public Health",
				"McDonald's",
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

const WorkItem = ({
	company,
	image,
	pills,
	clientList,
	cta,
	link,
	newTab,
	index
}) => {
	const isEven = index % 2 === 0;

	return (
		<div
			className={`${styles["work-item"]} ${isEven ? styles["work-item--even"] : styles["work-item--odd"]}`}
		>
			{/* Image */}
			<div className={styles["work-item__imageWrapper"]}>
				<img
					className={styles["work-item__image"]}
					src={image}
					alt={company}
				/>
			</div>

			{/* Content */}
			<div className={styles["work-item__content"]}>
				<h3 className={styles["work-item__company"]}>{company}</h3>

				{/* Pills */}
				{pills && pills.length > 0 && (
					<ul className={styles["work-item__pillList"]}>
						{pills.map((pill, i) => (
							<li key={i} className={styles["work-item__pill"]}>
								{pill}
							</li>
						))}
					</ul>
				)}

				{/* Client List */}
				{clientList && (
					<div className={styles["work-item__clientList"]}>
						<p className={styles["work-item__clientHeadline"]}>
							{clientList.headline}
						</p>
						<p className={styles["work-item__clients"]}>
							{clientList.clients.map((client, i) => (
								<span key={i}>
									{client}
									{i < clientList.clients.length - 1 && (
										<span
											className={
												styles["work-item__separator"]
											}
										>
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
					className={styles["work-item__ctaLink"]}
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
		<section className={`section ${styles["previous-work"]}`}>
			{/* Header */}
			<div className={styles["previous-work__header"]}>
				<h2 className={styles["previous-work__heading"]}>
					Previous Work
				</h2>
			</div>

			{/* Work Items */}
			<div className={styles["previous-work__workList"]}>
				{work.map((item, index) => (
					<WorkItem key={item.id} {...item} index={index} />
				))}
			</div>
		</section>
	);
};

export default PreviousWork;
