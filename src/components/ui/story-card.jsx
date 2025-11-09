import { useNavigate } from "react-router-dom";

const StoryCard = ({ size, data }) => {
  // Date to hours
  let published = new Date(data?.webPublicationDate);
  published = Math.round((new Date() - published) / (1000 * 60 * 60));

  const navigate = useNavigate();

  return (
    <button
      className="flex justify-between flex-1 gap-6 py-4 border-gray-300 cursor-pointer hover:[&>article>h2]:text-primary text-start"
      onClick={() => navigate(`/story?id=${data.id}`)}
    >
      <article className="flex flex-col gap-2 w-full justify-end">
        <h3 className="font-semibold text-sm uppercase">{data.sectionName}</h3>
        <h2 className="text-lg transition-all">{data.webTitle}</h2>
        <section className="flex gap-1 text-sm">
          <h3>{published > 1 ? `${published} hour ago` : "Recently"}</h3>
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
          className="w-full h-full"
          src={
            data?.fields.thumbnail ||
            "https://www.webfx.com/wp-content/uploads/2023/07/what-is-openai.png"
          }
        />
      </figure>
    </button>
  );
};

export default StoryCard;
