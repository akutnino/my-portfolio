import styles from '../styles/NavLinkItem.module.scss';

export default function NavLinkItem({
	navLinkItemURL,
	navLinkItemIcon,
	navLinkItemName,
}: {
	navLinkItemURL: string;
	navLinkItemIcon: string;
	navLinkItemName: string;
}) {
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
