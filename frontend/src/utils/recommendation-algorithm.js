import { get, set } from "localstorage-with-expire";

const setRecommendationStorage = (data) => {
  const storage = get("recommendation") || [];

  set(
    "recommendation",
    [
      ...storage,
      {
        section: data.sectionId,
        type: data.type,
        clicked: new Date().toLocaleDateString(),
      },
    ],
    { days: 7 }
  );
};

const getRecommendationStorage = () => get("recommendation");

const getRecommendedStorage = () => {
  try {
    const recommended = JSON.parse(localStorage.getItem("recommended"));

    if (!recommended) throw new Error();

    return { data: recommended, error: false };
  } catch (error) {
    return { data: ["technology", "politics", "sport"], error: true };
  }
};

const setRecommendedStorage = (data) => {
  return localStorage.setItem("recommended", JSON.stringify(data));
};

const getRefreshStorage = () => get("refresh");

const setRefreshStorage = () => set("refresh", true, { minute: 3 });

export {
  setRecommendationStorage,
  getRecommendationStorage,
  getRecommendedStorage,
  setRecommendedStorage,
  getRefreshStorage,
  setRefreshStorage,
};
