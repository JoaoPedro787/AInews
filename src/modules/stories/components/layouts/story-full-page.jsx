const Intro = () => {
  return (
    <section className="flex flex-col gap-4 max-w-[1080px] m-auto">
      <h4 className="text-primary font-bold text-md">AI</h4>
      <h2 className="text-5xl font-bold">
        OpenAI bans MLK deepfakes after ‘disrespectful depictions’
      </h2>
      <h3 className="text-xl font-semibold text-gray-300">
        The AI-generated videos drew some complaints from MLK's family.
      </h3>
      <figure className="mt-10 w-full aspect-[1.5/1] overflow-hidden rounded-md">
        <img
          className="w-full h-full"
          src="https://storage.morningbrew.com/image/2025-10-17/image-afbaaf88fa496031f0f32a7692ea551039f34121-720x480-jpg/mbd-mlk-openai-bettmann-getty-1025_720.webp"
        />
      </figure>
    </section>
  );
};

const StoryFull = () => {
  return (
    <div className="flex flex-col">
      <Intro />
    </div>
  );
};

export default StoryFull;
