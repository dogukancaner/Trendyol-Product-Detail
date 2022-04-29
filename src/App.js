import slider from "react-slick/lib/slider";
import "./App.css";
import BreadCrumb from "./components/marketing-product/breadcrumb";
import DetailBorder from "./components/product-details/product-detail-border";
import ProductImage from "./components/product-details/product-images";
import ProductRating from "./components/product-details/product-rating";
import ProductSlider from "./components/product-details/product-slider";
import ProductWidget from "./components/product-details/product-widgets";

const App = () => {
  const sliderObject = [
    {
      image:
        "https://cdn.dsmcdn.com/ty372/product/media/images/20220327/18/76814355/427339154/1/1_org_thumb.jpg",
      brand: "Avva",
      title:
        "Erkek Bej Baskılı Küba Yaka Relaxed Fit Yırtmaçlı Kısa Kol Gömlek",
      price: "371,99 TL",
    },
    {
      image:
        "https://cdn.dsmcdn.com/ty400/product/media/images/20220415/13/92546412/450195829/1/1_org_thumb.jpg",
      brand: "Avva",
      title:
        "Erkek Yağ Yeşili Baskılı Küba Yaka Relaxed Fit Yırtmaçlı Kısa Kol Gömlek",
      price: "335,72 TL",
    },
    {
      image:
        "https://cdn.dsmcdn.com/ty361/product/media/images/20220314/18/69855468/333953842/1/1_org_thumb.jpg",
      brand: "Pull&Bear",
      title: "Basic Kareli Gömlek",
      price: "479,95 TL",
    },
    {
      image:
        "https://cdn.dsmcdn.com/ty344/product/media/images/20220227/18/59595241/398998703/1/1_org_thumb.jpg",
      brand: "Karpefingo",
      title: "Erkek Viskon Kısa Kol Siyah Gömlek ",
      price: "164,90 TL",
    },
    {
      image:
        "https://cdn.dsmcdn.com/ty346/product/media/images/20220301/19/60790713/355759361/1/1_org_thumb.jpg",
      brand: "Pull&Bear",
      title: "Basic Kareli Gömlek",
      price: "479,95 TL",
    },
    {
      image:
        "https://cdn.dsmcdn.com/ty374/product/media/images/20220327/18/76815848/427341721/1/1_org_thumb.jpg",
      brand: "Avva ",
      title:
        "Erkek Turuncu Baskılı Küba Yaka Relaxed Fit Yırtmaçlı Kısa Kol Gömlek",
      price: "371,99 TL",
    },
    {
      image:
        "https://cdn.dsmcdn.com/ty277/product/media/images/20211222/16/15138238/343173281/1/1_org_thumb.jpg",
      brand: "Pull&Bear",
      title: " Basic Kareli Gömlek",
      price: "479,95 TL",
    },
    {
      image:
        "https://cdn.dsmcdn.com/ty378/product/media/images/20220331/13/79657689/431732368/1/1_org_thumb.jpg",
      brand: "Avva",
      title: "Erkek Bej Baskılı Klasik Yaka Regular Fit Kısa Kol Viskon Gömlek",
      price: "446,39 TL",
    },
    {
      image:
        "https://cdn.dsmcdn.com/ty395/product/media/images/20220412/13/89160111/445482087/1/1_org_thumb.jpg",
      brand: "Avva",
      title:
        "Erkek Turuncu Baskılı Küba Yaka Relaxed Fit Yırtmaçlı Kısa Kol Gömlek",
      price: "446,39 TL",
    },
    {
      image:
        "https://cdn.dsmcdn.com/ty342/product/media/images/20220228/16/60050099/399556989/1/1_org_thumb.jpg",
      brand: "Bershka",
      title: "Denim Ince Ceket",
      price: "419,95 TL",
    },
  ];

  const sliderObjectTwo = [
    {
      image:
        "https://cdn.dsmcdn.com/ty81/product/media/images/20210306/8/69246674/149371008/1/1_org_thumb.jpg",
      brand: "Avva",
      title: "BORDO POLO YAKA T-SHIRT",
      price: "197,40 TL",
    },
    {
      image:
        "https://cdn.dsmcdn.com/ty399/product/media/images/20220416/19/93025771/75919815/1/1_org_thumb.jpg",
      brand: "GRIMELANGE ",
      title: "Ashton Erkek Siyah Baskılı Bisiklet Yaka Comfort T-shirt ",
      price: "83,69 TL",
    },
    {
      image:
        "https://cdn.dsmcdn.com/ty393/product/media/images/20220412/15/89218054/444459818/2/2_org_thumb.jpg",
      brand: "US Polo Assn",
      title: "Mavi Erkek Çocuk T-Shirt",
      price: "103,95 TL",
    },
    {
      image:
        "https://cdn.dsmcdn.com/ty335/product/media/images/20220218/9/52779873/265546354/1/1_org_thumb.jpg",
      brand: "Avva ",
      title: "Erkek Siyah Yandan Cepli Comfort Slim Fit Chino Pantolon  ",
      price: "118,74 TL",
    },
    {
      image:
        "https://cdn.dsmcdn.com/ty334/product/media/images/20220218/11/52981634/159227330/1/1_org_thumb.jpg",
      brand: "Defacto ",
      title: " Erkek Bej Slim Fit Bisiklet Yaka Basic Tişört",
      price: "69,99 TL",
    },
    {
      image:
        "https://cdn.dsmcdn.com/ty379/product/media/images/20220401/10/80244120/247382169/1/1_org_thumb.jpg",
      brand: "HUMMEL ",
      title: "Hmlsamuel Ss Tee O Yaka Normal Mavi Erkek Sweatshirt",
      price: "109,95 TL",
    },
    {
      image:
        "https://cdn.dsmcdn.com/ty148/product/media/images/20210726/14/112641677/212153448/0/0_org_thumb.jpg",
      brand: "Defacto ",
      title: " Long Fit Uzun Bisiklet Yaka Basic Tişört ",
      price: "79,99 TL",
    },
    {
      image:
        "https://cdn.dsmcdn.com/ty222/product/media/images/20211105/11/166111430/148352128/1/1_org_thumb.jpg",
      brand: "Jack & Jones",
      title: "Jack Jones Jcoberg Turk Mavi Erkek T-Shirt",
      price: "169 TL",
    },
    {
      image:
        "https://cdn.dsmcdn.com/ty269/product/media/images/20211213/12/10017579/285805679/3/3_org_thumb.jpg",
      brand: "Avva",
      title: "Ekru Baskılı Erkek Çocuk Örme T-Shirt",
      price: "59,49 TL",
    },
    {
      image:
        "https://cdn.dsmcdn.com/ty342/product/media/images/20220228/16/60050099/399556989/1/1_org_thumb.jpg",
      brand: "Bershka",
      title: "Denim Ince Ceket",
      price: "419,95 TL",
    },
  ];

  return (
    <div className="App  py-5 w-full flex  justify-center  ">
      <div className="w-full lg:max-w-[90rem]">
        <div className="gap-5 flex flex-col    ">
          <BreadCrumb />
          <div className="flex flex-col  xl:flex-row   gap-5   ">
            <ProductImage />
            <ProductWidget />
          </div>
          <ProductSlider title="Benzer Ürünler" data={sliderObject} />
          <ProductSlider
            title="Bu Ürünü Alanlar Bunları da Aldı"
            data={sliderObjectTwo}
          />

          <ProductRating />
          <DetailBorder />
        </div>
      </div>
    </div>
  );
};

export default App;
