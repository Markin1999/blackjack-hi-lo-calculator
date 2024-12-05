import blackjeckImage from "../assets/blackjack.webp";

export default function Main() {
  return (
    <div className="relative flex justify-center items-center">
      <img
        src={blackjeckImage}
        alt="Blackjack"
        className="w-[800px] h-[600px] object-cover"
      />
    </div>
  );
}
