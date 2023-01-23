import "./index.css";
import ServiceComp from "./ServiceComp";
import img1 from "../../assets/ico1.svg";
import img2 from "../../assets/ico2.svg";
import img3 from "../../assets/nurse.svg";
import img4 from "../../assets/car.svg";
import img5 from "../../assets/security.svg";
import { motion } from "framer-motion";
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
    img: img5,
  },
  {
    id: 3,
    name: "أستقدام سائق",
    description:
      " نوفر لك نخبة من افضل السائقين لديهم خبرة في القيادة داخل المملكة من مختلف الجنسيات",
    img: img4,
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
    name: "أستقدام ممرضين",
    description:
      "كما ونوفر ايضا ممرضين وممرضات لديهم خبرة. مع امكانية الطلب حسب الحالة المرضية",
    img: img3,
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
