import Header from './Header.tsx';
import Footer from './Footer.tsx';
import TechStack from './TechStack.tsx';
import Project from './Projects.tsx';

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
