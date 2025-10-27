const StoryCard = ({ size }) => {
  return (
    <div className="flex gap-6 py-4 border-gray-300 cursor-pointer hover:[&>article>h2]:text-primary">
      <article className="flex flex-col gap-2 w-full justify-end">
        <h3 className="font-semibold text-sm">Forbes</h3>
        <h2 className="text-xl transition-all">
          The stock market has only seen 4 periods like this in 100 years. What
          happens next? - USA Today
        </h2>
        <h3>
          6 hours ago • <span className="font-semibold">By John Koetsier</span>
        </h3>
      </article>
      <figure
        className={`self-end max-[601px]:hidden max-[1281px]:w-20 aspect-square rounded-2xl overflow-hidden shrink-0 ${
          size === "small" ? "w-20" : "w-30"
        }`}
      >
        <img
          className="w-full h-full"
          src="https://www.webfx.com/wp-content/uploads/2023/07/what-is-openai.png"
        />
      </figure>
    </div>
  );
};

export default StoryCard;
