const GUARDIAN_KEY = import.meta.env.VITE_GUARDIAN_KEY;

const latestURL = `/search?&page=1&page-size=4&show-fields=thumbnail,trailText&show-tags=contributor&api-key=${GUARDIAN_KEY}`;

const forYouURL = (data, page) =>
  `/search?tag=${data[0]}/${data[0]}|${data[1]}/${data[1]}|${data[2]}/${
    data[2]
  }&${
    page ? `page-size=30&page=${page}` : "page-size=6"
  }&order-by=newest&show-fields=thumbnail,trailText&show-tags=contributor&api-key=${GUARDIAN_KEY}`;

const sectionsURL = (field, value, page) =>
  `/search?${field}=${value}&page=${page}&page-size=30&order-by=newest&show-fields=thumbnail,trailText&show-tags=contributor&api-key=${GUARDIAN_KEY}`;

const topicURL = (data) =>
  `/search?section=${data.toLowerCase()}&page-size=3&show-fields=thumbnail,trailText&show-tags=contributor&api-key=${GUARDIAN_KEY}`;

const articleURL = (id) =>
  `${id}?api-key=${GUARDIAN_KEY}&show-fields=body,main,trailText&show-tags=contributor`;

export { latestURL, forYouURL, sectionsURL, topicURL, articleURL };
