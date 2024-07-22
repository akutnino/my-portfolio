import { Link } from 'react-router-dom';
import styles from './../styles/Homepage.module.scss';

export default function Homepage() {
	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<header>
					<nav>@akutnino</nav>
					<h1>
						Nice to meet you! I&apos;m <span>Niño Akut</span>.
					</h1>
					<p>
						Based in the Philippines, I&apos;m a ReactJS Web Developer that&apos;s
						passionate about building web apps that users love.
					</p>
					<Link to={'/resume'}>Check My Resume</Link>
					<img
						src='/src/assets/images/IMG_20240723_013808.jpg'
						alt='my-photo'
					/>
				</header>
				<section></section>
				<section></section>
				<footer></footer>
			</div>
		</div>
	);
}
