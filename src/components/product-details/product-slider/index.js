import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper";
import SliderPhotoComponent from "../../slider-photo-component";

const ProductSlider = (props) => {
  // const [slideCount, setSlideCount] = useState(4);

  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="text-xl font-bold   text-black">{props.title}</div>
      <div className="">
        <Swiper
          className=" w-full  "
          loop
          // slidesPerView={5}
          navigation={true}
          // pagination={{
          //   clickable: true,
          // }}
          breakpoints={{
            // 480: {
            //   slidesPerView: 1,
            //   spaceBetween: 5,
            // },
            640: {
              slidesPerView: 2,
              spaceBetween: 5,
            },

            780: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1240: {
              slidesPerView: 5,
              spaceBetween: 25,
            },
          }}
          modules={[Navigation]}
          // navigation={true}
          // modules={[Navigation]}
        >
          {props.data.map((data, i) => (
            <SwiperSlide key={i}>
              <SliderPhotoComponent data={data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductSlider;
