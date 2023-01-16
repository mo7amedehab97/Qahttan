import Right from "../../assets/Group 142.svg";
import Left from "../../assets/Group 142.svg";
import "./index.css";
const Title = ({ title }) => {
  return (
    <article className="title_container">
      <img src={Left} alt="Left title icon" loading="lazy" />
      <h1>{title}</h1>
      <img src={Right} alt="right title icon" loading="lazy" />
    </article>
  );
};

export default Title;
