import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../styles/ResumeLink.module.scss';

ResumeLink.propTypes = {
	className: PropTypes.string
};

export default function ResumeLink(props) {
	const { className } = props;

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
