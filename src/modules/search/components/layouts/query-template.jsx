import StoriesCards from "../ui/stories-cards";
import { useSearchParams } from "react-router-dom";
// ?s layout
const SearchLayout = () => {
  const [params] = useSearchParams();

  const Title = params.get("s");
  return (
    <>
      <section>
        <h2 className="text-2xl font-semibold capitalize">{Title}</h2>
        <h3 className="text-sm font-semibold text-gray-300">
          Recommended based on your interests
        </h3>
      </section>
      <StoriesCards />
    </>
  );
};

export default SearchLayout;
