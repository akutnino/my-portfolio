import type { ReactNode } from 'react';

import styles from '../styles/ProjectItem.module.scss';

export default function ProjectItem({
	projectName,
	projectURL,
	projectDemoURL,
	projectImagePath,
	projectTools,
	projectDescription,
}: {
	projectName: string;
	projectURL: string;
	projectDemoURL: string;
	projectImagePath: string;
	projectTools: ReactNode;
	projectDescription: string;
}) {
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
					<li>TypeScript</li>
					<li>Vite</li>
					{projectTools}
				</ul>

				<p>{projectDescription}</p>

				<div className={styles.linkDiv}>
					{projectDemoURL === '' && <a>Project In Development</a>}

					{projectDemoURL !== '' && (
						<a
							href={projectDemoURL}
							target='_blank'
							rel='noopener noreferrer'
						>
							View Project Demo
						</a>
					)}

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
