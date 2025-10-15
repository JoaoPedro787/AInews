import NewsTemplate1 from "../../../modules/news/components/layouts/news-template-1";
import NewsTemplate2 from "../../../modules/news/components/layouts/news-template-2";
import NewsTemplate3 from "../../../modules/news/components/layouts/news-template-3";

const Index = () => (
  <>
    <div className="flex flex-col gap-20">
      <NewsTemplate1 />
      <NewsTemplate2 />
      <NewsTemplate3 />
    </div>
  </>
);

export default Index;
