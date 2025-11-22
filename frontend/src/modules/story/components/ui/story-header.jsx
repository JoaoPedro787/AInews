import SkeletonC from "../../../../components/ui/skeleton-loading";

const StoryHeader = ({ content, isLoading, imageLoaded }) => (
  <>
    {/* Category */}
    <h4 className="text-primary font-bold text-base uppercase ">
      {isLoading ? <SkeletonC /> : content?.sectionName || "NO CATEGORY"}
    </h4>

    {/* Title */}
    <h2 className="text-4xl font-bold max-default:text-2xl">
      {isLoading ? <SkeletonC /> : content?.webTitle || "NO TITLE"}
    </h2>

    {/* Description */}
    {isLoading ? (
      <SkeletonC />
    ) : (
      <div
        className="prose prose-invert prose-lg max-default:prose-base min-w-full"
        dangerouslySetInnerHTML={{
          __html: content?.fields?.trailText || "NO DESCRIPTION",
        }}
      />
    )}

    {/* Image */}
    <figure className="my-6 w-full aspect-[4/3] overflow-hidden rounded-md">
      {isLoading || !imageLoaded ? (
        <SkeletonC />
      ) : (
        <img
          className="w-full h-full object-cover"
          src={content.image.src}
          alt={content.image.alt}
        />
      )}
    </figure>
  </>
);

export default StoryHeader;
