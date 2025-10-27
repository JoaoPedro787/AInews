import { LuArrowRight } from "react-icons/lu";
import StoryCard from "../../../../components/ui/story-card";

const TopStory = () => {
  return (
    <div className="flex flex-col flex-1 rounded-md shadow-md cursor-pointer bg-layout-primary hover:[&>figure>img]:scale-120 hover:[&>figure>img]:blur-[2px] ">
      <figure className="min-w-full overflow-hidden">
        <img
          className="w-full h-full bg-contain transition-all"
          src="https://storage.morningbrew.com/image/2025-10-14/image-fa7f9fabf7e9ed51f04d351203ea701fd7d7f459-1500x1000-jpg/MBD-Instagram-PG13-1025.webp"
        />
      </figure>
      <article className="flex flex-col gap-2 p-layout">
        <h4 className="text-lg text-primary font-bold">SOCIAL MEDIA</h4>
        <h2 className="text-3xl text-primary font-bold">
          Instagram says teen accounts will all be PG-13
        </h2>
        <h3 className="text-lg">
          The new restrictions will further constrain what content teens can
          access.
        </h3>
        <h4 className="text-lg font-semibold">Globo Brasil</h4>
      </article>
    </div>
  );
};

const StoriesTemplate1 = () => {
  return (
    <section className="flex gap-6 max-[1281px]:flex-col">
      <TopStory />
      <div className="flex flex-col flex-1 gap-4 bg-layout-primary shadow-md rounded-md p-layout">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold text-primary">The Latest</h2>
          <span className="text-md flex gap-1 items-center cursor-pointer transition-all hover:text-primary hover:[&>figure]:translate-x-1">
            <h3 className="font-bold">ALL STORIES</h3>
            <figure className="transition-all">
              <LuArrowRight />
            </figure>
          </span>
        </div>

        <section className="flex flex-col justify-evenly gap-2 grow">
          <StoryCard />
          <StoryCard />
          <StoryCard />
        </section>
      </div>
    </section>
  );
};

export default StoriesTemplate1;
