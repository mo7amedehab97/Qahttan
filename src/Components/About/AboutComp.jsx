import React from "react";
import linesLeft from "../../assets/Group 143.svg";
import "./index.css";
import bannerBackground1 from "../../assets/image_2-removebg-preview.png";
const AboutComp = () => {
  return (
    <div className="about_container">
      <div className="contact_custom_title">
        <h2>من نحن</h2>
        <img className="imageline" src={linesLeft} />
      </div>
      <div className="aboutcomp_details">
        <p>
          شركة قحطان الرائدة في مجال الاستقدام تمنحك راحة البال وتختصر عليك
          الاستقدام خطوات بسيطة تستطيع الحصول على متخصصين من جميع الدول فقط
          تواصل معنا عبر واتساب لدينا فريق ذو خبرة عالية لأي مهمة
        </p>
        <div className="aboutcomp_img_holder">
          <img src={bannerBackground1} alt="banner image cover " />
        <span></span>
        </div>
      </div>
    </div>
  );
};

export default AboutComp;
