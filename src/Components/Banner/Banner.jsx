import "./index.css";
import bannerBackground1 from "../../assets/Rectangle 1.svg";
import bannerBackground2 from "../../assets/image 2.svg";
const Banner = () => {
  return (
    <section className="banner_container">
      <article className="banner_background">
        <img src={bannerBackground2} alt="banner background " />
        <img src={bannerBackground1} alt="banner background " />
        <div className="nav_details">
          <h3>
            اختار يلي <span> بخلصك</span> <br />من مره وحده!
          </h3>
          
          <p>ما تشيل هم كلمنا بنساعدك احجز خدمة مضمونة بكبسة زر</p>
          <button>تواصل معنا !</button>
        </div>
      </article>
    </section>
  );
};

export default Banner;
