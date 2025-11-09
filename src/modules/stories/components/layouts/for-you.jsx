import { useState, useEffect } from "react";
import StoryCard from "../../../../components/ui/story-card";

// Services
import guardianAPI from "../../../../services/guardian";
import { get } from "../../../../hooks/api";

// Components
const StoriesSection = ({ data }) =>
  data.map((group, i) => (
    <section key={i} className="flex-1 flex gap-10 max-layout:flex-col">
      <StoriesElements articles={group} />
    </section>
  ));

//SubComponent
const StoriesElements = ({ articles }) =>
  articles.map((el, i) => (
    <div key={i} className="flex flex-1 items-end">
      <StoryCard data={el} size="small" />
    </div>
  ));

// Main code
const ForYou = () => {
  const { response, isLoading } = get(
    guardianAPI,
    "/search?show-fields=thumbnail,trailText&show-tags=contributor&api-key=test"
  );
  const [slicedData, setSlicedData] = useState([]);

  // Another way after I config the API
  useEffect(() => {
    if (!response?.results) return;

    const sliced = [];
    for (let i = 2; i <= 6; i += 2) {
      sliced.push(response.results.slice(i - 2, i));
    }

    setSlicedData(sliced);
  }, [response]);

  return (
    !isLoading && (
      <section className="flex flex-col gap-4">
        <article className="flex flex-col gap-1">
          <h2 className="text-2xl font-semibold">For you</h2>
          <h3 className="font-semibold text-sm">
            Recommended based on your interests
          </h3>
        </article>

        <div className="flex flex-col shadow-md rounded-md gap-6 p-layout bg-layout-primary">
          <StoriesSection data={slicedData} />
        </div>
      </section>
    )
  );
};

export default ForYou;
