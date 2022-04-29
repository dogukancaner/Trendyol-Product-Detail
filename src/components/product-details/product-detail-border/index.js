import React from "react";
const DetailBorder = () => {
  return (
    <div id="detail" className="detail-border   ">
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <img
          className="detail-image   "
          src="https://cdn.dsmcdn.com/ty379/product/media/images/20220401/21/80585873/433354895/1/1_org_zoom.jpg"
        />
        <div>
          <h3 className="detail-name p-5 flex  ">
            {" "}
            Avva Erkek Multicolour Baskılı Küba Yaka Relaxed Fit Kısa Kol Gömlek
            A21y2106
          </h3>
          <ul className="detail-list p-5">
            <li className="list ml-3 leading-8">
              Bu üründen en fazla 10 adet sipariş verilebilir. 10 adetin
              üzerindeki siparişleri Trendyol iptal etme hakkını saklı tutar.
            </li>
            <li className="list ml-3 leading-8">
              Kampanya fiyatından satılmak üzere 5 adetten fazla stok
              sunulmuştur.
            </li>
            <li className="list ml-3 leading-8">
              İncelemiş olduğunuz ürünün satış fiyatını satıcı belirlemektedir.
            </li>
            <li className="list ml-3 leading-8">
              Bir ürün, birden fazla satıcı tarafından satılabilir. Birden fazla
              satıcı tarafından satışa sunulan ürünlerin satıcıları ürün için
              belirledikleri fiyata, satıcı puanlarına, teslimat statülerine,
              ürünlerdeki promosyonlara, kargonun bedava olup olmamasına ve
              ürünlerin hızlı teslimat ile teslim edilip edilememesine,
              ürünlerin stok ve kategorileri bilgilerine göre sıralanmaktadır.
            </li>
          </ul>
        </div>
      </div>
      <hr className="space-border" />
      <div className="title-two">
        <h2 className="detail-attributes-title font-bold">Ürün Özellikleri</h2>
        <ul className="detail-attr-container flex flex-wrap">
          <span>Renk</span>
          <span>
            <b>Çok Renkli</b>
          </span>
        </ul>
      </div>
    </div>
  );
};

export default DetailBorder;
