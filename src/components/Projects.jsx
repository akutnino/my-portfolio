import ProjectItem from './ProjectItem';
import ResumeLink from './ResumeLink';
import projectOneImage from '/src/assets/images/thumbnail-project-4-small.webp';
import projectTwoImage from '/src/assets/images/thumbnail-project-3-small.webp';
import projectThreeImage from '/src/assets/images/thumbnail-project-6-small.webp';
import styles from '../styles/Projects.module.scss';

export default function Project() {
	return (
		<section className={styles.projectSection}>
			<h1 className={styles.sectionName}>Projects</h1>
			<ResumeLink className={styles.resumeNav} />

			<ProjectItem
				projectName={'usePopcorn Movies'}
				projectURL={`https://github.com/akutnino/react.js-main-secondary/tree/main/07-usepopcorn/starter/usepopcorn`}
				projectDemoURL={'http://'}
				projectImagePath={projectOneImage}
				projectDescription={`Create a list of movies that you've watched and give it a rating.`}
				projectTools={<li>React</li>}
			/>

			<ProjectItem
				projectName={'React Quizlet'}
				projectURL={`https://github.com/akutnino/react.js-main-secondary/tree/main/10-react-quiz/starter/react-quiz`}
				projectDemoURL={'http://'}
				projectImagePath={projectTwoImage}
				projectDescription={`Review your React knowledge by taking this short react quiz.`}
				projectTools={<li>React</li>}
			/>

			<ProjectItem
				projectName={'WorldWise App'}
				projectURL={`https://github.com/akutnino/react.js-main-secondary/tree/main/11-worldwise/starter/worldwise`}
				projectDemoURL={'http://'}
				projectImagePath={projectThreeImage}
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
