import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import "./index.css";
import QuoteCard from './QuoteCard'
const quotes = [
  {
    name: "محمد",
    desc: "دائما يقومون بعمل جيد وبالوقت المحدد, انا حقا سعيد بهذه التجربة",
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    name: "تالين",
    desc: "دائما يقومون بعمل جيد وبالوقت المحدد, انا حقا سعيد بهذه التجربة",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    name: "روز",
    desc: "دائما يقومون بعمل جيد وبالوقت المحدد, انا حقا سعيد بهذه التجربة",
    img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
  },
  {
    name: "أمجد",
    desc: "دائما يقومون بعمل جيد وبالوقت المحدد, انا حقا سعيد بهذه التجربة",
    img: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
];
const WhatTheySay = () => {
  return (
    <section className="what_they_say_container">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
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
