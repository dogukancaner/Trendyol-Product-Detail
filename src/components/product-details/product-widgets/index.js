import React from "react";
import { IoIosPricetag } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa";
import { VscInfo } from "react-icons/vsc";
import { MdStore, MdChatBubble } from "react-icons/md";
import { BsStarFill } from "react-icons/bs";

function ProductWidget() {
  return (
    <div className="product-widget-list  grid grid-cols-3  gap-12 xl:block   ">
      <section className="campaign">
        <h2 className="font-bold"> ÜRÜNÜN KAMPANYALARI </h2>
        <div className="widget-row flex items-center font-bold">
          <IoIosPricetag className="icon-top" />
          <a href="#" className="flex">
            60 TL ve Üzeri Kargo Bedava{" "}
          </a>
          <FaChevronRight className="arrow" />
        </div>
        <div className="widget-bottom flex items-center font-bold">
          <IoIosPricetag className="icon-top" />
          <a href="#" className="flex">
            500 TL Üzeri 100 TL İndirim{" "}
          </a>
          <FaChevronRight className="arrow" />
        </div>
      </section>
      <section className="seller bg-amber-50 ">
        <div className="widget-title flex items-center font-bold">
          <a href="#" className="flex">
            Avva{" "}
          </a>
          <label> 8.9</label>
          <VscInfo className="icone" />
        </div>

        <div className="widget-row flex items-center font-bold">
          <MdStore className="icon" />
          <div>
            <a href="#"> Mağazayı Gör </a>
            <span> 894.4B Takipçi </span>
          </div>
          <FaChevronRight className="arrow" />
        </div>
        <div className="widget-bottom flex items-center font-bold">
          <MdChatBubble className="icon" />
          <a href="#" className="seller-answer">
            {" "}
            Satıcıya Soru Sor{" "}
          </a>
          <FaChevronRight className="arrow" />
        </div>
      </section>
      <section className="review ">
        <h2 className="font-bold"> ÖNE ÇIKAN YORUM </h2>
        <div className="xl:py-4 flex   h-full items-center justify-center flex-col   ">
          <div className=" items-center justify-center flex text-orange-500 flex-col mb-10 xl:mb-0">
            <BsStarFill className="iconee " />
            <p>Henüz Yorum Yazılmamış</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductWidget;
