import StoryCard from "../../../modules/stories/components/ui/story-card";

const Search = () => {
  return (
    <div>
      <div className="flex flex-col gap-6 max-w-[900px] w-full m-auto">
        <section>
          <h2 className="text-2xl font-semibold">For you</h2>
          <h3 className="text-sm font-semibold text-gray-300">
            Recommended based on your interests
          </h3>
        </section>
        <section className="flex flex-col gap-8 px-layout rounded-2xl bg-layout-primary shadow-md">
          <StoryCard />
          <StoryCard />
          <StoryCard />
          <StoryCard />
          <StoryCard />
        </section>
      </div>
    </div>
  );
};

export default Search;
