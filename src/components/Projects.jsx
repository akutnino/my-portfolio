import styles from '../styles/Projects.module.scss';
import ProjectItem from './ProjectItem';
import ResumeLink from './ResumeLink';

export default function Project() {
	return (
		<section className={styles.projectSection}>
			<h1 className={styles.sectionName}>Projects</h1>
			<ResumeLink />

			<ProjectItem
				projectName={'usePopcorn Movies'}
				projectImagePath={'/src/assets/images/thumbnail-project-1-small.webp'}
			>
				<li>React</li>
			</ProjectItem>

			<ProjectItem
				projectName={'React Quizzer'}
				projectImagePath={'/src/assets/images/thumbnail-project-1-small.webp'}
			>
				<li>React</li>
			</ProjectItem>

			<ProjectItem
				projectName={'WorldWise App'}
				projectImagePath={'/src/assets/images/thumbnail-project-1-small.webp'}
			>
				<li>React</li>
				<li>React Router</li>
				<li>Sass</li>
			</ProjectItem>
		</section>
	);
}
