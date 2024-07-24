import styles from './../styles/Homepage.module.scss';
import Header from './Header';
import TechStack from './TechStack';

export default function Homepage() {
	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<Header />
				<TechStack />
				<section></section>
				<footer></footer>
			</div>
		</div>
	);
}
