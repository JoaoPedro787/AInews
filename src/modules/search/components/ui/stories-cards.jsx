import StoryCard from "../../../../components/ui/story-card";
const StoriesCards = ({ data }) => {
  const { articles } = data;
  return (
    <section className="flex flex-col gap-8 px-layout rounded-2xl bg-layout-primary shadow-md">
      {articles.map((el, i) => (
        <StoryCard size={"small"} data={el} key={i} />
      ))}
    </section>
  );
};

export default StoriesCards;
