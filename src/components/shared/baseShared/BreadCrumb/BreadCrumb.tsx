import { useTranslation } from "react-i18next";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import "./BreadCrumb.scss";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

interface Item{
    pageName: string;
}
function BreadCrumb({ pageName }:Item) {
    const { t } = useTranslation();

  return (
    <div id="breadCrumb">
      <div role="presentation" onClick={handleClick}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link  color="inherit" to="/home">
            {t('home')}
          </Link>
          <Link
            color="text.primary"
            to="/all-products"
            aria-current="page"
            className="active"
          >
            {pageName}
          </Link>
        </Breadcrumbs>
      </div>
    </div>
  );
}

export default BreadCrumb;
