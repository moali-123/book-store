import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import IMAGES from '@assets/images/images';
import './Footer.scss';

const Footer = () => {

    const { t } = useTranslation();

    return (
        <section id='footer_section' className='container_bx'>
            <div className='items'>
                <div className='footer_item'>
                    <img className='footer_logo' src={IMAGES.footer_logo} alt='pic' />
                    <p>
                        {t('slider_text')}
                    </p>
                    <div className='social_icons'>
                        <Link to='/home'><img src={IMAGES.footer_facebook} /></Link>
                        <Link to='/home'><img src={IMAGES.footer_linkidin} /></Link>
                        <Link to='/home'><img src={IMAGES.footer_twitter} /></Link>
                        <Link to='/home'><img src={IMAGES.footer_youtube} /></Link>
                    </div>
                </div>

                <div className='footer_item'>
                    <h3>{t('company')}</h3>
                    <ul>
                        <li><Link to='/home'>{t('home')}</Link></li>
                        <li><Link to='/home'>{t('about_us')}</Link></li>
                        <li><Link to='/home'>{t('books')}</Link></li>
                        <li><Link to='/home'>{t('new_release')}</Link></li>
                        <li><Link to='/home'>{t('contact_us')}</Link></li>
                        <li><Link to='/home'>{t('blog')}</Link></li>
                    </ul>
                </div>

                <div className='footer_item'>
                    <h3>{t('importent_links')}</h3>
                    <ul>
                        <li><Link to='/home'>{t('privacy_policy')}</Link></li>
                        <li><Link to='/home'>{t('faqs')}</Link></li>
                        <li><Link to='/home'>{t('terms_of_service')}</Link></li>
                    </ul>
                </div>
            </div>

            <div className='bottom_footer'>
                <p>© 2024 Arihant. All Rights Reserved.</p>

                <ul>
                    <li><Link to='/home'>{t('privacy_policy')}</Link></li>
                    <li><Link to='/home'>{t('terms_of_service')}</Link></li>
                </ul>
            </div>
        </section>
    )
}

export default Footer