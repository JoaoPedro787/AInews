import { Link } from "react-router-dom";
import LogoUi from "../ui/logo";

import {
  IconBrandLinkedinFilled,
  IconBrandGithubFilled,
  IconBrandGoogleFilled,
} from "@tabler/icons-react";

const medias = [
  { icon: IconBrandGithubFilled, link: "https://github.com/JoaoPedro787" },
  {
    icon: IconBrandLinkedinFilled,
    link: "https://br.linkedin.com/in/joaopedro787",
  },
  {
    icon: IconBrandGoogleFilled,
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=joaopedro.oliveirapaula@gmail.com",
  },
];

const about = [
  { id: "Terms of service", link: "legal/terms-of-service" },
  { id: "Privacy Policy", link: "legal/privacy-policy" },
];

const Footer = () => (
  <>
    <footer className="px-layout py-16 bg-layout-primary text-white/80">
      <div className="flex flex-col gap-10 max-w-max-layout m-auto">
        <section className="w-full flex justify-between gap-8 max-default:flex-col">
          {<LogoUi size={"large"} />}
          <nav className="flex gap-4 items-end">
            {medias.map((el, i) => (
              <a
                href={el.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-all"
                key={i}
              >
                {<el.icon size={30} />}
              </a>
            ))}
          </nav>
        </section>
        <span className="border-1 border-white/20" />
        <section className="flex flex-col gap-8">
          <h3 className="text-sm">© 2025, AI News. All rights reserved.</h3>
          <ul className="text-xs flex gap-6">
            {about.map((el, i) => (
              <li className="hover:text-white transition-all" key={i}>
                <Link to={el.link} target="_blank" rel="noopener noreferrer">
                  {el.id}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </footer>
  </>
);

export default Footer;
