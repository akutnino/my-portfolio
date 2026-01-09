import styles from '../styles/TechStack.module.scss';
import TechStackItem from './TechStackItems';

export default function TechStack() {
	return (
		<section className={styles.techStackSection}>
			<TechStackItem
				technologyName={'HTML'}
				yearsOfExperience={4}
			/>
			<TechStackItem
				technologyName={'CSS'}
				yearsOfExperience={4}
			/>
			<TechStackItem
				technologyName={'JavaScript'}
				yearsOfExperience={3}
			/>
			<TechStackItem
				technologyName={'TypeScript'}
				yearsOfExperience={2}
			/>
			<TechStackItem
				technologyName={'React'}
				yearsOfExperience={2}
			/>
			<TechStackItem
				technologyName={'Sass'}
				yearsOfExperience={2}
			/>
		</section>
	);
}
