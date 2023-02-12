import "./index.css";
import whatsappImg from "../../assets/whatsapp1.png";

const WhatsAppComp = () => {
  return (
    <div className="whatsapp_container">
      <div className="whatsapp_col1">
        <p>تواصل معنا</p>
      </div>
      <div className="whatsapp_col2">
        <a href="http://wa.me/+966570992826" target="_blank">
          <img
            src={whatsappImg}
            alt="صورة لايقونة واتساب للتواصل    "
          />
        </a>
      </div>
    </div>
  );
};

export default WhatsAppComp;
