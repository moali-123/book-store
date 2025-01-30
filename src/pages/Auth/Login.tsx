import React from 'react';
import { useTranslation } from 'react-i18next';
import { LoginForm } from '@components/index';
import styles from './Auth.module.scss';

interface LoginProps {
    saveLoginData: (data: string) => void; 
}

const Login: React.FC<LoginProps> = ({ saveLoginData }) => {
    const { t } = useTranslation();

    return (
        <section className={styles.auth_section}>
            <div className={styles.title_bx}>
                <p>{t('welcome_back')}</p>
                <h3>{t('login_to_your_account')}</h3>
            </div>
            <LoginForm saveLoginData={saveLoginData} />
        </section>
    );
}

export default Login;