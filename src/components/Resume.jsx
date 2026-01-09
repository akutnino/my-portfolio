import { useNavigate } from 'react-router-dom';
import resumeImage from '/src/assets/images/MY_RESUME_2026.png';
import ojtcertificate from '/src/assets/images/OJT_Certificate.png';
import introCyberSec from '/src/assets/images/Intro-to-CyberSec-certificate.jpg';
import introNetworking from '/src/assets/images/ccnav7-intro-to-networks-certificate.jpg';
import switchRoutWireless from '/src/assets/images/ccnav7-switching-routing-wireless-certificate.jpg';
import styles from '../styles/Resume.module.scss';

export default function Resume() {
	const navigate = useNavigate(-1);

	const handleClick = () => {
		navigate(-1);
	};

	return (
		<div className={styles.mainResumeDiv}>
			<button
				type='button'
				onClick={handleClick}
				className={styles.backBtn}
			>
				BACK
			</button>
			<div className={styles.imageContainer}>
				<img
					src={resumeImage}
					alt='My-Resume'
					className={styles.resumeImage}
				/>
				<img
					src={ojtcertificate}
					alt='On-The-Job Training Certificate'
					className={styles.ojtCertificate}
				/>
				<img
					src={switchRoutWireless}
					alt='CCNAv7: Switching, Routing, and Wireless Essentials'
					className={styles.switchRoutWireless}
				/>
				<img
					src={introNetworking}
					alt='CCNAv7: Introduction to Networks'
					className={styles.introNetworking}
				/>
				<img
					src={introCyberSec}
					alt='Cisco: Introduction to Cybersecurity Certificate'
					className={styles.introCyberSec}
				/>
			</div>
		</div>
	);
}
