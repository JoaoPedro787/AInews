import StoryCard from "../../../../components/ui/story-card";
const StoriesCards = ({ data }) => {
  return (
    <section className="flex flex-col gap-8 px-layout rounded-2xl bg-layout-primary shadow-md">
      {data.map((el, i) => (
        <StoryCard data={el} key={i} />
      ))}
    </section>
  );
};

export default StoriesCards;
