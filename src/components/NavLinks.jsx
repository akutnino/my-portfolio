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
						src='/src/assets/images/icon-github.svg'
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
						src='/src/assets/images/icon-frontend-mentor.svg'
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
						src='/src/assets/images/icon-linkedin.svg'
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
						src='/src/assets/images/icon-twitter.svg'
						alt='twitter'
					/>
				</a>
			</li>
		</ul>
	);
}
