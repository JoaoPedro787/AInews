const StoryCard = ({ size, data }) => {
  // Date to hours
  let published = new Date(data?.publishedAt);
  published = Math.round((new Date() - published) / (1000 * 60 * 60));

  return (
    <div className="flex gap-6 py-4 border-gray-300 cursor-pointer hover:[&>article>h2]:text-primary">
      <article className="flex flex-col gap-2 w-full justify-end">
        <h3 className="font-semibold text-sm">{data?.source.name || "dedo"}</h3>
        <h2 className="text-xl transition-all">
          {data?.title || "Titulo aqui teste..."}
        </h2>
        <h3>
          {published || "6"} hours ago •{" "}
          <span className="font-semibold">{data?.author || "Author aqui"}</span>
        </h3>
      </article>
      <figure
        className={`self-end max-[601px]:hidden max-[1281px]:w-20 aspect-square rounded-2xl overflow-hidden shrink-0 ${
          size === "small" ? "w-20" : "w-30"
        }`}
      >
        <img
          className="w-full h-full"
          src={
            data?.urlToImage ||
            "https://www.webfx.com/wp-content/uploads/2023/07/what-is-openai.png"
          }
        />
      </figure>
    </div>
  );
};

export default StoryCard;
