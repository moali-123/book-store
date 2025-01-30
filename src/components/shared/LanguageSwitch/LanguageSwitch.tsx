import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { showLoader, hideLoader } from 'src/redux/loaderSlice';
import { useDispatch } from 'react-redux';
import countryFlagAr from '@assets/images/png/eg.png';
import countryFlagEn from '@assets/images/png/en.png';

interface Item {
    languageText: string;
}
const LanguageSwitch = ({ languageText }: Item) => {
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
    }, [i18n.language]);

    return (
        <>
            {i18n.language === 'en' && <span
                onClick={() => {
                    fireLoader();
                    window.location.reload(),
                    window.scroll({
                        top: 0,
                        behavior: 'smooth',
                    }),
                        i18n.changeLanguage('ar');
                        window.location.reload();
                }}
            >
                {languageText} <img src={countryFlagAr} alt='logo' />
            </span>}

            {i18n.language === 'ar' && <span
                onClick={() => {
                    //window.location.reload(),
                    fireLoader();
                    window.location.reload(),
                    window.scroll({
                        top: 0,
                        behavior: 'smooth',
                    }),
                        i18n.changeLanguage('en')
                }}
            >
                {languageText} <img src={countryFlagEn} alt='logo' />
            </span>}
        </>
    );
}

export default LanguageSwitch;
