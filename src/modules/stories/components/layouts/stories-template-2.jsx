import StoryCard from "../../../../components/ui/story-card";
import { response } from "../../../../data/response-test";

// Component
const StoriesSection = ({ articles }) => (
  <section className="flex-1 flex gap-10 max-[1281px]:flex-col">
    {articles.map((el, i) => (
      <div key={i} className="flex flex-1 items-end">
        <StoryCard data={el} size={"small"} />
      </div>
    ))}
  </section>
);

const StoriesTemplate2 = () => {
  const { articles } = response;
  let slicedData = [];

  // Slices the data to have a better ui
  for (let i = 2; i <= 6; i += 2) {
    slicedData.push(articles.slice(i - 2, i));
  }

  return (
    <section className="flex flex-col gap-4">
      <article className="flex flex-col gap-1">
        <h2 className="text-3xl font-semibold">For you</h2>
        <h3 className="font-semibold">Recommended based on your interests</h3>
      </article>
      <div className="flex flex-col shadow-md rounded-md gap-6 p-layout bg-layout-primary ">
        {slicedData.map((el, i) => (
          <StoriesSection articles={el} key={i} />
        ))}
      </div>
    </section>
  );
};

export default StoriesTemplate2;
