import StoriesTemplate1 from "../../../modules/stories/components/layouts/stories-template-1";
import StoriesTemplate2 from "../../../modules/stories/components/layouts/stories-template-2";
import StoriesTemplate3 from "../../../modules/stories/components/layouts/stories-template-3";

const Index = () => (
  <>
    <div className="flex flex-col gap-20">
      <StoriesTemplate1 />
      <StoriesTemplate2 />
      <StoriesTemplate3 />
    </div>
  </>
);

export default Index;
