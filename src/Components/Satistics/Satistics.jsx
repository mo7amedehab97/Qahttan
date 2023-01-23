import Title from "../Title/Title";
import "./index.css";
const satisticsData = [
  {
    id: 1,
    number: 70,
    name: "العروض",
  },
  {
    id: 2,
    number: 12,
    name: "خدمات مختلفة",
  },
  {
    id: 3,
    number: 7,
    name: "مكتب نشط",
  },
  {
    id: 4,
    number: 16,
    name: "جنسية ",
  },
];
const Satistics = () => {
  return (
    <section
      className="satistics_container
    "
    >
      <Title title="احصائيات" />
      <article className="satistic_details">
        {satisticsData?.map((item) => {
          return (
            <div key={item.id}>
              <h2>{item.number} +</h2>
              <p>{item?.name}</p>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Satistics;
