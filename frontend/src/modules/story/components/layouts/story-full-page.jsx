import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

// Components
import StoryHeader from "../ui/story-header";
import StoryBody from "../ui/story-body";

// Services
import { get } from "../../../../hooks/api";
import guardianAPI from "../../../../services/guardian";
import { articleURL } from "../../../../config/guardian-constants";

const StoryFull = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const [imageLoaded, setImageLoad] = useState(false);

  const { response, isLoading } = get(guardianAPI, articleURL(id));

  let image = new Image();

  // Default values
  image.src =
    "https://placehold.co/1080x810?text=No+Image+Available&font=inter";
  image.alt = "No image.";

  // Case has image
  if (!isLoading && response?.content?.fields?.main) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(
      response.content.fields.main,
      "text/html"
    );
    const img = doc.querySelector("img");

    if (img) {
      image.src = img.getAttribute("src");
      image.alt = img.getAttribute("alt");
    }

    image.onload = () => setImageLoad(true);
  }

  useEffect(() => {
    document.title = response?.content?.webTitle || "Story";
  }, [response]);

  return (
    <div className="flex flex-col">
      <section className="flex flex-col gap-6 max-w-max-layout m-auto w-full">
        <StoryHeader
          content={{ ...response?.content, image }}
          imageLoaded={imageLoaded}
          isLoading={isLoading}
        />
        <div className="flex flex-col gap-8 w-full max-w-[800px] m-auto">
          <StoryBody content={response?.content} isLoading={isLoading} />
        </div>
      </section>
    </div>
  );
};

export default StoryFull;
