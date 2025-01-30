import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import UserMenu from "../UserMenu/UserMenu";
import IMAGES from "@assets/images/images";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  const { t } = useTranslation();
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
    });
  }, []);

  return (
    <>
      <div
        className={`${
          scroll ? "bg-[#e5e6dd] shadow-lg top-0" : "bg-[#fff] top-10"
        } fixed left-0 w-full z-[1024]`}
      >
        <Navbar key="xl" expand="lg" className={styles.header_menu}>
          <div className="container_bx d-flex justify-content-between w-100">
            <Navbar.Brand className={styles.menu_logo} href="#">
              <Link to="/home">
                <img src={IMAGES.coloredLogo} alt="pic" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={"offcanvasNavbar-expand-lg"} />
            <Navbar.Offcanvas
              id={"offcanvasNavbar-expand-lg"}
              aria-labelledby={"offcanvasNavbarLabel-expand-lg"}
              placement="start"
              className={styles.menu_Offcanvas}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={"offcanvasNavbarLabel-expand-lg"}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="me-auto ms-auto align-items-center">
                  <Nav.Link className={`active ${styles.menu_item}`} href="#">
                    {t("home")}
                  </Nav.Link>
                  <Nav.Link className={styles.menu_item} href="#">
                    {t("about_us")}
                  </Nav.Link>
                  <Nav.Link className={styles.menu_item} href="#">
                    {t("books")}
                  </Nav.Link>
                  <Nav.Link className={styles.menu_item} href="#">
                    {t("new_release")}
                  </Nav.Link>
                  <Nav.Link className={styles.menu_item} href="#">
                    {t("contact_us")}
                  </Nav.Link>
                  <Nav.Link className={styles.menu_item} href="#">
                    {t("blog")}
                  </Nav.Link>
                </Nav>

                <UserMenu />
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </div>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
