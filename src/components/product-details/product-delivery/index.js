import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import ProductFeaturedInformation from "../product-featured-information";

function ProductDelivery() {
  return (
    <div className="delivery-favorite-info flex-row">
      <div className="flex">
        <div className="pr-dd "></div>
        <div className="fv-dt ">
          <span className="font-bold ml-4">Tahmini Kargo Teslimi :</span>
          <span className="spn"> 4 gün içerisinde</span>
        </div>
        <div className="fv-dt flex flex-row items-center text-[12px] text-[#999] ml-[250px] ">
          <IoMdHeartEmpty class="mr-2  text-sm " /> 56 favori
        </div>
      </div>
      <div className="border-bottom "></div>
      <ProductFeaturedInformation />
    </div>
  );
}

export default ProductDelivery;
