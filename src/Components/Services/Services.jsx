import "./index.css";
import ServiceComp from "./ServiceComp";
const servicesArray = [
  {
    id: 1,
    name: "تنظيف السجاد",
    description:
      "يجب علينا دائما أن نتواجد في مكان نظيف ومرتب لذلك نتوقع دائما أن يكون منزلك بهذا الشكل ",
    img: "https://media.istockphoto.com/photos/the-countdown-to-clean-shiny-floors-picture-id1291180143?b=1&k=20&m=1291180143&s=170667a&w=0&h=Fc66R5Pn_Gs2K1XSKrwqX49aPmVwqINbY_oKqBh5IRo=",
  },
  {
    id: 2,
    name: "تنظيف السيارات",
    description:
      "نعرف أن الانتظار طويلا في محطات البنزين لغسيل السيارة الخاصة بك تعمل على تضيع الوقت منكشكل ",
    img: "https://media.istockphoto.com/photos/the-car-wash-picture-id1128018249?b=1&k=20&m=1128018249&s=170667a&w=0&h=Jdq3AGdRlqwp72_pxUBthLrCPM6NKsfpp01tGD07s7w=",
  },
  {
    id: 3,
    name: "تنظيف منازل",
    description:
      "ندرك صعوبة القيام بتنظيف السجاد من قبل النساء في البيوت لأنها تحتاج مجهود عضلي",
    img: "https://media.istockphoto.com/photos/worker-removing-dirt-from-carpet-indoors-closeup-cleaning-service-picture-id1350817454?b=1&k=20&m=1350817454&s=170667a&w=0&h=zA7ymYDnadILctcL-ZlIGNtWdAlUckoN-rvZSpIPpBs=",
  },
];
const Services = () => {
  return (
    <section className="services_container" id="services">
      {servicesArray?.map((item) => (
        <ServiceComp key={item.id} data={item} />
      ))}
    </section>
  );
};

export default Services;
