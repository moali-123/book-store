import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { add, total } from "src/redux/CartSlice";
import axios from "axios";
//import IMAGES from "@assets/images/images";
import "./ReleaseBookCart.scss";
import { useEffect, useState } from "react";

interface Items {
  name: string;
  auther: string;
  price: number;
  LinkPath: string;
  imagePath: string;
  _id: string;
}
const ReleaseBookCart = ({ name, auther, price, LinkPath, imagePath, item }: Items) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [hasToken, setHasToken] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (token) {
      setHasToken(true);
    } else {
      setHasToken(false);
    }
  }, []);

  const addToCart = async () => {
    dispatch(add(item));
    dispatch(total());
    try {
      const response = await axios.post(
        "https://upskilling-egypt.com:3007/api/basket/item",
        {
          "book": item._id,
          "quantity":total
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );
      console.log(response);
      //setBooks(response.data.data);
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div className="book_item">
      <div className="img_holder">
        <img src={imagePath} alt="pic" />
      </div>
      <div className="text">
        <div className="name"> {name} </div>
        <div className="writer"> {auther} </div>
        <div className="price"> {price} </div>
      </div>
      {/* <Link
        className="add_to_cart_btn"
        to="/cart"
        onClick={() => {
          window.scroll({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        {t("add_to_cart")}
      </Link> */}
      <div
        className="add_to_cart_btn cursor-pointer"
        onClick={() => addToCart()}
      >
        {t("add_to_cart")}
      </div>
      <Link
        className="see_more_btn"
        to={hasToken ? (`/product-details/${item._id}`) : ('/auth/login')}
        onClick={() => {
          window.scroll({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        {t("see_more")}
      </Link>
    </div>
  );
};

export default ReleaseBookCart;
