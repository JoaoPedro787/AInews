import { useState, useEffect } from "react";

// Components
import StoryCard from "../../../../components/ui/story-card";
import SkeletonC from "../../../../components/ui/skeleton-loading";

// Services
import guardianAPI from "../../../../services/guardian";
import { get } from "../../../../hooks/api";

// Components
const TopicSection = ({ data }) =>
  data.map((group, i) => (
    <section
      key={i}
      className="flex flex-col bg-layout-primary p-layout flex-1 rounded-md"
    >
      <h2 className="capitalize text-lg font-semibold">Topic</h2>
      <ul className="flex flex-col justify-between h-full">
        <TopicElements articles={group} />
      </ul>
    </section>
  ));

// SubComponents
const TopicElements = ({ articles }) =>
  articles.map((el, i) => (
    <li key={i} className="flex items-end">
      <StoryCard data={el} size="small" />
    </li>
  ));

// Main code
const Topics = () => {
  const { response, isLoading } = get(
    guardianAPI,
    "/search?show-fields=thumbnail,trailText&show-tags=contributor&api-key=test"
  );
  const [slicedData, setSlicedData] = useState([]);

  useEffect(() => {
    if (!response?.results) return;

    // Wont be necessary after I config the API
    const sliced = [];
    for (let i = 3; i <= 9; i += 3) {
      sliced.push(response.results.slice(i - 3, i));
    }

    setSlicedData(sliced);
  }, [response]);

  return (
    <section
      className={`flex gap-4 flex-col ${isLoading && "flex-row h-[600px]"}`}
    >
      {isLoading ? (
        Array.from({ length: 3 }).map((_, i) => <SkeletonC key={i} />)
      ) : (
        <>
          <article className="flex flex-col gap-1">
            <h2 className="text-2xl font-semibold">Your topics</h2>
            <h3 className="font-semibold text-sm">
              Recommended based on your interests
            </h3>
          </article>

          <div className="flex gap-4 max-layout:flex-col">
            <TopicSection data={slicedData} />
          </div>
        </>
      )}
    </section>
  );
};

export default Topics;
