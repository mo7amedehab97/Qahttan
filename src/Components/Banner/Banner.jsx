import "./index.css";
import bannerBackground1 from "../../assets/Rectangle 1.svg";
import bannerBackground2 from "../../assets/image 2.svg";
import bannerBackground3 from "../../assets/image_2-removebg-preview.png";
const Banner = () => {
  return (
    <section className="banner_container">
      
      <article className="banner_background_mobile">
        <div className="nav_details">
          <h1>
            اختار يلي <span> بخلصك</span> <br />
            من مره وحده!
          </h1>

          <p>ما تشيل هم كلمنا بنساعدك احجز خدمة مضمونة بكبسة زر</p>
          <button>تواصل معنا !</button>
        </div>
        <div className="nav_image">
          <img src={bannerBackground3} alt="" />
        </div>
      </article>
    </section>
  );
};

export default Banner;
