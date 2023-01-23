import "./index.css";
import Image1 from "../../assets/image 5.svg";
import Trust from "../../assets/reliability.png";
import Reservation from "../../assets/Reservation.png";
import Discount from "../../assets/discounts.png";
import Support from "../../assets/support.png";
import SingleComp from "./SingleComp";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
const why_us = [
  {
    id: 1,
    name: "الموثقية",
    description:
      "نطمح نحن في زهران للتمهيد للتعاون بعيد الاجل وهذا ما يجعلنا موثوقين",
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
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: { type: "spring", duration: 2, bounce: 0.5 },
      });
    }
    if (!inView) {
      animation.start({
        x: -250,
      });
    }
  }, [inView]);

  return (
    <section className="why_us_container">
      <div className="why_us_image">
        <img src={Image1} alt="why us section cover image " loading="lazy" />
      </div>
      <motion.div ref={ref} animate={animation} className="why_us_list">
        {why_us?.map((item) => (
          <SingleComp key={item.id} data={item} />
        ))}
      </motion.div>
    </section>
  );
};

export default WhyUs;
