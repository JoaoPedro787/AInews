import NoticeCard from "../ui/notice-card";

const NewsTemplate2 = () => {
  return (
    <section className="flex flex-col gap-4">
      <article className="flex flex-col gap-1">
        <h2 className="text-3xl font-semibold">For you</h2>
        <h3 className="font-semibold">Recommended based on your interests</h3>
      </article>
      <div className="flex shadow-md rounded-md gap-6 p-layout bg-layout-primary">
        <section className="flex-1 flex flex-col gap-4">
          <NoticeCard />
          <NoticeCard />
          <NoticeCard />
        </section>
        <span className="border-1 border-gray-500" />
        <section className="flex-1 flex flex-col gap-4">
          <NoticeCard />
          <NoticeCard />
          <NoticeCard />
        </section>
      </div>
    </section>
  );
};

export default NewsTemplate2;
