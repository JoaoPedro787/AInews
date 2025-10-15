import { LuArrowRight } from "react-icons/lu";
import NoticeCard from "../ui/notice-card";

const TopNotice = () => {
  return (
    <div className="flex flex-col flex-1 rounded-md shadow-md cursor-pointer bg-layout-primary">
      <figure className="min-w-full">
        <img
          className="w-full h-full bg-contain"
          src="https://storage.morningbrew.com/image/2025-10-14/image-fa7f9fabf7e9ed51f04d351203ea701fd7d7f459-1500x1000-jpg/MBD-Instagram-PG13-1025.webp"
        />
      </figure>
      <article className="flex flex-col gap-2 p-layout">
        <h4 className="text-lg text-primary font-bold">SOCIAL MEDIA</h4>
        <h2 className="text-3xl text-primary font-bold">
          Instagram says teen accounts will all be PG-13
        </h2>
        <h3 className="text-lg">
          The new restrictions will further constrain what content teens can
          access.
        </h3>
        <h4 className="text-lg font-semibold">Globo Brasil</h4>
      </article>
    </div>
  );
};

const NewsTemplate1 = () => {
  return (
    <section className="flex gap-6 max-[1281px]:flex-col">
      <TopNotice />
      <div className="flex flex-col flex-1 gap-4 bg-layout-primary shadow-md rounded-md p-layout">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold text-primary">The Latest</h2>
          <span className="text-lg flex gap-1 items-center cursor-pointer">
            <h3 className="font-bold">ALL STORIES</h3>
            <figure>
              <LuArrowRight />
            </figure>
          </span>
        </div>

        <section className="flex flex-col justify-evenly gap-2 grow">
          <NoticeCard />
          <NoticeCard />
          <NoticeCard />
        </section>
      </div>
    </section>
  );
};

export default NewsTemplate1;
