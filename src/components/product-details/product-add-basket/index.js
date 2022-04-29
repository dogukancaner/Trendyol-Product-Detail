import React, { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import ProductDelivery from "../product-delivery";

function ProductButton() {
  const [basket, setBasket] = useState(false);

  return (
    <div className="product-button-container      ">
      <div className="flex">
        <button
          className={` ${
            basket ? "added-to-basket" : "add-to-basket"
          } mx-4 my-1 transition-colors duration-400`}
          onClick={() => setBasket((prevBasket) => !prevBasket)}
        >
          {basket ? "Sepete Eklendi" : "Sepete Ekle"}
          <div className="add "></div>
        </button>
        <div className="favorite-button mx-4 my-1">
          <div>
            <button className="fv ">
              <IoMdHeartEmpty className="icon  " />
            </button>
          </div>
        </div>
      </div>
      <ProductDelivery />
    </div>
  );
}

export default ProductButton;
