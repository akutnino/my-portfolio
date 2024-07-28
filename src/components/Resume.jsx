import styles from '../styles/Resume.module.scss';
import resumeImage from '/src/assets/images/FINAL_RESUME.png';
import { useNavigate } from 'react-router-dom';

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
			<img
				src={resumeImage}
				alt='My-Resume'
				className={styles.resumeImage}
			/>
		</div>
	);
}
