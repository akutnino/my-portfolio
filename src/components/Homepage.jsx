import Footer from './Footer';
import Header from './Header';
import Project from './Projects';
import TechStack from './TechStack';
import styles from './../styles/Homepage.module.scss';

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
