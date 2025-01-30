import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import IMAGES from "@assets/images/images";
import { useSelector } from "react-redux";
import "./TotalCost.scss";

const TotalCost = () => {
  const { total } = useSelector((state) => state.cart);

  return (
    <>
      <div id="cost_bx">
        <Card className="cost_container">
          <CardContent className="content_bx">
            <h3>Cart Total Cost</h3>

            <ul>
              {/* <li>
                <span className="title">Total</span>
                <span className="data">36 AED</span>
              </li>
              <li>
                <span className="title">Tax</span>
                <span className="data">1.6 AED</span>
              </li> */}
              <li>
                <span className="title">Total Cost</span>
                <span className="data">{total.toFixed(2)} AED</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <div className="cart_btn">
          <Button variant="contained">
            Proced
            <img src={IMAGES.shopping_cart} alt="pic" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default TotalCost;
