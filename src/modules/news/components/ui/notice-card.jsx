const NoticeCard = () => {
  return (
    <div className="flex gap-6 py-4 border-gray-300 cursor-pointer hover:[&>article>h2]:underline hover:[&>article>h2]:text-primary">
      <article className="flex flex-col gap-2 w-full justify-end">
        <h3 className="font-semibold text-sm">Forbes</h3>
        <h2 className="text-xl">AI Porn Is Coming To ChatGPT In December</h2>
        <h3>
          6 hours ago. <span className="font-semibold">By John Koetsier</span>
        </h3>
      </article>
      <figure className="self-end max-[601px]:hidden">
        <img
          className="w-30 aspect-square rounded-2xl bg-contain flex-0"
          src="https://www.webfx.com/wp-content/uploads/2023/07/what-is-openai.png"
        />
      </figure>
    </div>
  );
};

export default NoticeCard;
