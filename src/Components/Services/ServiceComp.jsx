const ServiceComp = ({ data }) => {
  return (
    <article className="service_holder">
      <img src={data?.img} alt="service image avatar" loading="lazy" />
      <h3>{data.name}</h3>
      <p>{data.description}</p>
    </article>
  );
};

export default ServiceComp;
