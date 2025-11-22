import { Gamepad2, Globe, Landmark, Lightbulb, Volleyball } from "lucide-react";

// Template for icons
const IconTemplate = ({ Icon, color, iconColor }) => (
  <figure
    className={`w-full h-full flex items-center justify-center rounded-full ${color}`}
  >
    <Icon size={36} className={iconColor} />
  </figure>
);

const Links = [
  { id: "Home", link: "/" },
  {
    id: "For you",
    link: "/search",
  },
  {
    id: "Technology",
    link: "/search?section=technology",
    icon: (
      <IconTemplate
        Icon={Lightbulb}
        color={"bg-yellow-100"}
        iconColor={"text-yellow-600"}
      />
    ),
  },
  {
    id: "U.S.",
    link: "/search?section=us-news",
    icon: (
      <IconTemplate
        Icon={Landmark}
        color={"bg-blue-100"}
        iconColor={"text-blue-600"}
      />
    ),
  },
  {
    id: "World",
    link: "/search?section=world",
    icon: (
      <IconTemplate
        Icon={Globe}
        color={"bg-emerald-100"}
        iconColor={"text-emerald-600"}
      />
    ),
  },
  {
    id: "Games",
    link: "/search?section=games",
    icon: (
      <IconTemplate
        Icon={Gamepad2}
        color={"bg-purple-100"}
        iconColor={"text-purple-600"}
      />
    ),
  },
  {
    id: "Sports",
    link: "/search?section=sport",
    icon: (
      <IconTemplate
        Icon={Volleyball}
        color={"bg-orange-100"}
        iconColor={"text-orange-600"}
      />
    ),
  },
];

export { Links };
