import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="banner"
      />
      <div className="home__row">
        <Product
          id="1"
          title="boAt Xtend Talk with Advanced Dedicated Bluetooth Calling Chip, Built-in Alexa, 1.69 HD Display, Premium Design, 60+ Sports Modes, vO2 Max, HR & SpO2 Monitor & Ambient Sound Detection(Teal Green)"
          price={2999}
          rating={4}
          image="https://m.media-amazon.com/images/I/61ZSy2Fe4kL._SX679_.jpg"
        />
        <Product
          id="2"
          title="HP Victus Gaming Latest AMD Ryzen 7-5800H 16.1 inch(40.9 cm) FHD Gaming Laptop (16GB RAM/ 512GB SSD/4Gb RTX 3050 Graphics/Flicker Free/144Hz Display/B&O/Backlit Kb/Win 11/MSO/Xbox Pass) 16-e0351ax"
          price={84490}
          rating={5}
          image="https://m.media-amazon.com/images/I/41crt2IW+VL._SY300_SX300_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="3"
          title="Echo Dot (3rd Gen), Certified Refurbished, Black – Improved smart speaker with Alexa – Like new, backed with 1-year warranty"
          price={2999}
          rating={4}
          image="https://www.wordstream.com/wp-content/uploads/2021/07/amazon-seo-product-images.jpg"
        />
        <Product
          id="4"
          title="Fire TV Stick with Alexa Voice Remote (includes TV and app controls) | HD streaming device"
          price={3999}
          rating={5}
          image="https://m.media-amazon.com/images/I/51glVwLlgaL._AC_SX522_.jpg"
        />

        <Product
          id="5"
          title="Rode VMGOII VideoMic GO II Lightweight Directional Microphone"
          price={9998}
          rating={5}
          image="https://m.media-amazon.com/images/I/61cte-8QJ-L._SX679_.jpg"
        />
      </div>
      <div className="home__row">
      <Product
          id="6"
          title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
          price={155000}
          rating={5}
          image="https://m.media-amazon.com/images/I/71MlcO29QOL._SX679_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
