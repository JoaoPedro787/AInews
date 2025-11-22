import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const SearchModal = ({ isOpen }) => {
  const inputRef = useRef();

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search?q=${inputRef.current.value}`);
  };

  return (
    <div
      className={`p-layout left-0 right-0 absolute w-full -translate-y-full z-40 bg-layout-primary transition-all duration-100 max-[800px]:-translate-y-full ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <section className="flex flex-col gap-4 max-w-[1280px] m-auto">
        <h2 className="text-3xl font-bold border-b-1 pb-3 border-white/20">
          Search
        </h2>
        <div className="flex justify-between gap-4">
          <input
            ref={inputRef}
            onKeyDown={({ key }) => key == "Enter" && handleSearch()}
            placeholder="Search Stories"
            className="border-1 border-white/20 rounded-md grow outline-0 p-3 text-xl"
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-white text-black font-bold text-xl rounded-md cursor-pointer"
          >
            Search
          </button>
        </div>
      </section>
    </div>
  );
};

export default SearchModal;
