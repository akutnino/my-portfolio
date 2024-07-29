import githubIcon from '/src/assets/images/icon-github.svg';
import frontendMentorIcon from '/src/assets/images/icon-frontend-mentor.svg';
import linkedinIcon from '/src/assets/images/icon-linkedin.svg';
import twitterIcon from '/src/assets/images/icon-twitter.svg';
import styles from '../styles/NavLinks.module.scss';
import NavLinkItem from './NavLinkItem';

export default function NavLinks() {
	return (
		<ul className={styles.linkList}>
			<NavLinkItem
				navLinkItemURL={'https://github.com/akutnino'}
				navLinkItemIcon={githubIcon}
				navLinkItemName={'github'}
			/>
			<NavLinkItem
				navLinkItemURL={'https://www.frontendmentor.io/profile/akutnino'}
				navLinkItemIcon={frontendMentorIcon}
				navLinkItemName={'frontend-mentor'}
			/>
			<NavLinkItem
				navLinkItemURL={'https://ph.linkedin.com/in/akutnino'}
				navLinkItemIcon={linkedinIcon}
				navLinkItemName={'linkedin'}
			/>

			<NavLinkItem
				navLinkItemURL={'https://x.com/akutnino?lang=en'}
				navLinkItemIcon={twitterIcon}
				navLinkItemName={'twitter'}
			/>
		</ul>
	);
}
