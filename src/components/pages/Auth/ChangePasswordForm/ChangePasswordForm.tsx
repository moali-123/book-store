import { useState, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Alert from '@mui/material/Alert';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import styles from '../AuthStyles.module.scss';

// Define the type for form data
interface FormData {
  password: string;
  password_new: string;
}

function ChangePasswordForm() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await axios.post(
        'https://upskilling-egypt.com:3007/api/auth/change-password',
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('userToken')}`,
          },
        }
      );
      window.localStorage.clear();
      navigate('/auth/login');
      toast.success(response.data.message);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message, {
          position: 'top-center',
        });
      } else {
        toast.error('An unexpected error occurred', {
          position: 'top-center',
        });
      }
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowNewPassword = () => setShowNewPassword((show) => !show);

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <div className={styles.auth_form_bx}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid item xs={12} md={12}>
            <FormControl className={styles.form_item} variant="standard">
              <label>{t('password')}</label>
              <FilledInput
                hiddenLabel
                className={styles.btn_bg}
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
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
                {...register('password', {
                  required: 'password is required',
                  minLength: {
                    value: 7,
                    message: 'password not matching',
                  },
                })}
              />
              {errors.password && (
                <Alert className="mt-3" severity="error">
                  {errors?.password?.message}
                </Alert>
              )}
            </FormControl>
          </Grid>

          <Grid item xs={12} md={12}>
            <FormControl className={styles.form_item} variant="standard">
              <label>{t('password_new')}</label>
              <FilledInput
                hiddenLabel
                className={styles.btn_bg}
                id="outlined-new-password"
                type={showNewPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowNewPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showNewPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                {...register('password_new', {
                  required: 'password is required',
                  minLength: {
                    value: 7,
                    message: 'password not matching',
                  },
                })}
              />
              {errors.password_new && (
                <Alert className="mt-3" severity="error">
                  {errors?.password_new?.message}
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
                {t('save')}
              </Button>
            </div>
          </Grid>
        </form>
      </div>
    </Box>
  );
}

export default ChangePasswordForm;
