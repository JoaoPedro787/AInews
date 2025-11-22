import React, { useState, useEffect } from "react";
import { getRecommendedStorage } from "../../../../utils/recommendation-algorithm";

// Components
import StoryCard from "../../../../components/ui/story-card";
import SkeletonC from "../../../../components/ui/skeleton-loading";
import StoryHeader from "../ui/stories-header";

// Services
import guardianAPI from "../../../../services/guardian";
import { get } from "../../../../hooks/api";
import { forYouURL } from "../../../../config/guardian-constants";

// Components
const StoriesSection = ({ data }) =>
  data.map((group, i) => (
    <section key={i} className="flex-1 flex gap-4 max-layout:flex-col">
      <StoriesElements articles={group} groupIndex={i} />
    </section>
  ));

//SubComponent
const StoriesElements = ({ articles, groupIndex }) =>
  articles.map((el, i) => (
    <React.Fragment key={i}>
      <div
        className={`flex flex-1 items-end max-layout:border-t-1 border-white/20 ${
          groupIndex && "border-t-1"
        }`}
      >
        <StoryCard data={el} size="small" />
      </div>
      {i % 2 == 0 && (
        <div className="border-1 min-h-full border-white/20 max-layout:hidden" />
      )}
    </React.Fragment>
  ));

// Main code
const ForYou = () => {
  const { data } = getRecommendedStorage();

  const { response, isLoading } = get(guardianAPI, forYouURL(data, false));

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
    <section className={`flex flex-col gap-4 ${isLoading && "h-[600px]"}`}>
      {isLoading ? (
        <SkeletonC />
      ) : (
        <>
          <StoryHeader title={"For you"} />
          <div className="flex flex-col shadow-md rounded-md p-layout bg-layout-primary">
            <StoriesSection data={slicedData} />
          </div>
        </>
      )}
    </section>
  );
};

export default ForYou;
