import React from "react";
import "./ListH.css";
import Home1 from "../../image/2.jpg";
import Home2 from "../../image/home2.jpg";
import Home3 from "../../image/1.jpg";
const Itemlist = [
  {
    id: 1,
    title: "خلاقانه",
    type: "اگر می‌خواهید خواننده متن فارسی‌تان را کنار نگذارد و آن را تا انتها بخواهند ",
    src: Home1,
    dir: "rtl",
    width: "80%",
  },
  {
    id: 2,
    title: "ساخت سریع",
    type: "اگر می‌خواهید خواننده متن فارسی‌تان را کنار نگذارد و آن را تا انتها بخواهند، ",
    src: Home2,
    dir: "ltr",
    width: "80%",
  },
  {
    id: 3,
    title: "صرفه جویی در پول",
    type: "اگر می‌خواهید خواننده متن فارسی‌تان را کنار نگذارد و آن را تا انتها بخواهند، ",
    src: Home3,
    dir: "rtl",
    width: "80%",
    height: "20rem",
  },
];

const ListH = () => {
  return (
    <>
      <div className="Containers" style={{ marginTop: "5rem" }}>
        <div className="row StyleHeader items-center mb-12" >
          <div className="col-6"  style={{ textAlign: "start" }}>
            <div>
              <h1 className="font-iransans font-bold text-4xl">خدمات ما</h1>
            </div>
          </div>
          <div className="col-6" style={{textAlign:"-webkit-left"}}>
            <div>
              <img  src={require("../../image/icons8-target-50.png")} />
            </div>
          </div>
        </div>
        <div className="row">
          {Itemlist.map((item, index) => (
            <div key={index} className="col-sm-12">
              <div
                className="row styleMargin mb-28 justify-between sm: mx-auto"
                style={{ direction: `${item.dir}` }}
              >
                <div
                  className="col-sm-6 col-lg-3"
                  style={{ position: "relative" }}
                >
                  <div className="styleLine">
                    <h1
                      className="font-iransans"
                      style={{ fontSize: "20px", fontWeight: "bold" }}
                    >
                      {item.title}
                    </h1>
                    <p
                      className="font-iransans"
                      style={{ color: "#7b7777", fontWeight: "bold" }}
                    >
                      {item.type}
                    </p>
                    <span
                      style={{
                        color: "#ec9146",
                        fontSize: "10px",
                        fontWeight: "bold",
                        cursor: "pointer",
                      }}
                    >
                      بیشتر بدانید
                    </span>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-8">
                  <div className="styleDivImg" style={{ width: "100%" }}>
                    <img
                      className="styleImag"
                      style={{
                        width: `${item.width}`,
                        height: `${item.height}`,
                      }}
                      src={item.src}
                    />
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ListH;
