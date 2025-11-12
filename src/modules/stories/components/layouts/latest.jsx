import { Link } from "react-router-dom";
import { LuArrowRight } from "react-icons/lu";
import StoryCard from "../../../../components/ui/story-card";

// Services
import guardianAPI from "../../../../services/guardian";
import { get } from "../../../../hooks/api";

// Components
// Most relevant story
const TopStory = ({ data }) => {
  const authors = [...data.tags.map((el) => el.webTitle)].join(", ");

  return (
    <Link
      to={`/story?id=${data.id}`}
      className="flex flex-col flex-1 text-start rounded-md shadow-md cursor-pointer bg-layout-primary hover:[&>figure>img]:scale-120 hover:[&>figure>img]:blur-[2px] "
    >
      <figure className="min-w-full overflow-hidden">
        <img
          className="w-full h-full bg-contain transition-all"
          src={data.fields.thumbnail}
        />
      </figure>
      <article className="flex flex-col gap-4 p-layout">
        <h3 className="text-sm text-primary font-bold uppercase">
          {data.sectionName}
        </h3>
        <h2 className="text-xl text-primary font-bold uppercase">
          {data.webTitle}
        </h2>
        <h3 className="text-lg">{data.fields.trailText}</h3>
        <h3 className="text-sm font-semibold">{authors}</h3>
      </article>
    </Link>
  );
};

//SubComponents
const RelevantStoriesCards = ({ response }) => (
  <section className="flex flex-col justify-around grow">
    {response.slice(1, 4).map((el, i) => (
      <div key={i}>
        <StoryCard data={el} />
      </div>
    ))}
  </section>
);

const RelevantStories = ({ data }) => (
  <div className="flex flex-col flex-1 gap-2 bg-layout-primary shadow-md rounded-md p-layout">
    <div className="flex justify-between items-center">
      <h2 className="text-xl font-bold text-primary">THE LATEST</h2>
      <span className="text-md flex gap-1 items-center cursor-pointer transition-all hover:text-primary hover:[&>figure]:translate-x-1">
        {/* Colocar como relevancia de data, latest */}
        <Link to={"/search?s=latest"}>
          <h3 className="font-bold">ALL STORIES</h3>
        </Link>

        <figure className="transition-all">
          <LuArrowRight />
        </figure>
      </span>
    </div>

    {/* I'll make 1 req with 4 responses  */}
    <RelevantStoriesCards response={data} />
  </div>
);

// Main code
const Latest = () => {
  // The most four hot news
  const { response, isLoading } = get(
    guardianAPI,
    "/search?show-fields=thumbnail,trailText&show-tags=contributor&api-key=test"
  );

  const { results } = response;

  return (
    !isLoading && (
      <section className="flex gap-6 max-layout:flex-col">
        <TopStory data={results[0]} />
        <RelevantStories data={results} />
      </section>
    )
  );
};

export default Latest;
