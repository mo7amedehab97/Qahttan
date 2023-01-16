import React from "react";
import "./index.css";
import Logo from "../../assets/logo-min (1).png";
const Footer = () => {
  return (
    <footer className="footer_container">
      <section class="custom-shape-divider-top-1673875243">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </section>
      <section className="footer_details">
        <article className="footer_content">
          <ul>
            <li>
              <img
                src={Logo}
                alt="website logo image"
                loading="lazy"
                width={100}
                height={100}
              />
            </li>
            <li>
              <p>
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص.
              </p>
            </li>
          </ul>
          <ul>
            <h3>خدماتنا</h3>
            <li>تنطيف مخازن </li>
            <li>استقدام عمال اجانب</li>
            <li>استقدام ايدي عاملة باسعار مناسبة</li>
          </ul>
          <ul>
            <h3>تواصل معنا</h3>
            <li>
              <button>اطلب الخدمة الان</button>
            </li>
          </ul>
        </article>
        <article className="copyright">
          <p>جميع الحقوق محفوظة &copy; 2022 مكتب قحطان</p>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
