import IMAGES from '@assets/images/images';
import styles from './TopHeader.module.scss';

const TopHeader = () => {
    return (
        <div className={styles.top_header_bx}>
            <div className='container_bx'>
                <div className='d-flex justify-content-between'>
                    <div className={styles.start_content}>
                        <img src={IMAGES.PhoneIcon} alt='pic' /> +91 8374902234
                    </div>

                    <div className={styles.end_content}>
                        <span className={styles.item}><img src={IMAGES.FaceIcon} alt='pic' /></span>
                        <span className={styles.item}><img src={IMAGES.InstagramIcon} alt='pic' /></span>
                        <span className={styles.item}><img src={IMAGES.LinkedinIcon} alt='pic' /></span>
                        <span className={styles.item}><img src={IMAGES.Xicon} alt='pic' /></span>
                        <span className={styles.item}><img src={IMAGES.Bicon} alt='pic' /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader