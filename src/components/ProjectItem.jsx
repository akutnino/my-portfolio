import PropTypes from 'prop-types';
import styles from '../styles/ProjectItem.module.scss';

ProjectItem.propTypes = {
	projectName: PropTypes.string,
	projectURL: PropTypes.string,
	projectImagePath: PropTypes.string,
	projectTools: PropTypes.node,
	projectDescription: PropTypes.string
};

export default function ProjectItem(props) {
	const { projectName, projectURL, projectImagePath, projectTools, projectDescription } =
		props;

	return (
		<>
			<img
				className={styles.projectImage}
				src={projectImagePath}
				alt={projectName}
				style={{ display: 'block' }}
			/>
			<div className={styles.projectDetails}>
				<h1>
					<span>{projectName}</span>
				</h1>

				<ul>
					<li>HTML</li>
					<li>CSS</li>
					<li>JavaScript</li>
					{projectTools}
				</ul>

				<p>{projectDescription}</p>

				<div className={styles.linkDiv}>
					<a
						href='http://'
						target='_blank'
						rel='noopener noreferrer'
					>
						View Project Demo
					</a>

					<a
						href={projectURL}
						target='_blank'
						rel='noopener noreferrer'
					>
						View Source Code
					</a>
				</div>
			</div>
		</>
	);
}
