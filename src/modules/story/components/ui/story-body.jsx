import { useState } from "react";
import SkeletonC from "../../../../components/ui/skeleton-loading";
import TypeOfNews from "./story-body-type-of-news";
import TypeOfContent from "./story-body-type-of-content";

const sectionData = [{ id: "Original" }, { id: "AI Resume" }];

const StoryBody = ({ content, isLoading }) => {
  // All authors
  const authors = [...(content?.tags?.map((el) => el.webTitle) || [])].join(
    ", "
  );

  const [aiResume, setAI] = useState(sectionData[0].id);

  // Formated Date
  const date =
    content?.webPublicationDate &&
    new Date(content.webPublicationDate).toLocaleDateString("en-US", {
      timeZone: "UTC",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <>
      <span className="text-lg flex justify-between font-semibold uppercase gap-4">
        <h2 className={`${isLoading && "flex-2"}`}>
          {isLoading ? <SkeletonC /> : `BY ${authors || "The Guardian"}`}
        </h2>
        <h3 className={`min-w-fit self-end ${isLoading && "flex-1"}`}>
          {isLoading ? <SkeletonC /> : date || "No publication date"}
        </h3>
      </span>

      {/* Body content */}
      {isLoading ? (
        <div className="h-[1000px]">
          <SkeletonC />
        </div>
      ) : (
        <div className="flex flex-col gap-4 overflow-hidden">
          {/* Original or AI, is here where the state changes */}
          <TypeOfNews data={sectionData} state={{ setAI, aiResume }} />

          {/* Slides the content to ai or original */}
          <TypeOfContent
            data={sectionData}
            state={aiResume}
            body={content.fields.body}
          />
        </div>
      )}
    </>
  );
};

export default StoryBody;
