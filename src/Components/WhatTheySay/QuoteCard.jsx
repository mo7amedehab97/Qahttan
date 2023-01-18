function QuoteCard({ quote: { name, desc, img, gender } }) {
  return (
    <div className="quote-card">
      <img
        width={20}
        height={20}
        src={img}
        alt="person image"
        className={`person-img ${gender}`}
        loading="lazy"
      />
      <div  className={`quote-words ${gender}_holder`}>
        <p>{desc}</p>
        <h3>{name}</h3>
      </div>
    </div>
  );
}

export default QuoteCard;
