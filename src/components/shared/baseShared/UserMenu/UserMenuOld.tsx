import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { LanguageSwitch } from "@components/index";
import IMAGES from "@assets/images/images";
import ChangePassword from "src/pages/Auth/ChangePassword";
import styles from "./UserMenu.module.scss";

const UserMenu = () => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const [openPopup, setOpenPopup] = useState(false);

  const handleClickOpen = () => {
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  const logout = () => {
    window.localStorage.clear();
    navigate("/auth/login");
  };

  return (
    <div className={styles.end_content}>
      <Nav className={styles.nav_items}>
        <NavDropdown
          align="end"
          className={`${styles.item} p_0`}
          title={<img src={IMAGES.userIcon} alt="pic" />}
          id={"offcanvasNavbarDropdown-expand-lg"}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onToggle={() => setIsClicked(!isClicked)}
          show={isClicked || isHovered}
        >
          <NavDropdown.Item>{t("profile")}</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={handleClickOpen}>
            {t("change password")}
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>
            <button className={styles.logout_btn} onClick={logout}>
              {t("logout")}
            </button>
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link className={styles.item} href="#">
          <img src={IMAGES.cartIcon} alt="pic" />
        </Nav.Link>
        <Nav.Link className={styles.item} href="#">
          <img src={IMAGES.favIcon} alt="pic" />
        </Nav.Link>
        <Nav.Link className={styles.item} href="#">
          <div className={styles.choose_lang}>
            <LanguageSwitch languageText="" />
          </div>
        </Nav.Link>
      </Nav>

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
    </div>
  );
};

export default UserMenu;
