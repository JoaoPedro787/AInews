import Latest from "../../../modules/stories/components/layouts/latest";
import ForYou from "../../../modules/stories/components/layouts/for-you";
import Topics from "../../../modules/stories/components/layouts/topics";

const Index = () => (
  <>
    <div className="flex flex-col gap-20">
      <Latest />
      <ForYou />
      <Topics />
    </div>
  </>
);

export default Index;
