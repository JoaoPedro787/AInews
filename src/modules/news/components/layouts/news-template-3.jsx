import NoticeCard from "../ui/notice-card";

const NewsTemplate3 = () => {
  return (
    <section className="flex flex-col gap-4">
      <article className="flex flex-col gap-1">
        <h2 className="text-3xl font-semibold">Your topics</h2>
        <h3 className="font-semibold">Recommended based on your interests</h3>
      </article>
      <div className="flex gap-6 max-[1281px]:flex-col">
        <section className="flex-1 flex flex-col gap-4 bg-layout-primary shadow-md rounded-md p-layout">
          <h3 className="text-3xl font-semibold">U.S.</h3>
          <NoticeCard size={"small"} />
          <NoticeCard size={"small"} />
          <NoticeCard size={"small"} />
        </section>

        <section className="flex-1 flex flex-col gap-4 bg-layout-primary shadow-md rounded-md p-layout">
          <h3 className="text-3xl font-semibold">Technology</h3>
          <NoticeCard size={"small"} />
          <NoticeCard size={"small"} />
          <NoticeCard size={"small"} />
        </section>

        <section className="flex-1 flex flex-col gap-4 bg-layout-primary shadow-md rounded-md p-layout">
          <h3 className="text-3xl font-semibold">Science</h3>
          <NoticeCard size={"small"} />
          <NoticeCard size={"small"} />
          <NoticeCard size={"small"} />
        </section>
      </div>
    </section>
  );
};

export default NewsTemplate3;
