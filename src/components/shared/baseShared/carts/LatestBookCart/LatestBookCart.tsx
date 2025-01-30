import { Link } from "react-router-dom";
import IMAGES from "@assets/images/images";
import "./LatestBookCart.scss";

interface Item {
  article_img: string;
  article_date: string;
  article_name: string;
}

const LatestBookCart = ({ article_img, article_date, article_name }: Item) => {
  return (
    <div id="latest_cart">
      <div className="img_holder">
        <img src={article_img} alt="pic" />
      </div>

      <div className="date">{article_date}</div>
      <div className="name">{article_name}</div>

      <div className="social">
        <Link to='/home'><img src={IMAGES.FaceIcon} alt="pic" /></Link>
        <Link to='/home'><img src={IMAGES.Xicon} alt="pic" /></Link>
        <Link to='/home'><img src={IMAGES.LinkedinIcon} alt="pic" /></Link>
      </div>
    </div>
  );
};

export default LatestBookCart;
