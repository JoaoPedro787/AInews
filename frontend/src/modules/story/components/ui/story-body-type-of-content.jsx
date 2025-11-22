import { useEffect, useState, useRef, useLayoutEffect } from "react";

// Services
import genaiAPI from "../../../../services/genAI";

const TypeOfContent = ({ data, state, body }) => {
  const [response, setResponse] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const [height, setHeight] = useState(0);

  const aiRef = useRef(null);

  // Faz o request quando muda para AI
  useEffect(() => {
    if (state === data[1].id && !response) {
      genaiAPI
        .post("/ai/summary", { body: body })
        .then((res) => setResponse(res))
        .finally(() => setLoading(false));
    }
  }, [state]);

  // Mede a altura **depois** que o conteúdo AI renderiza
  useLayoutEffect(() => {
    if (aiRef.current) {
      const newHeight = aiRef.current.offsetHeight;
      setHeight(newHeight);
    }
  }, [response, isLoading]);

  return (
    <section
      className={`flex transition-all`}
      style={{
        transform: state === data[1].id ? "translateX(-100%)" : "translateX(0)",
        height: state === data[1].id ? height : "auto",
      }}
    >
      {/* Original */}
      <div
        className="prose prose-lg prose-invert min-w-full max-default:prose-base"
        dangerouslySetInnerHTML={{
          __html: body || "<p><em>No content available.</em></p>",
        }}
      />

      {/* AI Resume */}
      <div className="min-w-full h-fit" ref={aiRef}>
        {isLoading ? (
          <p className="animate-typing overflow-hidden whitespace-nowrap border-r-5 font-bold">
            Generating text...
          </p>
        ) : (
          <div
            className="prose prose-lg prose-invert w-full max-default:prose-base"
            dangerouslySetInnerHTML={{ __html: response }}
          />
        )}
      </div>
    </section>
  );
};

export default TypeOfContent;
