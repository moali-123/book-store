
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import {
  SecondHeader,
  BreadCrumb,
  Details,
  TotalCost,
  //ShippingData,
  Items,
} from "@components/index";
import { total } from "src/redux/CartSlice";
import './MyCart.scss';

const MyCart = () => {
  const { t } = useTranslation();
  const {cartItems} = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(total());
  }, [cartItems]);

  return (
    <>
      <SecondHeader />
      <BreadCrumb pageName={t("cart")} />

      <section id="data_books_section" className="container_bx">
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Details />
          </Grid>
          <Grid item xs={12} md={4}>
            <TotalCost />
          </Grid>
        </Grid>

        {/* <Grid container spacing={4}>
          <Grid item xs={12} md={12}>
            <ShippingData />
          </Grid>
        </Grid> */}

        <Grid container spacing={4}>
          <Grid item xs={12} md={12}>
            {/* <Items /> */}
          </Grid>
        </Grid>
      </section>
    </>
  );
};

export default MyCart;
