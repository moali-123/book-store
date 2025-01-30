import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { LanguageSwitch } from "@components/index";
import IMAGES from "@assets/images/images";
import ChangePassword from "src/pages/Auth/ChangePassword";
import { useDispatch, useSelector } from "react-redux";
import { showLoader, hideLoader } from "src/redux/loaderSlice";
import "./UserMenu.scss";

function UserMenu() {
  const { amount } = useSelector((state) => state.cart);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const [openPopup, setOpenPopup] = useState(false);
  const [hasToken, setHasToken] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (token) {
      setHasToken(true);
    } else {
      setHasToken(false);
    }
  }, []);

  const handleClickOpen = () => {
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const fireLoader = () => {
    dispatch(showLoader());

    setTimeout(() => {
    dispatch(hideLoader());
    }, 800);
  };

  const logout = () => {
    window.localStorage.clear();
    window.location.reload();
    fireLoader();
    navigate("/");
  };

  useEffect(() => {
    fireLoader();
  }, []);

  return (
    <>
      <div id="end_content">
        {hasToken ? (
          <>
            <div className="item">
              <Button
                id="fade-button"
                className="user_btn"
                aria-controls={open ? "fade-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <img src={IMAGES.userIcon} alt="pic" />
              </Button>
              <Menu
                id="fade-menu"
                MenuListProps={{
                  "aria-labelledby": "fade-button",
                }}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                <MenuItem onClick={handleClose}>{t("profile")}</MenuItem>
                <MenuItem onClick={handleClose}>
                  <div onClick={handleClickOpen}>{t("change_password")}</div>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <button id="logout_btn" onClick={logout}>
                    {t("logout")}
                  </button>
                </MenuItem>
              </Menu>
            </div>

            <Link
              to="/cart"
              onClick={() => {
                window.scroll({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              <div className="item relative">
                <img src={IMAGES.cartIcon} alt="pic" />
                <div
                  className="
                  circle absolute w-4 h-4 rounded-full z-10 bottom-[-6px] 
                flex items-center justify-center text-[10px] bg-[#EF6B4A] text-white
            "
                >
                  {amount}
                </div>
              </div>
            </Link>
            <div className="item">
              <img src={IMAGES.favIcon} alt="pic" />
            </div>
          </>
        ) : (
          <Link to='/auth/login'>login</Link>
        )}

        <div className="item">
          <div className="choose_lang">
            <LanguageSwitch languageText="" />
          </div>
        </div>
      </div>

      <Dialog
        open={openPopup}
        onClose={handleClosePopup}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <ChangePassword />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePopup}>Disagree</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default UserMenu;
