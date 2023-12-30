import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./SlideT.css";
import photo1 from "./../../image/home3.png";
import photo2 from "./../../image/home2.jpg";
// import photo3 from './../../image/slide3.png'

const SliText = [
  {
    id: 1,
    src: photo1,
    title1: "اخبار1",
    title2: "+500 مشتری",
    text1:
      "کلید ارتباط موثر با جهان سخن گفتن به زبان جهانیان است. خدمات ترجمه تخصصی ما که در کلاس جهانی ارائه می‌شود به شما کمک می‌کند بازارهای جدیدی بیابید و خود را به خوبی به شرکای بین المللی معرفی کنید. همچنین، طیف گسترده مترجم‌های ما، شما را قادر می‌سازد تخصصی‌ترین متون آکادمیک را بر اساس استانداردهای پذیرش معتبرترین ژورنال‌ها ترجمه کنید.",
    date: "1.2.2023",
    text2: "براساس استانداردهای پذیرش معتبرترین ژورنال‌ها ترجمه کنید",
    text3:"فحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند."
  },
  {
    id: 2,
    src: photo2,
    title1: "اخبار2",
    title2: "300 مشتری",
    text1:
      "کلید ارتباط موثر با جهان سخن گفتن به زبان جهانیان است. خدمات ترجمه تخصصی ما که در کلاس جهانی ارائه می‌شود به شما کمک می‌کند بازارهای جدیدی بیابید و خود را به خوبی به شرکای بین المللی معرفی کنید. همچنین، طیف گسترده مترجم‌های ما، شما را قادر می‌سازد تخصصی‌ترین متون آکادمیک را بر اساس استانداردهای پذیرش معتبرترین ژورنال‌ها ترجمه کنید.",
    date: "3.5.2023",
    text2: "بر اساس استانداردهای پذیرش معتبرترین ژورنال‌ها ترجمه کنید",
    text3:"فحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند."
  },
];
const SlideT = () => {
  return (
    <div className="Conntainer" >
      <div>
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
         style={{paddingBottom:"40px"}}
        >
          {SliText.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="row mb-6 justify-evenly" style={{padding:"0 20px"}}>
                <div className=" col-sm-12 col-lg-5">
                  <div>
                    <h1
                    className="font-iransans"
                      style={{
                        fontSize: "40px",
                        fontWeight: "bold",
                        marginBottom: "2rem",
                      }}
                    >
                      {item.title2}
                    </h1>
                    <p className="font-iransans" style={{color:"#000",fontSize:"16px",fontWeight:"bold",textAlign:"justify",marginBottom:"2rem"}}>{item.text3}</p>
                    <p className="font-iransans" style={{ textAlign: "justify", color: "#7b7777",fontSize:"12px",fontWeight:"bold" }}>
                      {item.text1}
                    </p>
                  </div>
                </div>
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SlideT;
