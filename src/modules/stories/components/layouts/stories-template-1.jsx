import { LuArrowRight } from "react-icons/lu";
import { response } from "../../../../data/response-test";
import StoryCard from "../../../../components/ui/story-card";

// Most relevant story
const TopStory = ({ data }) => {
  console.log(data);
  return (
    <div className="flex flex-col flex-1 rounded-md shadow-md cursor-pointer bg-layout-primary hover:[&>figure>img]:scale-120 hover:[&>figure>img]:blur-[2px] ">
      <figure className="min-w-full overflow-hidden">
        <img
          className="w-full h-full bg-contain transition-all"
          src={data.urlToImage}
        />
      </figure>
      <article className="flex flex-col gap-2 p-layout">
        <h4 className="text-lg text-primary font-bold">
          {data.author.toUpperCase()}
        </h4>
        <h2 className="text-3xl text-primary font-bold">{data.title}</h2>
        <h3 className="text-lg">{data.description}</h3>
        <h4 className="text-lg font-semibold">{data.source.name}</h4>
      </article>
    </div>
  );
};

const StoriesTemplate1 = () => {
  const { articles } = response;

  return (
    <section className="flex gap-6 max-[1281px]:flex-col">
      <TopStory data={articles[0]} />
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
          {articles.slice(1, 4).map((el, i) => (
            <StoryCard key={i} data={el} />
          ))}
        </section>
      </div>
    </section>
  );
};

export default StoriesTemplate1;
