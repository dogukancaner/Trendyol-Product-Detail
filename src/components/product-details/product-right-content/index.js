import React from "react";
import { BsStar } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import ProductSize from "../product-size";
import ProductAddBasket from "../product-add-basket";

function ProductRightContent() {
  return (
    <div className="right-content   ">
      <div className="pr-in-w h-[200px] flex-row border-b-2 ">
        <div>
          <div className="pr-in-cn">
            <div>
              <h1 className="inline mb-[2px] font-[20px] font-bold">
                <a href="https://www.trendyol.com/avva-x-b257"> Avva </a>
              </h1>
              <span className="text-[#333] font-[20px]">
                Erkek Multicolour Baskılı Küba Yaka Relaxed Fit Kısa Kol Gömlek
                A21y2106 A21Y2106
              </span>
            </div>
            <div className="merchent-box">
              <span className="text-[#666] ">Satıcı:</span>
              <a className="supplier text-blue-500" href="#">
                {" "}
                AVVA{" "}
              </a>
            </div>
            <div className=" flex gap-2 items-center mt-[10px] mb-5">
              <BsStar className="text- [#ffc000] " />
              <span className="text-gray-500 ">Henüz Yorum Yazılmamış.</span>
            </div>
            <div className="product-price ">
              <span className="price font-bold  text-orange-500 text-2xl">
                {" "}
                499,99 TL
              </span>
            </div>
          </div>{" "}
        </div>
      </div>
      <ProductSize />
      <ProductAddBasket />
    </div>
  );
}

export default ProductRightContent;
