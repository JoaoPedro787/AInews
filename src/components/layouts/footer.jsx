import { Link } from "react-router-dom";
import LogoUi from "./ui/logo";

const Links = [
  { id: "Privacy", link: "#" },
  { id: "FAQ", link: "#" },
  { id: "Terms of Service", link: "#" },
  { id: "Cookies", link: "#" },
];

const Footer = () => (
  <>
    <footer className="p-layout bg-layout-primary">
      <div className="max-w-[1280px] m-auto w-full flex justify-between max-[601px]:flex-col max-[601px]:gap-12">
        {<LogoUi size={"large"} />}
        <div className="flex flex-col gap-8 max-[601px]:border-t-1 max-[601px]:pt-8 min-[601px]:border-l-1 border-gray-300 min-[601px]:pl-8">
          <h3 className="text-sm">
            © 2025 AI News.
            <br />
            All Rights Reserved.
          </h3>

          <nav className="flex flex-col gap-1 list-none font-semibold text-sm">
            {Links.map((el, i) => (
              <li key={i}>
                <Link to={el.link}>{el.id}</Link>
              </li>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  </>
);

export default Footer;
