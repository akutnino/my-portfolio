import styles from '../styles/Header.module.scss';

import NavLinks from './NavLinks';
import ResumeLink from './ResumeLink';

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
				about building web applications that users love.
			</p>
			<img
				src='/src/assets/images/IMG_20240723_013808.png'
				alt='my-photo'
			/>
			<ResumeLink className={styles.resumeNav} />
		</header>
	);
}
