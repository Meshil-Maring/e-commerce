import Star from "../../assets/icons/Star";
import person1 from "../../assets/images/person/person.png";
import tshirt from "../../assets/images/t-shirt.png";
import tshirt2 from "../../assets/images/t-shirt2.png";
import Like from "../../assets/icons/Like";
import Dislike from "../../assets/icons/Dislike";

const Comment = ({ name, rating }) => (
  <div className="mt-8">
    {/* User */}
    <div className="flex justify-start">
      <img
        className="w-10 h-10 object-cover rounded-[999px] bg-amber-200 inline-block"
        src={person1}
        alt="person"
      />

      <div className="ml-4 grid grid-cols-1 justify-center items-start">
        <p className=" text-xl font-bold">{name}</p>

        <aside className="flex items-center justify-start">
          <Star fill="var(--primary)" size={18} stroke="var(--primary)"></Star>
          <Star fill="var(--primary)" size={18} stroke="var(--primary)"></Star>
          <Star fill="var(--primary)" size={18} stroke="var(--primary)"></Star>
          <Star fill="var(--primary)" size={18} stroke="var(--primary)"></Star>
          <Star fill="var(--primary)" size={18} stroke="var(--primary)"></Star>
          <p className="h-full ml-2 text-sm font-light w-fit">2 days ago</p>
        </aside>
      </div>
    </div>

    <p className="text-lg mt-2">
      Absolutely love this product! The quality is outstanding and it exceeded
      all my expectations. Would definitely recommend to anyone looking for a
      premium experience.
    </p>

    {/* Image and videos */}
    <div className="flex gap-2 mt-4">
      <img
        className="w-18 rounded-2xl h-18 object-cover"
        src={tshirt}
        alt="tshirt"
      />
      <img
        className="w-18 rounded-2xl h-18 object-cover"
        src={tshirt2}
        alt="tshirt"
      />
    </div>

    {/* Helpful or not Helpful */}
    <div className="flex gap-5 mt-6">
      <aside className="flex gap-2 justify-center items-center">
        <Like size={20} />
        <p className="text-sm">Helpful (24)</p>
      </aside>

      <aside className="flex gap-2 justify-center items-center">
        <Dislike size={20} />
        <p className="text-sm">Not Helpful (1)</p>
      </aside>
    </div>
  </div>
);

export default Comment;
