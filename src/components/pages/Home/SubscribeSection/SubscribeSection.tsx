import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Alert from "@mui/material/Alert";
import { TextField } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import "./SubscribeSection.scss";

interface FormInputs {
  email: string;
}

const SubscribeSection = () => {
  const { t } = useTranslation();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  return (
    <section id="subscribe_section" className="container_bx">
      <div className="orange_bg">
        <h3>{t("subscribe_section_title")}</h3>
        <p>{t("subscribe_section_desc")}</p>

        <div className="form_bx">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form_items">
              <FormControl className="w-100">
                <TextField
                  id="filled-basic"
                  label="youremail123@gmail.com"
                  variant="standard"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: "Please enter a valid email",
                    },
                  })}
                />
                {errors.email && (
                  <Alert className="mt-3" severity="error">
                    {errors.email.message}
                  </Alert>
                )}
              </FormControl>

              <div className="submit_btn">
                <Button
                  className=""
                  type="submit"
                  fullWidth
                  size="large"
                  variant="contained"
                >
                  {t("subscribe")}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
