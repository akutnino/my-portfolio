import PropTypes from 'prop-types';
import styles from '../styles/ProjectItem.module.scss';

ProjectItem.propTypes = {
	projectName: PropTypes.string,
	projectImagePath: PropTypes.string,
	children: PropTypes.node
};

export default function ProjectItem(props) {
	const { projectName, projectImagePath, children } = props;

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
					{children}
				</ul>
				<a
					href='http://'
					target='_blank'
					rel='noopener noreferrer'
				>
					View Project Demo
				</a>
				<a
					href='http://'
					target='_blank'
					rel='noopener noreferrer'
				>
					View Source Code
				</a>
			</div>
		</>
	);
}
