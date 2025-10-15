import { Link } from "react-router-dom";

// Icons
import { LuArrowRight } from "react-icons/lu";

const Links = [
  { id: "News", link: "#" },
  { id: "Games", link: "#" },
  { id: "Video", link: "#" },
  { id: "Music", link: "#" },
];

const HeaderModal = ({ isOpen }) => {
  return (
    <div
      className={`flex flex-col bg-layout-primary w-full h-full absolute p-layout gap-6 transition-all min-[800px]:translate-x-full z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } `}
    >
      {/* A modal aparece por meio da condição isOpen, 
      usando o translate, formando uma animação agradavel */}

      <div className="flex justify-between items-center border-1 border-gray-500 rounded-md [&>*]:p-3">
        <input className="grow h-full outline-0" placeholder="Search" />
        <figure className="text-xl">
          <LuArrowRight />
        </figure>
      </div>
      <nav className="flex flex-col gap-5 list-none text-lg font-bold">
        {Links.map((el, i) => (
          <li className="border-b-1 border-gray-500 pb-3" key={i}>
            <Link to={el.link}>{el.id}</Link>
          </li>
        ))}
      </nav>
    </div>
  );
};

export default HeaderModal;
