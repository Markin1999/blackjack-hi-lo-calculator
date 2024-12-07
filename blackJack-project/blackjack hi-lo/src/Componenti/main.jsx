import blackjeckImage from "../assets/blackjack.webp";

export default function Main() {
  return (
    <div className="image">
      <img
        src={blackjeckImage}
        alt="Blackjack"
        className="w-[800px] h-[600px] object-cover"
      />
    </div>
  );
}
