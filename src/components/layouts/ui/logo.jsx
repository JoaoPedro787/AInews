import { GiArtificialHive } from "react-icons/gi";

const LogoUi = ({ size }) => {
  return (
    <div className="flex items-center justify-start gap-1">
      <figure
        className={`text-primary ${size === "slim" ? "text-5xl" : "text-7xl"}`}
      >
        {<GiArtificialHive />}
      </figure>
      <h1 className={`font-bold ${size === "slim" ? "text-3xl" : "text-5xl"}`}>
        AI <span className="text-primary">News</span>
      </h1>
    </div>
  );
};

export default LogoUi;
