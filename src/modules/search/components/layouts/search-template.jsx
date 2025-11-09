import StoriesCards from "../ui/stories-cards";
import { useSearchParams } from "react-router-dom";
import { Links } from "../../../../data/header-links";
import { get } from "../../../../hooks/api";
import guardianAPI from "../../../../services/guardian";

// ?s layout
const SearchLayout = () => {
  const [params] = useSearchParams();

  const { response, isLoading } = get(
    guardianAPI,
    "/search?show-fields=thumbnail,trailText&show-tags=contributor&api-key=test"
  );

  const id = params.get("s").toLowerCase() || "No filter";

  const obj = Links.find((el) => el.id.toLowerCase() == id);

  return (
    !isLoading && (
      <>
        <section className="flex gap-4 items-center">
          {obj && (
            <figure className="aspect-square w-16 overflow-hidden">
              <img className="w-full h-full" src={obj.icon} />
            </figure>
          )}
          <>
            <article className="flex flex-col gap-1">
              <h2 className="text-2xl font-semibold capitalize">{id}</h2>
              <h3 className="text-md text-semibold text-gray-300">
                {obj ? "Latest news" : "Search results"}
              </h3>
            </article>
          </>
        </section>
        <StoriesCards data={response.results} />
      </>
    )
  );
};

export default SearchLayout;
