const SearchHeader = ({ link, search }) => (
  <section className="flex gap-4 items-center">
    {link?.icon && (
      <div className="aspect-square w-16 overflow-hidden">{link.icon}</div>
    )}
    <>
      <article className="flex flex-col gap-1">
        <h2 className="text-2xl font-semibold">{link?.id || search}</h2>
        <h3 className="text-md text-semibold text-gray-300">
          {link?.link === "/search?section=for%20you"
            ? "Recommended based on your interests"
            : link
            ? "Latest News"
            : "Search Results "}
        </h3>
      </article>
    </>
  </section>
);

export default SearchHeader;
