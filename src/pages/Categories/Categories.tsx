import { useTranslation } from "react-i18next";
import { SecondHeader, BreadCrumb, CategoriesData } from "@components/index";
import "./Categories.scss";

const Categories = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <SecondHeader />
      <BreadCrumb pageName={t("categories")} />
      <CategoriesData />
    </>
  );
};

export default Categories;
