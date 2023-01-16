const SingleComp = ({ data }) => {
  return (
    <section className="why_us_comp_container">
      <img src={data?.srcImg} alt="why us section cover image " />
      <div className="why_us_comp_details">
        <h3>{data?.name}</h3>
        <p>{data?.description}</p>
      </div>
    </section>
  );
};

export default SingleComp;
