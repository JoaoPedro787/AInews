import { useState } from "react";
import { Link } from "react-router-dom";
import LogoUi from "./ui/logo";
import SearchModal from "./search-modal";

// Icons
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Links = [
  { id: "News", link: "#" },
  { id: "Technology", link: "#" },
  { id: "U.S.", link: "#" },
  { id: "World", link: "#" },
  { id: "Games", link: "#" },
  { id: "Music", link: "#" },
];

/*
  NavC and SearchC are gonna be hidden when they get to the width of 801px.
  After that, it'll renderize a hamburger menu, the logic is at my layout.jsx
  It's controlled by an usestate inside my layout "modalFunc".
*/

const NavC = () => {
  return (
    <div className="flex items-center grow text-lg font-bold max-[801px]:hidden">
      <nav className="flex flex-1 list-none justify-evenly">
        {Links.map((el, i) => (
          <li key={i} className="transition-all hover:text-primary">
            <Link to={el.link}>{el.id}</Link>
          </li>
        ))}
      </nav>
    </div>
  );
};

const SearchC = ({ modalFunc }) => {
  return (
    <button
      className="flex justify-center items-center text-xl cursor-pointer max-[801px]:hidden transition-all hover:text-primary hover:scale-120"
      onClick={modalFunc}
    >
      {<FaSearch />}
    </button>
  );
};

const Header = ({ modalFunc }) => {
  const [isOpen, SetModal] = useState(false);

  const ModalFunc = () => SetModal(!isOpen);

  return (
    <div className="relative">
      {/* Main Container */}
      <header className="relative z-50 bg-layout-primary p-layout">
        <section className="m-auto flex justify-between max-w-[1280px]">
          {/* Container for Logo */}
          {<LogoUi size={"slim"} />}
          {/* Container for Nav */}
          {<NavC />}
          {/* Container for Search */}
          {<SearchC modalFunc={ModalFunc} />}

          {/* Only appear when min-w is equal to 801px */}
          <button
            className="min-[801px]:hidden flex items-center text-3xl cursor-pointer transition all hover:text-primary"
            onClick={modalFunc}
          >
            <GiHamburgerMenu />
          </button>
        </section>
      </header>

      <SearchModal isOpen={isOpen} />
    </div>
  );
};

export default Header;
