import ResumeLink from './ResumeLink';
import NavBar from './NavBar';
import myphoto from '/src/assets/images/IMG_20240723_013808.png';
import styles from '../styles/Header.module.scss';

export default function Header() {
	return (
		<header className={styles.header}>
			<NavBar />
			<h1>
				Nice to meet you! I&apos;m <span>Niño Akut</span>.
			</h1>
			<p>
				Based in the Philippines, I&apos;m a React Web Developer that&apos;s passionate
				about building web applications that users love.
			</p>
			<img
				src={myphoto}
				alt='my-photo'
			/>
			<ResumeLink className={styles.resumeNav} />
		</header>
	);
}
