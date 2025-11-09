import { useSearchParams } from "react-router-dom";

import { get } from "../../../hooks/api";
import guardianAPI from "../../../services/guardian";

const StoryFull = () => {
  const [searchParams] = useSearchParams();

  const id = searchParams.get("id");

  const { response, isLoading } = get(
    guardianAPI,
    `${id}?api-key=test&show-fields=body,main,trailText`
  );

  return (
    !isLoading && (
      <div className="flex flex-col">
        <section className="flex flex-col gap-4 max-w-max-layout m-auto">
          <h4 className="text-primary font-bold text-md uppercase">
            {response.content.sectionName}
          </h4>
          <h2 className="text-5xl font-bold">{response.content.webTitle}</h2>
          <h3 className="text-xl font-semibold text-gray-300">
            {response.content.fields.trailText}
          </h3>
          <figure className="mt-10 w-full aspect-[1.5/1] overflow-hidden rounded-md">
            <img className="w-full h-full" src={response.content.fields.main} />
          </figure>
        </section>
      </div>
    )
  );
};

export default StoryFull;
