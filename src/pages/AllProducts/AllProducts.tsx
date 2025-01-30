import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import {
  SecondHeader,
  BreadCrumb,
  FilterBx,
  ResultBx,
} from "@components/index";
import "./AllProducts.scss";

function AllProducts() {
  const { t } = useTranslation();

  return (
    <>
      <SecondHeader />
      <BreadCrumb pageName={t("products")} />

      <section id="data_books_section" className="container_bx">
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <FilterBx />
          </Grid>
          <Grid item xs={12} md={9}>
            <ResultBx />
          </Grid>
        </Grid>
      </section>
    </>
  );
}

export default AllProducts;
