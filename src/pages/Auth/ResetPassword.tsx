import { useTranslation } from "react-i18next";
import { ResetPasswordForm } from "@components/index";
import styles from "./Auth.module.scss";

function ResetPassword() {
  const { t } = useTranslation();

  return (
    <section className={styles.auth_section}>
      <div className={styles.title_bx}>
        <p>{t("welcome_back")}</p>
        <h3>{t("reset_password_title")}</h3>
      </div>
      <ResetPasswordForm />
    </section>
  );
}

export default ResetPassword;
