import styles from '../styles/Projects.module.scss';
import ProjectItem from './ProjectItem';
import ResumeLink from './ResumeLink';

export default function Project() {
	return (
		<section className={styles.projectSection}>
			<h1 className={styles.sectionName}>Projects</h1>
			<ResumeLink className={styles.resumeNav} />

			<ProjectItem
				projectName={'usePopcorn Movies'}
				projectImagePath={'/src/assets/images/thumbnail-project-4-small.webp'}
				projectDescription={`Create a list of movies that you've watched and give it a rating.`}
				projectTools={<li>React</li>}
			/>

			<ProjectItem
				projectName={'React Quizlet'}
				projectImagePath={'/src/assets/images/thumbnail-project-3-small.webp'}
				projectDescription={`Review your React knowledge by taking this short react quiz.`}
				projectTools={<li>React</li>}
			/>

			<ProjectItem
				projectName={'WorldWise App'}
				projectImagePath={'/src/assets/images/thumbnail-project-6-small.webp'}
				projectDescription={`Create a list of places that you've visited and create a note about your experience.`}
				projectTools={
					<>
						<li>Sass</li>
						<li>React</li>
						<li>React Router</li>
					</>
				}
			/>
		</section>
	);
}
