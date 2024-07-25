import styles from './../styles/Homepage.module.scss';
import Header from './Header';
import Project from './Projects';
import TechStack from './TechStack';

export default function Homepage() {
	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<Header />
				<TechStack />
				<Project />
				<footer></footer>
			</div>
		</div>
	);
}
