import React from "react";

const SliderPhotoComponent = (props) => {
  return (
    <div>
      <img className="slider-image " src={props.data.image} />
      <span className="flex text-sm text-left">
        <span className="font-bold cursor-pointer"> {props.data.brand}</span>
        <div className="ml-2 ">{props.data.title}</div>
      </span>
      <div className="items-left leading-6  text-orange-500">
        {props.data.price}
      </div>
    </div>
  );
};

export default SliderPhotoComponent;
