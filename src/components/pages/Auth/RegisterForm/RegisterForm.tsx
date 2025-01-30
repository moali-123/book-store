import { useState, MouseEvent } from "react";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import FilledInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Alert from "@mui/material/Alert";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import styles from "../AuthStyles.module.scss";

interface FormData {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  role: string;
}

const RegisterForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data);
    try {
      const response = await axios.post(
        "https://upskilling-egypt.com:3007/api/auth/register",
        data
      );
      navigate("/auth/login");
      toast.success(response.data.message);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message, {
          position: "top-center",
        });
      } else {
        toast.error("An unexpected error occurred", {
          position: "top-center",
        });
      }
    }
  };

  const registerNavigate = () => {
    navigate("/auth/login");
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const [role, setRole] = useState<string>("");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setRole(event.target.value);
  };

  return (
    <>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <div className={styles.auth_form_bx}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <FormControl className={styles.form_item} variant="filled">
                  <label>{t("first_name")}</label>
                  <FilledInput
                    hiddenLabel
                    className={styles.btn_bg}
                    id="firstName"
                    {...register("first_name", {
                      required: "first name is required",
                    })}
                  />
                  {errors.first_name && (
                    <Alert className="mt-3" severity="error">
                      {errors.first_name.message}
                    </Alert>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={12} md={6}>
                <FormControl className={styles.form_item} variant="filled">
                  <label>{t("last_name")}</label>
                  <FilledInput
                    hiddenLabel
                    className={styles.btn_bg}
                    id="lastName"
                    {...register("last_name", {
                      required: "last name is required",
                    })}
                  />
                  {errors.last_name && (
                    <Alert className="mt-3" severity="error">
                      {errors.last_name.message}
                    </Alert>
                  )}
                </FormControl>
              </Grid>
            </Grid>

            <Grid item xs={12} md={12}>
              <FormControl className={styles.form_item} variant="filled">
                <label>{t("email")}</label>
                <FilledInput
                  hiddenLabel
                  className={styles.btn_bg}
                  id="filled-adornment-amount"
                  {...register("email", {
                    required: "email is required",
                    pattern: {
                      value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: "please enter a valid email",
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
              <FormControl className={styles.form_item} variant="standard">
                <label>{t("password")}</label>
                <FilledInput
                  hiddenLabel
                  className={styles.btn_bg}
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  {...register("password", {
                    required: "password is required",
                    minLength: {
                      value: 7,
                      message: "password must be at least 7 characters",
                    },
                  })}
                />
                {errors.password && (
                  <Alert className="mt-3" severity="error">
                    {errors.password.message}
                  </Alert>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} md={12}>
              <FormControl className={styles.form_item} variant="filled">
                <label>{t("select role")}</label>
                <Select
                  hiddenLabel
                  className={styles.btn_bg}
                  value={role}
                  {...register("role", {
                    required: "role is required",
                  })}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">choose</MenuItem>
                  <MenuItem value={"Admin"}>Admin</MenuItem>
                  <MenuItem value={"Customer"}>Customer</MenuItem>
                </Select>
                {errors.role && (
                  <Alert className="mt-3" severity="error">
                    {errors.role.message}
                  </Alert>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} md={12}>
              <div className={styles.form_btns}>
                <Button
                  className={styles.fill_btn}
                  type="submit"
                  fullWidth
                  size="large"
                  variant="contained"
                >
                  {t("register")}
                </Button>
                <Button
                  className={styles.outline_btn}
                  fullWidth
                  size="large"
                  variant="outlined"
                  onClick={registerNavigate}
                >
                  {t("login")}
                </Button>
              </div>
            </Grid>
          </form>
        </div>
      </Box>
    </>
  );
};

export default RegisterForm;
