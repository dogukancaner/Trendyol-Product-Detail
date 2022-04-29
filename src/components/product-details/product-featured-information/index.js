import React from "react";

function ProductFeaturedInformation() {
  return (
    <div className="feaured-info mx-4 my-1">
      <div className="text-[14px text-[#333] font-bold   ">
        Öne Çıkan Bilgiler
      </div>
      <div className="content-desciriptions">
        <ul className="ul text-[rgb(51,51,51)] text-[14px] max-h-[220px] ">
          <li className="li ml-3 leading-8">
            15 gün içinde ücretsiz iade. Detaylı bilgi için
            <a href="#">
              <span className="underline"> tıklayınız.</span>
            </a>
          </li>
          <li className="li ml-3 leading-8">
            Bu ürün{" "}
            <a href="#" className="font-bold underline">
              AVVA
            </a>{" "}
            tarafından gönderilecektir.
          </li>
          <li className="li ml-3 leading-8 ">
            Bu üründen en fazla 10 adet sipariş verilebilir. 10 adetin
            üzerindeki siparişleri Trendyol iptal etme hakkını saklı tutar.
          </li>
          <li className="li ml-3 leading-8">
            Kampanya fiyatından satılmak üzere 5 adetten fazla stok sunulmuştur.
          </li>
          <li className="li ml-3 leading-8">
            İncelemiş olduğunuz ürünün satış fiyatını satıcı belirlemektedir.
          </li>
        </ul>
        <div className="all-features relative">
          <div className="opacity-layout"></div>
          <a href="#detail">
            <button id="" className=" all-property ">
              {" "}
              ÜRÜNÜN TÜM ÖZELLİKLERİ{" "}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductFeaturedInformation;
