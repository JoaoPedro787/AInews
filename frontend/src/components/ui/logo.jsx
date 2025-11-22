import { Link } from "react-router-dom";

// Icons
import { IconCode } from "@tabler/icons-react";

const LogoUi = ({ size }) => {
  return (
    <Link
      to={"/"}
      className="flex items-center justify-start gap-2 cursor-pointer text-white"
    >
      <figure className="text-primary">
        {<IconCode size={size === "slim" ? 35 : 60} />}
      </figure>
      <h1 className={`font-bold ${size === "slim" ? "text-3xl" : "text-5xl"}`}>
        AI <span className="text-primary">News</span>
      </h1>
    </Link>
  );
};

export default LogoUi;
