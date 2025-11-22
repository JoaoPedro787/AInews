import { Link } from "react-router-dom";

// Components
import { ArrowRight } from "lucide-react";
import StoryCard from "../../../../components/ui/story-card";
import SkeletonC from "../../../../components/ui/skeleton-loading";

// Services
import guardianAPI from "../../../../services/guardian";
import { get } from "../../../../hooks/api";
import { latestURL } from "../../../../config/guardian-constants";

// Utils
import { setRecommendationStorage } from "../../../../utils/recommendation-algorithm";

// Components
// Most relevant story
const TopStory = ({ data, isLoading }) => {
  const authors =
    !isLoading && [...data.tags.map((el) => el.webTitle)].join(", ");

  return (
    <Link
      to={`/story?id=${data?.id}`}
      onClick={() => setRecommendationStorage(data)}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col flex-1 text-start rounded-md shadow-md cursor-pointer bg-layout-primary hover:[&>figure>img]:scale-120 hover:[&>figure>img]:blur-[2px]"
    >
      {isLoading ? (
        <SkeletonC />
      ) : (
        <>
          <figure className="min-w-full overflow-hidden">
            <img
              className="w-full h-full bg-contain transition-all"
              src={
                data.fields.thumbnail ||
                "https://placehold.co/500x400?text=No+Image&font=inter"
              }
            />
          </figure>
          <article className="flex flex-col gap-4 p-layout">
            <h3 className="text-base text-primary font-bold uppercase">
              {data.sectionName || "NO SECTION"}
            </h3>
            <h2 className="text-lg text-primary font-bold uppercase max-default:text-base">
              {data.webTitle || "NO TITLE"}
            </h2>
            {/* Might receive in HTML type */}
            <div
              className="prose prose-invert prose-base max-default:prose-sm"
              dangerouslySetInnerHTML={{
                __html: data.fields.trailText || "<p>NO DESCRIPTION<p/>",
              }}
            />
            <h3 className="max-default:text-xs text-sm font-semibold">
              {authors || "The Guardian"}
            </h3>
          </article>
        </>
      )}
    </Link>
  );
};

// SubComponents
const RelevantStoriesCards = ({ response }) => (
  <section className="flex flex-col justify-around grow">
    {response.slice(1, 4).map((el, i) => (
      <div key={i} className="border-t-1 border-white/20">
        <StoryCard data={el} />
      </div>
    ))}
  </section>
);

const RelevantStories = ({ data, isLoading }) => (
  <div
    className={`flex flex-col flex-1 gap-2 bg-layout-primary shadow-md rounded-md ${
      !isLoading && "p-layout"
    }`}
  >
    {isLoading ? (
      <SkeletonC />
    ) : (
      <>
        <div className="flex justify-between items-center">
          <h2 className="text-lg max-default:text-base font-bold text-primary">
            THE LATEST
          </h2>
          <span className="text-base max-default:text-sm flex gap-1 items-center cursor-pointer transition-all hover:text-primary hover:[&>figure]:translate-x-1">
            <Link to={"/search?q="} target="_blank" rel="noopener noreferrer">
              <h3 className="font-bold">ALL STORIES</h3>
            </Link>

            <figure className="transition-all">
              <ArrowRight size={20} />
            </figure>
          </span>
        </div>
        {/* I'll make 1 req with 4 responses  */}
        <RelevantStoriesCards response={data} />
      </>
    )}
  </div>
);

// Main code
const Latest = () => {
  // The most four hot news
  const { response, isLoading } = get(guardianAPI, latestURL);

  const { results } = response;

  return (
    <section
      className={`flex gap-6 max-layout:flex-col ${isLoading && "h-[700px]"}`}
    >
      <TopStory data={results?.[0]} isLoading={isLoading} />
      <RelevantStories data={results} isLoading={isLoading} />
    </section>
  );
};

export default Latest;
