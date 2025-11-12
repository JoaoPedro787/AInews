import { useSearchParams } from "react-router-dom";

import { get } from "../../../hooks/api";
import guardianAPI from "../../../services/guardian";

const StoryHeader = ({ content }) => (
  <>
    <h4 className="text-primary font-bold text-md uppercase">
      {content?.sectionName || "NO CATEGORY"}
    </h4>
    <h2 className="text-4xl font-bold">{content?.webTitle || "NO TITLE"}</h2>
    <h3 className="text-lg font-semibold text-gray-300">
      {content?.fields?.trailText || "NO DESCRIPTION"}
    </h3>
    {content.src && (
      <figure className="my-6 w-full aspect-[4/3] overflow-hidden rounded-md">
        <img
          className="w-full h-full object-cover"
          src={content.src}
          alt={content.alt}
        />
      </figure>
    )}
  </>
);

const StoryBody = ({ content }) => {
  // All authors
  const authors = [...content?.tags?.map((el) => el.webTitle)].join(", ");

  // Date to US
  const date =
    content.webPublicationDate &&
    new Date(content.webPublicationDate).toLocaleDateString("en-US", {
      timeZone: "UTC",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <>
      <span className="text-lg flex justify-between font-semibold uppercase gap-4">
        <h2>BY {authors || "The Guardian"}</h2>
        <h3 className="min-w-fit self-end">{date || "No publication date"}</h3>
      </span>
      <div
        className="prose prose-lg prose-invert max-w-none"
        dangerouslySetInnerHTML={{
          __html:
            content?.fields?.body || "<p><em>No content available.</em></p>",
        }}
      />
    </>
  );
};

const StoryFull = () => {
  const [searchParams] = useSearchParams();

  const id = searchParams.get("id");

  const { response, isLoading } = get(
    guardianAPI,
    `${id}?api-key=test&show-fields=body,main,trailText&show-tags=contributor`
  );

  let src = "https://placehold.co/1080x810?text=No+Image+Available&font=inter";
  let alt = "No image.";

  if (!isLoading && response?.content?.fields?.main) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(
      response.content.fields.main,
      "text/html"
    );

    const img = doc.querySelector("img");

    src = img.getAttribute("src");
    alt = img.getAttribute("alt");
  }

  return (
    !isLoading && (
      <div className="flex flex-col">
        <section className="flex flex-col gap-6 max-w-max-layout m-auto w-full">
          <StoryHeader content={{ ...response.content, src, alt }} />
          <div className="flex flex-col gap-8 w-full max-w-[800px] m-auto ">
            <StoryBody content={response.content} />
          </div>
        </section>
      </div>
    )
  );
};

export default StoryFull;
