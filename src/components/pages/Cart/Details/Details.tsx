//import { useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
//import { BiSolidTrash } from "react-icons/bi";
import { HiTrash } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import { clear } from "../../../../redux/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease, remove, total } from "../../../../redux/CartSlice";
import CheckOutItems from "./CheckOutItems";
import IMAGES from "@assets/images/images";
import "./Details.scss";
import { useEffect } from "react";

const Details = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { cartItems, amount, price, name } = useSelector((state) => state.cart);

  const getCartItems = async () => {
    try {
      const response = await axios.get(
        "https://upskilling-egypt.com:3007/api/basket",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );
      console.log(response.data.items);
      //setBooks(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCartItems();
  });

  return (
    <>
      <div id="Details_bx">
        <Card className="cost_container">
          <CardContent className="content_bx">
            <div className="flex justify-between">
              <h3>{t("products_detailes")}</h3>
              <HiTrash
                className="cursor-pointer text-3xl"
                onClick={() => dispatch(clear())}
              />
            </div>

            <div className="mt-4">
              <div className="p-6">
                <div className="flex items-center justify-end">
                  <div>shopping bag ({amount})</div>
                </div>

                <div className="mt-8">
                  {cartItems.length === 0 ? (
                    <div className="uppercase flex items-center justify-center flex-col text-2xl">
                      <img src={IMAGES.empty} alt="pic" className="w-[50%]" />
                      your cart is empty
                    </div>
                  ) : (
                    <>
                      {cartItems.map((cartItem) => {
                        return (
                          <CheckOutItems
                            key={cartItem._id}
                            cartItem={cartItem}
                          />
                          // <div
                          //   className="flex justify-between items-center border border-solid border-red-300 p-4 mb-6"
                          //   key={cartItem._id} 
                          // >
                          //   <div className="flex items-center gap-4 max-w-[6.8rem]">
                          //     <img
                          //       src={IMAGES.book_3}
                          //       alt="pic"
                          //       className="w-20 h-20 object-cover"
                          //     />
                          //   </div>

                          //   <div className="flex flex-col items-start">
                          //     <div>{name}</div>
                          //     <div className="flex items-center gap-4 mt-2">
                          //       <button
                          //         className="w-8 h-8 text-white bg-black rounded-full"
                          //         onClick={() => {
                          //           dispatch(decrease(cartItem));
                          //           dispatch(total());
                          //         }}
                          //       >
                          //         -
                          //       </button>
                          //       <div>{amount}</div>
                          //       <button
                          //         className="w-8 h-8 text-white bg-black rounded-full"
                          //         onClick={() => {
                          //           dispatch(increase(cartItem));
                          //           dispatch(total());
                          //         }}
                          //       >
                          //         +
                          //       </button>
                          //     </div>
                          //   </div>

                          //   <div className="flex flex-col items-center gap-3">
                          //     <HiX
                          //       className="cursor-pointer text-xl"
                          //       onClick={() => dispatch(remove(cartItem))}
                          //     />
                          //     <div>${(price * amount).toFixed(2)}</div>
                          //   </div>
                          // </div>
                        );
                      })}

                      {/* <div className="flex justify-between items-center mt-12">
                        <div>total cost : ${total.toFixed(2)}</div>
                      </div>

                      <div className="text-center cursor-pointer bg-black text-white p-3 mt-8">
                        checkOut
                      </div> */}
                    </>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Details;
