import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonC = () => (
  <div className="flex flex-1 w-full h-full bg-[#2e2e2e]">
    <Skeleton
      containerClassName="flex-1"
      className="w-full h-full"
      height="100%"
      width="100%"
      baseColor="#2e2e2e"
      highlightColor="#555555"
    />
  </div>
);

export default SkeletonC;
