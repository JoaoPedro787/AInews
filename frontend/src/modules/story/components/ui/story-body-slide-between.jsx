const SlideBetween = ({ data, state }) => (
  <section className="flex gap-4 border-b-1 pb-2 border-white/20 font-semibold text-base max-default:text-sm">
    {data.map((el, i) => (
      <button
        onClick={() => state.setAI(el.id)}
        className={`flex flex-col gap-1 cursor-pointer transition-all ${
          el.id == state.aiResume ? "after:border-1" : "text-white/60"
        }`}
        key={i}
      >
        <h3>{el.id}</h3>
      </button>
    ))}
  </section>
);

export default SlideBetween;
