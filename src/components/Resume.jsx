import { useNavigate } from 'react-router-dom';
import resumeImage from '/src/assets/images/FINAL_RESUME.png';
import ojtcertificate from '/src/assets/images/OJT_Certificate.png';
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
			</div>
		</div>
	);
}
