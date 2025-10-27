import StoryCard from "../../../../components/ui/story-card";
const StoriesCards = () => {
  return (
    <section className="flex flex-col gap-8 px-layout rounded-2xl bg-layout-primary shadow-md">
      <StoryCard />
      <StoryCard />
      <StoryCard />
      <StoryCard />
      <StoryCard />
    </section>
  );
};

export default StoriesCards;
