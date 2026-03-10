import { Link } from 'react-router';

import styles from '../styles/ResumeLink.module.scss';

export default function ResumeLink({ className }: { className: string }) {
	return (
		<nav className={className}>
			<Link
				to={'/resume'}
				className={styles.resume}
			>
				Check My Resume
			</Link>
		</nav>
	);
}
