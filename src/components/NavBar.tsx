import NavLinks from './NavLinks.tsx';

import styles from '../styles/NavBar.module.scss';

export default function NavBar() {
	return (
		<nav className={styles.navBar}>
			<h1 className={styles.handle}>@akutnino</h1>
			<NavLinks />
		</nav>
	);
}
