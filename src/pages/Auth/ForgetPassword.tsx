import { useTranslation } from "react-i18next";
import ForgetPasswordForm from "@components/pages/Auth/ForgetPasswordForm/ForgetPasswordForm";
import styles from "./Auth.module.scss";

function ForgetPassword() {
  const { t } = useTranslation();

  return (
    <section className={styles.auth_section}>
      <div className={styles.title_bx}>
        <p>{t("welcome_back")}</p>
        <h3>{t("forget_password_title")}</h3>
      </div>
      <ForgetPasswordForm />
    </section>
  );
}

export default ForgetPassword;
