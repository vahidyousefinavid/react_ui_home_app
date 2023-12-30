import React from "react";
import "./Achivement.css";

const jobs = [
  { id: 1, number: "25", title: "پروژه ها" },
  { id: 2, number: "250", title: "مشتری ها" },
  { id: 3, number: "105", title: "اعضا" },
  { id: 4, number: "126", title: "جوایز" },
];

const Achieve = () => {
  return (
    <div className="Countainer font-iransans">
      <div className="row h-full justify-evenly"  style={{margin:"0 15px"}}>
        <div className="col-sm-12 col-lg-2 self-center">
          <div className="styleRes">
            <div
              style={{
                position: "absolute",
                top: "0",
                width: "100%",
                height: "100%",
                opacity: "0.8",
                backgroundColor: "#f5cd00",
              }}
            ></div>

            <h1
              style={{
                position: "absolute",
                top: "40%",
                right: "40%",
                fontSize: "60px",
                fontWeight: "bold",
                color: "#000",
              }}
            >
              24
            </h1>
            <p
              style={{
                position: "absolute",
                top: "65%",
                right: "2rem",
                color: "#000",
                fontWeight: "bold",
                fontSize: "18px",
                width: "80%",
              }}
            >
              معتبرترین ژورنال‌ها ترجمه کنید
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-lg-5">
          <div className="StyleParag">
            <h1
              style={{
                fontSize: "40px",
                fontWeight: "bold",
                marginBottom: "20px",
                color: "#000",
              }}
            >
              دستاورد های ما
            </h1>
            <p  style={{ color: "#7b7777", fontWeight: "bold" }}>
              کلید ارتباط موثر با جهان سخن گفتن به زبان جهانیان است. خدمات ترجمه
              تخصصی ما که در کلاس جهانی ارائه می‌شود به شما کمک می‌کند بازارهای
              جدیدی بیابید و خود را به خوبی به شرکای بین المللی معرفی کنید.
              همچنین، طیف گسترده مترجم‌های ما، شما را قادر می‌سازد تخصصی‌ترین
              متون آکادمیک را بر اساس استانداردهای پذیرش معتبرترین ژورنال‌ها
              ترجمه کنید.
            </p>
          </div>
          <div className="row mt-12 font-iransans">
            {jobs.map((item, index) => (
              <div key={index} className="col-3">
                <div className="relative">
                  <h1
                    style={{
                      fontSize: "40px",
                      fontWeight: "bold",
                      color: "#f5cd00",
                    }}
                  >
                    {item.number}
                  </h1>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: "#000",
                    }}
                  >
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achieve;
