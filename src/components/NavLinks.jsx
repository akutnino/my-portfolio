import githubIcon from '/src/assets/images/icon-github.svg';
import frontendMentorIcon from '/src/assets/images/icon-frontend-mentor.svg';
import linkedinIcon from '/src/assets/images/icon-linkedin.svg';
import twitterIcon from '/src/assets/images/icon-twitter.svg';
import styles from '../styles/NavLinks.module.scss';

export default function NavLinks() {
	return (
		<ul className={styles.linkList}>
			<li>
				<a
					href='https://github.com/akutnino'
					target='_blank'
					rel='noopener noreferrer'
				>
					<img
						src={githubIcon}
						alt='github'
					/>
				</a>
			</li>

			<li>
				<a
					href='https://www.frontendmentor.io/profile/akutnino'
					target='_blank'
					rel='noopener noreferrer'
				>
					<img
						src={frontendMentorIcon}
						alt='frontend-mentor'
					/>
				</a>
			</li>

			<li>
				<a
					href='https://ph.linkedin.com/in/akutnino'
					target='_blank'
					rel='noopener noreferrer'
				>
					<img
						src={linkedinIcon}
						alt='linkedin'
					/>
				</a>
			</li>

			<li>
				<a
					href='https://x.com/akutnino?lang=en'
					target='_blank'
					rel='noopener noreferrer'
				>
					<img
						src={twitterIcon}
						alt='twitter'
					/>
				</a>
			</li>
		</ul>
	);
}
