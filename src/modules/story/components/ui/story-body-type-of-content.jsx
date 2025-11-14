import { useEffect, useState, useSyncExternalStore } from "react";
import { get } from "../../../../services/genAI";

const TypeOfContent = ({ data, state, body }) => {
  const [response, setResponse] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (state == data[1].id && !response) {
      get(body)
        .then((res) => setResponse(res.text))
        .finally(() => setLoading(false));
    }
  }, [state]);

  return (
    <section
      className={`flex transition-all ${
        state == data[1].id && "-translate-x-full"
      }`}
    >
      {/* Original */}
      <div
        className="prose prose-lg prose-invert min-w-full"
        dangerouslySetInnerHTML={{
          __html: body || "<p><em>No content available.</em></p>",
        }}
      />
      {/* AI Resume */}
      <div className="min-w-full">
        {isLoading ? (
          <p className="animate-typing overflow-hidden whitespace-nowrap border-r-5 font-bold">
            Generating text...
          </p>
        ) : (
          <div
            className="prose prose-lg prose-invert w-full"
            dangerouslySetInnerHTML={{ __html: response }}
          />
        )}
      </div>
    </section>
  );
};

export default TypeOfContent;
