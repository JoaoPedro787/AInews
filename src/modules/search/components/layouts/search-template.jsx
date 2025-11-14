import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSearchParams, useLocation } from "react-router-dom";

// Components
import StoryCard from "../../../../components/ui/story-card";
import LoadingSpinner from "../../../../components/ui/loading-spinner";
import SearchHeader from "../ui/header";
import SkeletonC from "../../../../components/ui/skeleton-loading";

//Services & Data
import { Links } from "../../../../data/header-links";
import guardianAPI from "../../../../services/guardian";

// ?s layout
const SearchLayout = () => {
  const [page, setPage] = useState(1);
  const [response, setResponse] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  // Params content, like section or query
  const [params] = useSearchParams();

  // Search id, like: "Sport,Education..."
  const id =
    params.get("section")?.toLowerCase() ||
    params.get("q")?.toLowerCase() ||
    "No filter";

  const location = useLocation();

  // Getting object by URL, if not matched, return nothing
  const headerLink = Links.find(
    (el) => el.link.toLowerCase() == location.pathname + location.search
  );

  // Adding data to state response | Infinite loading logic
  const nextData = (field, value) => {
    return guardianAPI
      .get(
        `/search?${field}=${value}&page=${page}&page-size=30&show-fields=thumbnail,trailText&show-tags=contributor&api-key=test`
      )
      .then((res) => {
        setResponse((prev) => [...prev, ...res.results]);

        res.currentPage >= res.pages && setHasMore(false);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    const formatedParams = [...params];
    const [field, value] = formatedParams[0];

    // data handling, if user try to edit in the url
    if (formatedParams.length > 1 || !["q", "section"].includes(field))
      window.location.replace("/");
    else nextData(field, value);
  }, [page]);

  return (
    <>
      <SearchHeader link={headerLink} search={id} />
      {isLoading ? (
        <div className="h-[1600px] rounded-2xl overflow-hidden">
          <SkeletonC />
        </div>
      ) : (
        <InfiniteScroll
          style={{ overflow: "hidden" }}
          dataLength={response.length}
          next={() => setPage((prev) => prev + 1)}
          hasMore={hasMore}
          loader={
            <div className="flex items-center justify-center py-8">
              <LoadingSpinner />
            </div>
          }
        >
          <section className="flex flex-col gap-8 px-layout rounded-2xl bg-layout-primary shadow-md ">
            {response.map((el, i) => (
              <StoryCard data={el} key={i} />
            ))}
          </section>
        </InfiniteScroll>
      )}
    </>
  );
};

export default SearchLayout;
