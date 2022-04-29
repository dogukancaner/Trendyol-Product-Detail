import React from "react";
import { BsStarFill } from "react-icons/bs";

const ProductRating = () => {
  return (
    <div className="product-rate">
      <div className="rate">
        <h2 className="font-bold text-xl"> Ürünün Değerlendirmeleri</h2>
      </div>
      <div className="border-box box-border h-300 w-100 p-20 border-2 rounded-t-lg ">
        <div className="rating-row flex items-center justify-center flex-col   ">
          <BsStarFill className="iconee text-orange-500 text-3xl " />
          <p className=" text-gray-500  ">Henüz Yorum Yazılmamış</p>
        </div>
      </div>
    </div>
  );
};

export default ProductRating;
