
const Card = ({ id, name, email }) => {
  return (
  <section className="bg-light-pink dib br3 pa3 ma2 grow bw2 shadow-5 tc">
    <img src={`https://robohash.org/${id}.png?200x200`} alt="robots" />
    <section>
      <h2>{name}</h2>
      <p>{email}</p>
    </section>
  </section>
    );
}

export default Card;
