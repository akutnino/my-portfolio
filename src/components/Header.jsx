import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';
import styles from '../styles/Header.module.scss';

export default function Header() {
	return (
		<header className={styles.header}>
			<nav>
				@akutnino
				<NavLinks />
			</nav>
			<div>
				<h1>
					Nice to meet you! I&apos;m <span>Niño Akut</span>.
				</h1>
				<p>
					Based in the Philippines, I&apos;m a ReactJS Web Developer that&apos;s
					passionate about building web apps that users love.
				</p>
			</div>
			<img
				src='/src/assets/images/IMG_20240723_013808.jpg'
				alt='my-photo'
			/>
			<Link
				to={'/resume'}
				className={styles.resume}
			>
				Check My Resume
			</Link>
		</header>
	);
}
