import styles from '../styles/Footer.module.scss';
import NavBar from './NavBar';

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<NavBar />
		</footer>
	);
}
