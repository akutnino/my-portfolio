import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.scss';

import NavLinks from './NavLinks';

export default function Header() {
	return (
		<header className={styles.header}>
			<nav>
				<h1>@akutnino</h1>
				<NavLinks />
			</nav>
			<h1>
				Nice to meet you! I&apos;m <span>Niño Akut</span>.
			</h1>
			<p>
				Based in the Philippines, I&apos;m a React Web Developer that&apos;s passionate
				about building web apps that users love.
			</p>
			<img
				src='/src/assets/images/IMG_20240723_013808.png'
				alt='my-photo'
			/>
			<nav className={styles.resumeNav}>
				<Link
					to={'/resume'}
					className={styles.resume}
				>
					Check My Resume
				</Link>
			</nav>
		</header>
	);
}
