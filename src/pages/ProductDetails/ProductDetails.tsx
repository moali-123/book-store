import { useTranslation } from "react-i18next";
import { SecondHeader, BreadCrumb } from "@components/index";
import { DetailsSection } from "@components/index";
import "./ProductDetails.scss";

const ProductDetails = () => {
  const { t } = useTranslation();

  return (
    <>
      <SecondHeader />
      <BreadCrumb pageName={t("products details")} />

      <DetailsSection />
    </>
  );
};

export default ProductDetails;
