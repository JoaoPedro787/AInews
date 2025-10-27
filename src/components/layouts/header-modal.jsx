import { useNavigate, useLocation } from "react-router-dom";
import { useRef } from "react";
import { Links } from "../../data/header-links";

// Icons
import { LuArrowRight } from "react-icons/lu";

const HeaderModal = ({ isOpen, closeModal }) => {
  const navigate = useNavigate();
  const url = useLocation(); // <- nome alterado para 'url'

  const handleNavigate = (link) => {
    navigate(link);
    closeModal();
  };

  const inputRef = useRef();

  return (
    <div
      className={`flex flex-col bg-layout-primary w-full h-full absolute p-layout gap-6 transition-all min-[800px]:translate-x-full z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center border-1 border-gray-500 rounded-md [&>*]:p-3">
        <input
          className="grow h-full outline-0"
          placeholder="Search"
          ref={inputRef}
          onKeyDown={({ key }) =>
            key === "Enter" &&
            handleNavigate(`/search?s=${inputRef.current.value}`)
          }
        />
        <button
          onClick={() => handleNavigate(`/search?s=${inputRef.current.value}`)}
          className="text-xl cursor-pointer transition-all hover:text-primary hover:translate-x-1"
        >
          <LuArrowRight />
        </button>
      </div>

      <nav className="flex flex-col gap-5 list-none text-lg font-bold">
        {Links.map((el, i) => (
          <li
            key={i}
            className={`border-b-1 border-gray-500 pb-3 transition-all ${
              url.pathname == el.link || url.pathname + url.search == el.link
                ? "text-primary font-bold"
                : "hover:text-primary"
            }`}
          >
            <button
              onClick={() => handleNavigate(el.link)}
              className="w-full text-left cursor-pointer"
            >
              {el.id}
            </button>
          </li>
        ))}
      </nav>
    </div>
  );
};

export default HeaderModal;
