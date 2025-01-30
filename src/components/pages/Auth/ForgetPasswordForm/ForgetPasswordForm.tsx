import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FilledInput from "@mui/material/FilledInput";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Alert from "@mui/material/Alert";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import styles from "../AuthStyles.module.scss";

// Define the shape of form data
interface IFormInput {
  email: string;
}

function ForgetPasswordForm() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Use the defined type for form data
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const response = await axios.post(
        "https://upskilling-egypt.com:3007/api/auth/forgot-password",
        data
      );
      navigate("/auth/reset-pass");
      toast.success(response.data.message);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        toast.error(error.response.data.message, {
          position: "top-center",
        });
      } else {
        toast.error("An unexpected error occurred", {
          position: "top-center",
        });
      }
    }
  };

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <div className={styles.auth_form_bx}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid item xs={12} md={12}>
            <FormControl className={styles.form_item} variant="filled">
              <label>{t("email")}</label>
              <FilledInput
                hiddenLabel
                className={styles.btn_bg}
                id="filled-adornment-amount"
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
          </Grid>

          <Grid item xs={12} md={12}>
            <div className={styles.form_btns}>
              <Button
                className={styles.outline_btn}
                fullWidth
                type="submit"
                size="large"
                variant="outlined"
              >
                {t("send")}
              </Button>
            </div>
          </Grid>
        </form>
      </div>
    </Box>
  );
}

export default ForgetPasswordForm;
