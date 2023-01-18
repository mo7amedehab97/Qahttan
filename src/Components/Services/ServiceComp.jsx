
const ServiceComp = ({ data }) => {
  return (
    <article className="service_holder" >
      <div className="service_image_ico">
        <img src={data?.img} alt="service icon avatar" loading="lazy" />
      </div>
      <h3>{data.name}</h3>
      <p>{data.description}</p>
    </article>
  );
};

export default ServiceComp;
