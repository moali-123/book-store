import { useTranslation } from "react-i18next";
import { SecondHeader, BreadCrumb } from "@components/index";
import { CategoryData } from "@components/index";
import './CategoryDetails.scss';

const CategoryDetails = () => {
  const { t } = useTranslation();

  return (
    <>
      <SecondHeader />
      <BreadCrumb pageName={t("categories")} />

      <CategoryData />
    </>
  );
}

export default CategoryDetails