import { useState, useEffect } from "react";

// Components
import StoryCard from "../../../../components/ui/story-card";
import SkeletonC from "../../../../components/ui/skeleton-loading";
import StoryHeader from "../ui/stories-header";

// Services
import guardianAPI from "../../../../services/guardian";
import { get } from "../../../../hooks/api";
import { topicURL } from "../../../../config/guardian-constants";

// Storage
import { getRecommendedStorage } from "../../../../utils/recommendation-algorithm";

// Components
const TopicSection = ({ data }) => {
  const { response, isLoading } = get(guardianAPI, topicURL(data));

  return isLoading ? (
    <div className="h-[300px]">
      <SkeletonC />
    </div>
  ) : (
    <section className="flex flex-col gap-3 bg-layout-primary p-layout flex-1 rounded-md shadow-md">
      <h2 className="text-xl max-default:text-base font-semibold uppercase">
        {data}
      </h2>
      <ul className="flex flex-col">
        <TopicElements articles={response.results} />
      </ul>
    </section>
  );
};

// SubComponents
const TopicElements = ({ articles }) => {
  return articles.map((el, i) => (
    <li className="border-t-1 border-white/20" key={i}>
      <StoryCard data={el} />
    </li>
  ));
};

// Main code
const Topics = () => {
  const { data } = getRecommendedStorage();

  return (
    <section className={`flex gap-4 flex-col`}>
      <StoryHeader title={"Topics"} />
      <div className="flex flex-col gap-8">
        {data.map((el, i) => (
          <TopicSection data={el} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Topics;
