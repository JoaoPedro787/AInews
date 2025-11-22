import { useNavigate, useLocation } from "react-router-dom";
import { useRef } from "react";

import { Link } from "react-router-dom";

// Data
import { Links } from "../../data/header-links";

// Icons
import { ArrowRight } from "lucide-react";

const HeaderModal = ({ isOpen }) => {
  const navigate = useNavigate();
  const url = useLocation();

  const handleNavigate = (link) => {
    navigate(link);
  };

  const inputRef = useRef();

  return (
    <div
      className={`flex flex-col bg-layout-primary w-full h-full absolute p-layout gap-6 transition-all min-[801px]:hidden min-[801px]:z-0 z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center border-1 border-white/20 rounded-md [&>*]:p-3">
        <input
          className="grow h-full outline-0"
          placeholder="Search"
          ref={inputRef}
          onKeyDown={({ key }) =>
            key === "Enter" &&
            handleNavigate(`/search?q=${inputRef.current.value}`)
          }
        />
        <button
          onClick={() => handleNavigate(`/search?q=${inputRef.current.value}`)}
          className="text-xl cursor-pointer transition-all hover:text-primary hover:translate-x-1"
        >
          <ArrowRight size={20} />
        </button>
      </div>

      <nav className="flex flex-col gap-5 list-none text-lg font-bold max-default:text-base">
        {Links.map((el, i) => (
          <li
            key={i}
            className={`border-b-1 border-white/20 pb-3 transition-all ${
              url.pathname + url.search == el.link
                ? "text-primary font-bold"
                : "hover:text-primary"
            }`}
          >
            <Link to={el.link} className="w-full text-left cursor-pointer">
              {el.id}
            </Link>
          </li>
        ))}
      </nav>
    </div>
  );
};

export default HeaderModal;
