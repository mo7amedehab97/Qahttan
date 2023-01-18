import "./index.css";
import ServiceComp from "./ServiceComp";
import img1 from "../../assets/ico1.svg";
import img2 from "../../assets/ico2.svg";
import img3 from "../../assets/ico3.svg";
const servicesArray = [
  {
    id: 1,
    name: "أستقدام عمالة",
    description:
      "أستقدام عامل/عاملة بخبرات عالية - خادمات-شغالات من الفلبين-اوغندا-كينيا-بنقبلديش وغيرها ",
    img: img1,
  },
  {
    id: 2,
    name: "أستقدام حراس",
    description:
      "كما نوفر حراس مبني ومزارع  لحديقة المنزل وغيرها من المهن الاخري بخبرة عالية وضمان",
    img: img3,
  },
  {
    id: 3,
    name: "أستقدام طباخين",
    description:
      "وكذلك نوفر طباخين وطباخات للأحتياجات المنزلية المختلفة لديهم خبرة في مجال الطبخ بكافة انواعه",
    img: img2,
  },
  {
    id: 4,
    name: "أستقدام طباخين",
    description:
      "وكذلك نوفر طباخين وطباخات للأحتياجات المنزلية المختلفة لديهم خبرة في مجال الطبخ بكافة انواعه",
    img: img2,
  },
  {
    id: 5,
    name: "أستقدام طباخين",
    description:
      "وكذلك نوفر طباخين وطباخات للأحتياجات المنزلية المختلفة لديهم خبرة في مجال الطبخ بكافة انواعه",
    img: img2,
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
