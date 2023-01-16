function QuoteCard({ quote: { name, desc, img } }) {
  return (
    <div className="quote-card">
      <img
        width={20}
        height={20}
        src={img}
        alt="person image"
        className="person-img"
        loading="lazy"
      />
      <div className="quote-words">
        <p>{desc}</p>
        <h3>{name}</h3>
      </div>
    </div>
  );
}

export default QuoteCard;
