import { motion } from "framer-motion";
const SingleComp = ({ data }) => {
  return (
    <motion.section

    className="why_us_comp_container"
    >
      <img
        src={data?.srcImg}
        loading="lazy"
        alt="why us section cover image "
      />
      <div className="why_us_comp_details">
        <h3>{data?.name}</h3>
        <p>{data?.description}</p>
      </div>
    </motion.section>
  );
};

export default SingleComp;
