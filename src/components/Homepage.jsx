import styles from './../styles/Homepage.module.scss';
import Header from './Header';

export default function Homepage() {
	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<Header />
				<section></section>
				<section></section>
				<footer></footer>
			</div>
		</div>
	);
}
