import PropTypes from 'prop-types';
import styles from '../styles/TechStackItem.module.scss';

TechStackItem.propTypes = {
	technologyName: PropTypes.string,
	yearsOfExperience: PropTypes.number
};

export default function TechStackItem(props) {
	const { technologyName, yearsOfExperience } = props;

	return (
		<div className={styles.techStackItemDiv}>
			<h1>{technologyName}</h1>
			<p>
				{yearsOfExperience === 1
					? `< ${yearsOfExperience} Year Experience`
					: `${yearsOfExperience} Years Experience`}
			</p>
		</div>
	);
}
