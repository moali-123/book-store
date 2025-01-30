import { HiX } from "react-icons/hi";
import { increase, decrease, remove, total } from "../../../../redux/CartSlice";
import { useDispatch } from "react-redux";
import IMAGES from "@assets/images/images";

interface CartItem {
  price: number;
  amount: number;
  name: string;
}

interface CheckOutItemsProps {
  cartItem: CartItem;
}

const CheckOutItems: React.FC<CheckOutItemsProps> = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { price, amount, name } = cartItem;
  console.log("price api", price);

  return (
    <div className="flex justify-between items-center border border-solid border-red-300 p-4 mb-6">
      <div className="flex items-center gap-4 max-w-[6.8rem]">
        <img src={IMAGES.book_3} alt="pic" className="w-20 h-20 object-cover" />
      </div>

      <div className="flex flex-col items-start">
        <div>{name}</div>
        <div className="flex items-center gap-4 mt-2">
          <button
            className="w-8 h-8 text-white bg-black rounded-full"
            onClick={() => {
              dispatch(decrease(cartItem));
              dispatch(total());
            }}
          >
            -
          </button>
          <div>{amount}</div>
          <button
            className="w-8 h-8 text-white bg-black rounded-full"
            onClick={() => {
              dispatch(increase(cartItem));
              dispatch(total());
            }}
          >
            +
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center gap-3">
        <HiX
          className="cursor-pointer text-xl"
          onClick={() => dispatch(remove(cartItem))}
        />
        <div>${(price * amount).toFixed(2)}</div>
      </div>
    </div>
  );
};

export default CheckOutItems;
