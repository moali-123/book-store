import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { LanguageSwitch } from '@components/index';
import { showLoader, hideLoader } from '../../redux/loaderSlice';
// import Grid from '@mui/material/Grid';
import { Outlet } from 'react-router-dom';
import MainLoader from '../../components/shared/Loaders/MainLoader';
import IMAGES from '@assets/images/images';
import styles from './AuthLayout.module.scss';

const AuthLayout = () => {
    const { i18n } = useTranslation();
    document.documentElement.lang = i18n.language;

    const dispatch = useDispatch();
    const fireLoader = () => {
        dispatch(showLoader());

        setTimeout(() => {
            dispatch(hideLoader());
        }, 800);
    };

    useEffect(() => {
        fireLoader();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <MainLoader className="loader-spinner-bx" />
            <div className={styles.auth_layout_bx}>
                <div className={styles.language_bx}>
                    <div className={styles.choose_lang}>
                        {i18n.language === 'en' && <LanguageSwitch languageText='عربي' />}
                        {i18n.language === 'ar' && <LanguageSwitch languageText='english' />}
                    </div>
                </div>
                <div className={styles.img_holder}><img src={IMAGES.authBanner} alt='pic' /></div>

                <div className={styles.page_content}>
                    <div className={styles.logo_img}><img src={IMAGES.coloredLogo} alt='pic' /></div>
                    <Outlet />
                </div>
                {/* <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6}>
                        
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        
                    </Grid>
                </Grid> */}
            </div>
        </>
    )
}

export default AuthLayout