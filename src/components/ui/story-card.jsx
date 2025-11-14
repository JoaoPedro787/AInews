import { Link } from "react-router-dom";

const StoryCard = ({ size, data }) => {
  // Date to hours
  let published = new Date(data?.webPublicationDate);
  published = Math.round((new Date() - published) / (1000 * 60 * 60));

  return (
    <Link
      to={`/story?id=${data.id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-between flex-1 gap-6 py-4 border-gray-300 cursor-pointer hover:[&>article>h2]:text-primary text-start"
    >
      <article className="flex flex-col gap-2 w-full justify-end">
        <h3 className="font-semibold text-sm uppercase">
          {data.sectionName || "NO CATEGORY"}
        </h3>
        <h2 className="text-lg transition-all">
          {data.webTitle || "No title"}
        </h2>
        <section className="flex gap-1 text-sm">
          <h3>{published > 1 ? `${published} hours ago` : "Recently"}</h3>
          <span>•</span>
          <h3 className="font-semibold">The Guardian</h3>
        </section>
      </article>
      <figure
        className={`self-end max-[601px]:hidden overflow-hidden shrink-0 ${
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
