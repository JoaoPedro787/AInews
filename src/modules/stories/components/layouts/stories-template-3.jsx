import StoryCard from "../../../../components/ui/story-card";
import { response } from "../../../../data/response-test";

const StoriesSection = ({ title, articles }) => (
  <section className="flex-1 flex flex-col gap-4 bg-layout-primary shadow-md rounded-md p-layout">
    <h3 className="text-2xl font-semibold">{title}</h3>
    {articles.map((el, i) => (
      <StoryCard data={el} key={i} size={"small"} />
    ))}
  </section>
);

const StoriesTemplate3 = () => {
  const { articles } = response;

  return (
    <section className="flex flex-col gap-4">
      <article className="flex flex-col gap-1">
        <h2 className="text-2xl font-semibold">Your topics</h2>
        <h3 className="font-semibold">Recommended based on your interests</h3>
      </article>
      <div className="flex gap-6 max-[1281px]:flex-col">
        <StoriesSection title={"For You"} articles={articles.slice(0, 3)} />
        <StoriesSection title={"U.S."} articles={articles.slice(3, 6)} />
        <StoriesSection title={"Technology"} articles={articles.slice(6, 9)} />
      </div>
    </section>
  );
};

export default StoriesTemplate3;
