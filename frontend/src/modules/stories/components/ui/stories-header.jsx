import { getRecommendedStorage } from "../../../../utils/recommendation-algorithm";

const StoryHeader = ({ title }) => {
  const { error } = getRecommendedStorage();
  return (
    <article className="flex flex-col gap-1">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <h3 className="text-sm text-white/60">
        {!error
          ? "Recommended based on your interests"
          : "No user recommendations yet - using relevant topics"}
      </h3>
    </article>
  );
};

export default StoryHeader;
