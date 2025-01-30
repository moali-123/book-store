import { useTranslation } from 'react-i18next';
import RegisterForm from '@components/pages/Auth/RegisterForm/RegisterForm';
import styles from './Auth.module.scss';

const Register = () => {

    const { t } = useTranslation();

    return (
        <section className={styles.auth_section}>
            <div className={styles.title_bx}>
                <p>{t('create_new_acccount')}</p>
                <h3>{t('register')}</h3>
            </div>
            <RegisterForm />
        </section>
    )
}

export default Register