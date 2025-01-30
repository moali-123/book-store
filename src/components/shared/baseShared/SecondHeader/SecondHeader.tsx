import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import UserMenu from "../UserMenu/UserMenu";
import IMAGES from "@assets/images/images";
import "./SecondHeader.scss";
import { Link } from "react-router-dom";

function SecondHeader() {
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
        } fixed left-0 w-full z-20`}
      >
        <Navbar key="xxl" expand={false} id="header_menu">
          <div className="container_bx d-flex justify-content-between align-items-center w-100">
            <Navbar.Toggle
              className="toggle_btn"
              aria-controls={"side_menu_two"}
            />

            <Navbar.Brand className="menu_logo" href="#">
              <Link to="/home">
                <img src={IMAGES.coloredLogo} alt="pic" />
              </Link>
            </Navbar.Brand>

            <Navbar.Offcanvas
              id={"side_menu_two"}
              aria-labelledby={"side_menu_two_label"}
              placement="start"
              className="menu_Offcanvas"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={"side_menu_two_label"}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="me-auto ms-auto align-items-center">
                  <Nav.Link className={`active menu_item`} href="#">
                    {t("home")}
                  </Nav.Link>
                  <Nav.Link className="menu_item" href="#">
                    {t("about_us")}
                  </Nav.Link>
                  <Nav.Link className="menu_item" href="#">
                    {t("books")}
                  </Nav.Link>
                  <Nav.Link className="menu_item" href="#">
                    {t("new_release")}
                  </Nav.Link>
                  <Nav.Link className="menu_item" href="#">
                    {t("contact_us")}
                  </Nav.Link>
                  <Nav.Link className="menu_item" href="#">
                    {t("blog")}
                  </Nav.Link>
                </Nav>
                <div className="hide_desktop">
                  <UserMenu />
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>

            <div className="hide_mobile">
              <UserMenu />
            </div>
          </div>
        </Navbar>
      </div>
    </>
  );
}

export default SecondHeader;
