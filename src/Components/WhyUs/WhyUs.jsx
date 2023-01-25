import "./index.css";
import Image1 from "../../assets/image 5.svg";
import Trust from "../../assets/reliability.png";
import Reservation from "../../assets/Reservation.png";
import Discount from "../../assets/discounts.png";
import Support from "../../assets/support.png";
import SingleComp from "./SingleComp";
const why_us = [
  {
    id: 1,
    name: "الموثقية",
    description:
      "نطمح نحن في قحطان للتمهيد للتعاون بعيد الاجل وهذا ما يجعلنا موثوقين",
    srcImg: Trust,
  },
  {
    id: 2,
    name: "الحجز اونلاين",
    description:
      "خطوات بسيطة تفصلك عن التواصل مع فريقنا للحجز والاستفسار عن خدماتنا",
    srcImg: Reservation,
  },
  {
    id: 3,
    name: "خصومات دائمة",
    description: "نسعي دائما لتوفير افضل العروض والخصومات لعملائنا الكرام",
    srcImg: Discount,
  },
  {
    id: 4,
    name: "دعم متواصل",
    description: "يمكنك دوما التواصل مع فريق قحطان وسنكون حريصين علي ارضائكم",
    srcImg: Support,
  },
];
const WhyUs = () => {
  return (
    <section className="why_us_container">
      <div className="why_us_image">
        <img src={Image1} alt="why us section cover image " loading="lazy" />
      </div>
      <div className="why_us_list">
        {why_us?.map((item) => (
          <SingleComp key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
