import { useTranslation } from "react-i18next";
import { ChangePasswordForm } from "@components/index";

function ChangePassword() {
    const { t } = useTranslation();

  return (
    <section className=''>
      <div className=''>
        <p>{t("welcome_back")}</p>
        <h3>{t("change_password_title")}</h3>
      </div>
      <ChangePasswordForm />
    </section>
  );
}

export default ChangePassword;
