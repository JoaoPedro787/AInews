import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: "AIzaSyA5y0glj54vfASQz_s1yofhWM6pBzBKiss",
});

const get = async (query) =>
  ai.models.generateContent({
    model: "gemini-2.5-flash-lite",
    contents: query,
    config: {
      temperature: 0.3,
      maxOutputTokens: 500,
      candidateCount: 1,
      topP: 0.9,
      instructions: `
        You are a news assistant AI.
        Task:
        1. Receive the HTML content of a news article.
        2. Summarize the article while keeping the main ideas.
        3. Return the summary as HTML, ready to use with Prose Tailwind.
        4. Use proper HTML tags: <p> for paragraphs, <strong> for important highlights, <ul>/<li> for lists.
        5. Do NOT invent any information not present in the original article.
        6. Keep the tone professional and journalistic.
      `,
    },
  });

export default ai;
export { get };
