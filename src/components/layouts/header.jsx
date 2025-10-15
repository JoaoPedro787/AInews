import { useState } from "react";
import { Link } from "react-router-dom";
import LogoUi from "./ui/logo";
import SearchModal from "./search-modal";

// Icons
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Links = [
  { id: "News", link: "#" },
  { id: "Games", link: "#" },
  { id: "Video", link: "#" },
  { id: "Music", link: "#" },
];

/*
  NavC and SearchC are gonna be hidden when they get to the width of 801px.
  After that, it'll renderize a hamburger menu, the logic is at my layout.jsx
  It's controlled by an usestate inside my layout "modalFunc".
*/

const NavC = () => {
  return (
    <div className="flex items-center grow text-xl font-bold max-[801px]:hidden">
      <nav className="flex flex-1 list-none justify-evenly">
        {Links.map((el, i) => (
          <li key={i}>
            <Link to={el.link}>{el.id}</Link>
          </li>
        ))}
      </nav>
    </div>
  );
};

const SearchC = ({ modalFunc }) => {
  return (
    <div
      className="flex justify-center items-center text-3xl cursor-pointer max-[801px]:hidden"
      onClick={modalFunc}
    >
      {<FaSearch />}
    </div>
  );
};

const Header = ({ modalFunc }) => {
  const [isOpen, SetModal] = useState(false);

  const ModalFunc = () => SetModal(!isOpen);

  return (
    <div className="relative">
      {/* Main Container */}
      <header className="relative z-50 bg-white p-layout">
        <section className="m-auto flex justify-between max-w-[1280px]">
          {/* Container for Logo */}
          {<LogoUi size={"slim"} />}
          {/* Container for Nav */}
          {<NavC />}
          {/* Container for Search */}
          {<SearchC modalFunc={ModalFunc} />}

          {/* Only appear when min-w is equal to 801px */}
          <figure
            className="min-[801px]:hidden flex items-center text-3xl cursor-pointer"
            onClick={modalFunc}
          >
            <GiHamburgerMenu />
          </figure>
        </section>
      </header>

      <SearchModal isOpen={isOpen} />
    </div>
  );
};

export default Header;
