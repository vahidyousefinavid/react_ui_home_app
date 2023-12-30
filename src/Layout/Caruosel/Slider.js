import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide1 from "../../image/image new/compressor/slide1.webp";
import Slide2 from "../../image/image new/compressor/slide2.jpg";
import Slide3 from "../../image/image new/compressor/slide3.jpg";
import Slide4 from "../../image/image new/compressor/slide4.jpg";
import Slide5 from "../../image/image new/compressor/slide5.jpg";
import Slide6 from "../../image/image new/compressor/slide2.jpg";
import Slide7 from "../../image/image new/slide7.jpg";
import NextIcon from "../../image/next-svgrepo-com.svg";
import "swiper/css";
import "swiper/css/pagination";
import "./Slider.css";
import { Pagination } from "swiper/modules";

const Slider = () => {
  const Slides = [
    { id: 1, src: Slide4 },
    { id: 2, src: Slide1 },
    { id: 3, src: Slide4 },
    { id: 4, src: Slide7 },
    { id: 5, src: Slide5 },
    { id: 6, src: Slide6 },
    { id: 7, src: Slide7 },
  ];

  const PageProd = [
    { id: 1, title: "بازسازی", Page: "/SlideProd" },
    { id: 2, title: "داخلی و خارجی", Page: "/SlideProd2" },
    { id: 3, title: "ساختمان ها", Page1: "/SlodeProd3" },
    { id: 4, title: "همه موارد", Page1: "/SlideProd4" },
  ];
  const [hover, setHover] = useState();
  const handleMouseEnter = (event) => {
    setHover(event);
  };

  const handleMouseLeave = (event) => {
    setHover(event);
  };
  return (
    <div className="Containerr">
      <div
        className="row justify-evenly"
        style={{ marginBottom: "3rem", alignItems: "center" }}
      >
        <div className="col-sm-12 order-2 col-lg-6  text-center">
          <ul className="listButt">
            {PageProd.map((item, index) => (
              <li className="List" key={index}>
                {/* <Link className="List"  to={item.Page}> */}
                {item.title}
                {/* </Link> */}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-sm-12 order-1 col-lg-3  text-center">
          <div>
            <h1
              className="font-iransans"
              style={{ fontSize: "40px", fontWeight: "bold" }}
            >
              آخرین پروژه ها
            </h1>
          </div>
        </div>
      </div>
      <div>
        <Swiper
          style={{ marginBottom: "50px", paddingBottom: "50px" }}
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {Slides.map((item, index) => (
            <SwiperSlide key={index} style={{ position: "relative" }}>
              <img style={{ height: "25rem" }} src={item.src} />
              <div
                className="StleCover"
                onMouseEnter={() => {
                  handleMouseEnter(item.id);
                }}
                onMouseLeave={() => handleMouseLeave()}
              >
                <p
                  className="font-iransans"
                  style={{
                    position: "absolute",
                    top: hover === item.id ? "30%" : "15%",
                    textAlign: "justify",
                    fontSize: "15px",
                    fontWeight: "bold",
                    padding: "0 15px",
                  }}
                >
                  کلید ارتباط موثر با جهان سخن گفتن به زبان جهانیان است. خدمات
                  ترجمه تخصصی ما که در کلاس جهانی ارائه می‌شود به شما کمک می‌کند
                  بازارهای جدیدی بیابید و خود را به خوبی به شرکای بین المللی
                  معرفی کنید.
                </p>
              </div>
              <h4
                className="font-iransans"
                style={{
                  position: "absolute",
                  bottom: hover === item.id ? "20rem" : "3rem",
                  left: "3px",
                  fontSize: "20px",
                  fontWeight: "bold",
                  zIndex: "100",
                }}
              >
                ازخشت اول با شما هستیم
              </h4>
              <span
                className="font-iransans absolute bottom-3 left-5"
                style={{
                  color: "#000",
                  fontSize: "15px",
                  fontWeight: "bold",
                  zIndex: "100",
                }}
              >
                دیدن پروژه
                <span
                  style={{
                    position: "absolute",
                    left: "4.5rem",
                    bottom: "0.4rem",
                    width: "12%",
                  }}
                >
                  <img src={NextIcon} />
                </span>
              </span>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
