import styles from '../styles/TechStackItem.module.scss';

export default function TechStackItem({
	technologyName,
	yearsOfExperience,
}: {
	technologyName: string;
	yearsOfExperience: number;
}) {
	return (
		<div className={styles.techStackItemDiv}>
			<h1>{technologyName}</h1>
			<p>
				{yearsOfExperience === 1
					? `< ${yearsOfExperience} Year Experience`
					: `${yearsOfExperience} Years Experience`}
			</p>
		</div>
	);
}
