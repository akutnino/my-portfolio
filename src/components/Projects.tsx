import ResumeLink from './ResumeLink.tsx';
import ProjectItem from './ProjectItem.tsx';

import projectOneImage from '/src/assets/images/myteam-multi-page-website.jpg';
import projectTwoImage from '/src/assets/images/scoot-multi-page-website.jpg';

import styles from '../styles/Projects.module.scss';

export default function Project() {
	return (
		<section className={styles.projectSection}>
			<h1 className={styles.sectionName}>Projects</h1>
			<ResumeLink className={styles.resumeNav} />

			<ProjectItem
				projectName={'myteam Landing Page'}
				projectURL={'https://github.com/akutnino/myteam-multi-page-website'}
				projectDemoURL={'https://akutnino.github.io/myteam-multi-page-website/'}
				projectImagePath={projectOneImage}
				projectDescription={
					'A landing page for finding the right developers to build high performing apps.'
				}
				projectTools={
					<>
						<li>React</li>
						<li>React Router</li>
					</>
				}
			/>

			<ProjectItem
				projectName={'scoot Landing Page'}
				projectURL={'https://github.com/akutnino/scoot-multi-page-website'}
				projectDemoURL={''}
				projectImagePath={projectTwoImage}
				projectDescription={
					'A landing page for finding conveniently parked scooters to move around the city with ease.'
				}
				projectTools={
					<>
						<li>React</li>
						<li>React Router</li>
					</>
				}
			/>
		</section>
	);
}
