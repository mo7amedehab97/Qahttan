import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import "./index.css";
import QuoteCard from "./QuoteCard";
import person1 from "../../assets/person1.jpg";
import person2 from "../../assets/perosn2.jpg";
import person3 from "../../assets/person3.jpg";
import person4 from "../../assets/women1.jpg";

const quotes = [
  {
    name: "نواف",
    desc: "مكتب قطان مكانك المثالي لأيجاد العمالة المنزلية ",
    img: person1,
    gender: "male",
  },
  {
    name: "صخر",
    desc: "دائما يقومون بعمل جيد وبالوقت المحدد, انا سعيد بالتعامل معهم ",
    img: person2,
    gender: "male",
  },
  {
    name: "مشاعل",
    desc: "خدمات ممتازة سرعة بالرد وناس ذوق اكيد ساتعامل معهم ثانيا ",
    img: person4,
    gender: "female",
  },
  {
    name: "أمجد",
    desc: "لا يوجد تعقيدات من بداية طلب الخدم للدفع مقابلها ارشحهم لمساعدتك باستقدام العمالة",
    img: person3,
    gender: "male",
  },
];
const WhatTheySay = () => {
  return (
    <section className="what_they_say_container">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
          },
          // when window width is >= 1200px
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {quotes.length &&
          quotes.map((quote) => (
            <SwiperSlide key={Math.random()}>
              <QuoteCard quote={quote} />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default WhatTheySay;
