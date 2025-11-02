import StoryCard from "../../../../components/ui/story-card";
import { response } from "../../../../data/response-test";

// Component
const StoriesSection = ({ articles }) => (
  <section className="flex-1 flex flex-col gap-4 items-stretch">
    {articles.map((el, i) => (
      <StoryCard data={el} key={i} size={"small"} />
    ))}
  </section>
);

const StoriesTemplate2 = () => {
  const { articles } = response;

  return (
    <section className="flex flex-col gap-4">
      <article className="flex flex-col gap-1">
        <h2 className="text-3xl font-semibold">For you</h2>
        <h3 className="font-semibold">Recommended based on your interests</h3>
      </article>
      <div className="flex shadow-md rounded-md gap-6 p-layout bg-layout-primary max-[1281px]:flex-col">
        <StoriesSection articles={articles.slice(0, 3)} />
        <span className="border-1 border-gray-500" />
        <StoriesSection articles={articles.slice(3, 6)} />
      </div>
    </section>
  );
};

export default StoriesTemplate2;
