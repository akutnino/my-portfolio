import PropTypes from 'prop-types';
import styles from '../styles/NavLinkItem.module.scss';

NavLinkItem.propTypes = {
	navLinkItemURL: PropTypes.string,
	navLinkItemIcon: PropTypes.string,
	navLinkItemName: PropTypes.string
};

export default function NavLinkItem(props) {
	const { navLinkItemURL, navLinkItemIcon, navLinkItemName } = props;

	return (
		<li className={styles.NavLinkItemLI}>
			<a
				href={navLinkItemURL}
				target='_blank'
				rel='noopener noreferrer'
			>
				<img
					src={navLinkItemIcon}
					alt={navLinkItemName}
				/>
			</a>
		</li>
	);
}
