import React from "react";
import "./Footer.css";
import Logo from "../../image/Logo.svg";
import Insta from '../../image/image new/footer/icons8-insta (1).svg'
import Face from '../../image/image new/footer/icons8-facebook (2).svg'
import G from '../../image/image new/footer/icons8-google-old (1).svg'
import Twitter from '../../image/icons8-twitter.svg'
// import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div
      className="Conntaineer font-iransans"
      style={{
        marginTop: "60px",
        backgroundColor: "#2d2c33",
        color: "#fff",
        padding: "5rem",
      }}
    >
      <div className="row" style={{ position: "relative" }}>
        <div className="col-sm-12 col-lg-3 mb-10">
          <div style={{ borderTop: "1px solid #fff" }}>
            <h1
              style={{
                fontSize: "30px",
                fontWeight: "bold",
                marginBottom: "15px",
                paddingTop: "10px",
              }}
            >
              خبرنامه
            </h1>
            <p
              style={{
                fontSize: "10px",
                fontWeight: "bold",
                color: "#7b7777",
                marginBottom: "12px",
              }}
            >
              کلید ارتباط موثر با جهان سخن گفتن به زبان جهانیان است. خدمات ترجمه
              تخصصی ما که در کلاس جهانی ارائه می‌شود به شما کمک می‌کند
            </p>
            <input type="text" placeholder="آدرس ایمیل..." />
          </div>
        </div>
        <div className="col-sm-12 col-lg-3 mb-10">
          <div style={{ borderTop: "1px solid #fff" }}>
            <h1
              style={{
                fontSize: "30px",
                fontWeight: "bold",
                marginBottom: "15px",
                paddingTop: "10px",
              }}
            >
              لینک های سریع
            </h1>
            <h3
              style={{
                fontSize: "10px",
                fontWeight: "bold",
                color: "#7b7777",
                marginBottom: "12px",
              }}
            >
              مورد اول
            </h3>
            <h3
              style={{
                fontSize: "10px",
                fontWeight: "bold",
                color: "#7b7777",
                marginBottom: "12px",
              }}
            >
              مورد دوم
            </h3>
            <h3
              style={{
                fontSize: "10px",
                fontWeight: "bold",
                color: "#7b7777",
                marginBottom: "12px",
              }}
            >
              مورد سوم
            </h3>
            <h3
              style={{
                fontSize: "10px",
                fontWeight: "bold",
                color: "#7b7777",
                marginBottom: "12px",
              }}
            >
              مورد چهارم
            </h3>
          </div>
        </div>
        <div className="col-sm-12 col-lg-3 mb-10">
          <div style={{ borderTop: "1px solid #fff" }}>
            <h1
              style={{
                fontSize: "30px",
                fontWeight: "bold",
                marginBottom: "15px",
                paddingTop: "10px",
              }}
            >
              شرکت
            </h1>
            <h3
              style={{
                fontSize: "10px",
                fontWeight: "bold",
                color: "#7b7777",
                marginBottom: "12px",
              }}
            >
              درباره ما
            </h3>
            <h3
              style={{
                fontSize: "10px",
                fontWeight: "bold",
                color: "#7b7777",
                marginBottom: "12px",
              }}
            >
              تیم
            </h3>
            <h3
              style={{
                fontSize: "10px",
                fontWeight: "bold",
                color: "#7b7777",
                marginBottom: "12px",
              }}
            >
              مشاغل
            </h3>
            <h3
              style={{
                fontSize: "10px",
                fontWeight: "bold",
                color: "#7b7777",
                marginBottom: "12px",
              }}
            >
              دفاتر
            </h3>
          </div>
        </div>
        <div className="col-sm-12 col-lg-3 mb-10">
          <div>
            <h6 style={{ width: "6rem", marginBottom: "15px" }}>
              <img style={{ color: "#fff" }} src={Logo} />
            </h6>
            <p
              style={{
                fontSize: "10px",
                fontWeight: "bold",
                color: "#7b7777",
                marginBottom: "12px",
              }}
            >
              کلید ارتباط موثر با جهان سخن گفتن به زبان جهانیان است. خدمات ترجمه
              تخصصی ما که در کلاس جهانی ارائه می‌شود به شما کمک می‌کند
            </p>
           
            <div
              className="row StyleObject"
              style={{ position: "absolute", bottom: "-3rem",left:"3rem" }}
            >
              <div className="col-3 col-lg-3" >
                <div>
                  <img src={Twitter} />
                </div>
              </div>
              <div className="col-3 col-lg-3">
                <div
                
                >
                  <img src={Insta} />
                </div>
              </div>

              <div className="col-3 col-lg-3">
                <div
                
                >
                  <img src={G} />
                </div>
              </div>

              <div className="col-3 col-lg-3">
                <div 

                  >
                  <img src={Face} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
