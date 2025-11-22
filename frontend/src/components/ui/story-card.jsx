import { Link } from "react-router-dom";
import { setRecommendationStorage } from "../../utils/recommendation-algorithm";
import getDateDiff from "../../utils/date-format";

const StoryCard = ({ size, data }) => {
  const { hours, days, months, years } = getDateDiff(data.webPublicationDate);

  let publicationText;

  if (years >= 1) {
    publicationText = years === 1 ? `${years} year` : `${years} years`;
  } else if (months >= 1) {
    publicationText = months === 1 ? `${months} month` : `${months} months`;
  } else if (days >= 1) {
    publicationText = days === 1 ? `${days} day` : `${days} days`;
  } else if (hours >= 1) {
    publicationText = hours === 1 ? `${hours} hour` : `${hours} hours`;
  } else {
    publicationText = "Recently";
  }

  return (
    <Link
      to={`/story?id=${data.id}`}
      onClick={() => setRecommendationStorage(data)}
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-between flex-1 gap-6 py-4 border-gray-300 cursor-pointer hover:[&>article>h2]:text-primary text-start"
    >
      <article className="flex flex-col gap-2 w-full justify-end">
        <h3 className="font-semibold max-default:text-xs text-sm uppercase">
          {data.sectionName || "NO CATEGORY"}
        </h3>
        <h2 className="max-default:text-md transition-all">
          {data.webTitle || "No title"}
        </h2>
        <section className="flex gap-1 max-default:text-xs text-sm ">
          <h3>{publicationText}</h3>
          <span>•</span>
          <h3 className="font-semibold">The Guardian</h3>
        </section>
      </article>
      <figure
        className={`self-end max-default:hidden overflow-hidden shrink-0 ${
          size === "small"
            ? "h-20 aspect-[6/5] rounded-xl"
            : "h-25 aspect-[3/2] rounded-md"
        }`}
      >
        <img
          className="w-full h-full object-cover"
          src={
            data?.fields.thumbnail ||
            "https://placehold.co/200x150?text=No+Image&font=inter"
          }
        />
      </figure>
    </Link>
  );
};

export default StoryCard;
