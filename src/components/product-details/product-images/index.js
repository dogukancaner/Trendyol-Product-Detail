import React, { useRef, useState } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProductRightContent from "../product-right-content";
import ProductSize from "../product-size";
import ProductButton from "../product-add-basket";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import "./styles.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

// const ProductImage = () => {
export default function ProductImage() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="all-theme    bg-white">
      <div className="flex">
        <div className="product-image-container flex mx-auto bg-white ">
          <div className="galeri w-[400px] ">
            <div className="product-image ">
              <div className="gallery ">
                {/* <FaChevronLeft className="icon-left absolute " />
                <FaChevronRight className="icon-right absolute  " /> */}
              </div>
              <div className="free-cargo z-10 absolute mt-4 ml-4">
                {" "}
                KARGO BEDAVA{" "}
              </div>
              <div>
                <Swiper
                  style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                  }}
                  loop={true}
                  spaceBetween={10}
                  navigation={true}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper2"
                >
                  <SwiperSlide>
                    <img
                      className="image object-cover "
                      src="https://cdn.dsmcdn.com/ty379/product/media/images/20220401/21/80585873/433354895/1/1_org_zoom.jpg"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      className="image object-cover"
                      src="https://cdn.dsmcdn.com/ty380/product/media/images/20220401/21/80585873/433354895/2/2_org_zoom.jpg"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      className="image object-cover"
                      src="https://cdn.dsmcdn.com/ty379/product/media/images/20220401/21/80585873/433354895/3/3_org_zoom.jpg"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      className="image"
                      src="https://cdn.dsmcdn.com/ty379/product/media/images/20220401/21/80585873/433354895/4/4_org_zoom.jpg"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      className="image"
                      src="https://cdn.dsmcdn.com/ty378/product/media/images/20220401/21/80585873/433354895/5/5_org_zoom.jpg"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      className="image"
                      src="https://cdn.dsmcdn.com/ty378/product/media/images/20220401/21/80585873/433354895/6/6_org_zoom.jpg"
                    />
                  </SwiperSlide>
                </Swiper>
                {/* <img
                  className="image"
                  src="https://cdn.dsmcdn.com/ty379/product/media/images/20220401/21/80585873/433354895/1/1_org_zoom.jpg"
                /> */}
              </div>
            </div>

            <div className="product-slider flex">
              <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={6}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img
                    className="mini-image min-w-[40px] w-10 h-[60px] mr-4 rounded-md hover:border-[1px] border-orange-600"
                    src="https://cdn.dsmcdn.com/mnresize/128/192/ty379/product/media/images/20220401/21/80585873/433354895/1/1_org_zoom.jpg"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="mini-image min-w-[40px] w-10 h-[60px] mr-4 rounded-md hover:border-[1px] border-orange-600"
                    src="https://cdn.dsmcdn.com/mnresize/128/192/ty380/product/media/images/20220401/21/80585873/433354895/2/2_org_zoom.jpg"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="mini-image min-w-[40px] w-10 h-[60px] mr-4 rounded-md hover:border-[1px] border-orange-600"
                    src="https://cdn.dsmcdn.com/mnresize/128/192/ty379/product/media/images/20220401/21/80585873/433354895/3/3_org_zoom.jpg"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="mini-image min-w-[40px] w-10 h-[60px] mr-4 rounded-md hover:border-[1px] border-orange-600"
                    src="https://cdn.dsmcdn.com/mnresize/128/192/ty379/product/media/images/20220401/21/80585873/433354895/4/4_org_zoom.jpg"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="mini-image min-w-[40px] w-10 h-[60px] mr-4 rounded-md hover:border-[1px] border-orange-600"
                    src="https://cdn.dsmcdn.com/mnresize/128/192/ty378/product/media/images/20220401/21/80585873/433354895/5/5_org_zoom.jpg"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="mini-image min-w-[40px] w-10 h-[60px] mr-4 rounded-md hover:border-[1px] border-orange-600"
                    src="https://cdn.dsmcdn.com/mnresize/128/192/ty378/product/media/images/20220401/21/80585873/433354895/6/6_org_zoom.jpg"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="mini-pay">
              <img
                className="mini-pay-image"
                src="https://cdn.dsmcdn.com/web/web-installment-campaigns/3mv3.png"
              />
            </div>
          </div>
        </div>
        <ProductRightContent />
      </div>
    </div>
  );
}

// export default ProductImage;
