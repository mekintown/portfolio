const HeroSection = () => {
  return (
    <section
      id="hero-section"
      className="w-screen mt-[-64px] top-0 relative bg-[url('/hero-background.jpeg')] h-screen bg-cloud-background bg-cover bg-center text-gray-900 dark:text-white flex flex-col justify-center items-center"
    >
      <h1 className="text-6xl tracking-tight text-gray-100 sm:text-6xl font-light mb-4">
        Maekin Namwong
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-300">
        A third year Computer Engineering Student
      </p>
    </section>
  );
};

export default HeroSection;
