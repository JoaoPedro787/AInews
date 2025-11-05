import StoryCard from "../../../../components/ui/story-card";
import { response } from "../../../../data/response-test";

const StoriesTemplate3 = () => {
  const { articles } = response;
  let slicedData = [];

  // Slicing data, not necessary when using ai
  for (let i = 3; i <= 9; i += 3) {
    slicedData.push(articles.slice(i - 3, i));
  }

  return (
    <section className="flex flex-col gap-4">
      <article className="flex flex-col gap-1">
        <h2 className="text-2xl font-semibold">Your topics</h2>
        <h3 className="font-semibold">Recommended based on your interests</h3>
      </article>
      <div className="grid grid-cols-3 auto-rows-auto gap-x-layout">
        {/* Cols */}
        {slicedData.map((el, col) => (
          <>
            {/* Topic text */}
            <h2
              className="bg-layout-primary p-layout rounded-t-md text-xl font-semibold"
              style={{ gridColumn: col + 1, gridRow: 1 }}
            >
              Topic
            </h2>

            {/* El rows */}
            {el.map((el, row) => {
              row += 1;
              return (
                <div
                  className={`flex items-end bg-layout-primary p-layout ${
                    row == 3 && "rounded-b-md"
                  }`}
                  style={{ gridColumn: col + 1, gridRow: row + 1 }}
                  key={row}
                >
                  <StoryCard data={el} size={"small"} />
                </div>
              );
            })}
          </>
        ))}
      </div>
    </section>
  );
};

export default StoriesTemplate3;
