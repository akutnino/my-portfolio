import styles from './../styles/Homepage.module.scss';
import Footer from './Footer';
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
				<Footer />
			</div>
		</div>
	);
}
