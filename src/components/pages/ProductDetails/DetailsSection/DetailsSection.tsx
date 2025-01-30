import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import axios from "axios";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import IMAGES from "@assets/images/images";
import { useDispatch } from "react-redux";
import { add, total } from "src/redux/CartSlice";
import "./DetailsSection.scss";

const DetailsSection = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const initialState = {
    id: null,
    auther: "",
    name: "",
    description: "",
    price: null,
    status: "",
    category: null,
  };

  const [book, setBook] = useState(initialState);
  const { _id } = useParams();
  const [loading, setLoading] = useState<boolean>(true);

  const singlePro = async () => {
    try {
      const response = await axios.get(
        `https://upskilling-egypt.com:3007/api/book/${_id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );
      console.log(response);
      setBook(response.data);
    } catch (erroe) {
      console.log(erroe);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    singlePro();
  }, []);

  return (
    <section id="product_details_section" className="container_bx">
      {loading ? (
        <div className="loader w-[100%] flex justify-center items-center p-10">
          <img className="w-[100px]" src={IMAGES.circle_preloader} alt="pic" />
        </div>
      ) : (
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <div className="img_holder">
              <img src={IMAGES.book_1} alt="pic" />
            </div>
          </Grid>

          <Grid item xs={12} md={9}>
            <div className="details">
              <div className="item">
                <div className="label">name :</div>
                <div className="text">{book.name}</div>
              </div>

              <div className="item">
                <div className="label">auther :</div>
                <div className="text">{book.auther}</div>
              </div>

              <div className="item">
                <div className="label">description :</div>
                <div className="text">{book.description}</div>
              </div>

              <div className="item">
                <div className="label">price :</div>
                <div className="text">{book.price}</div>
              </div>

              <div className="item">
                <Button
                  className="add_to_cart_btn"
                  type="submit"
                  fullWidth
                  size="large"
                  variant="contained"
                  onClick={() => {
                    dispatch(add(book));
                    dispatch(total());
                  }}
                >
                  {t("add_to_cart")}
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      )}
    </section>
  );
};

export default DetailsSection;
