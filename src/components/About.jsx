import React from "react";

const About = () => {
  return (
    <section className="mb-10 mt-10" id="about">
      <div className="text-center mb-10">
        <span className="bg-[#222]  text-white rounded-full h-6 text-xl font-medium px-2 py-1 uppercase">
          About
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide text-center text-[#222]">
          A Few Words About Us
        </h2>
      </div>
      <div className="about-info p-6 bg-white rounded-lg shadow-lg border">
        <h3 className="title font-semibold text-xl mb-3">
          Discover Tour Empire: Crafting Unforgettable Journeys
        </h3>
        <p className="text-lg text-[#444]">
          Welcome to Tour Empire, where every journey is a story waiting to be
          told. We specialize in crafting bespoke travel experiences tailored to
          your dreams. From the sun-kissed beaches to the majestic mountains,
          our passion lies in curating unforgettable adventures that leave a
          lasting imprint. With a focus on authenticity, sustainability, and
          personalized service, we invite you to explore the world with us, one
          remarkable destination at a time. Join us, and let's create memories
          that will linger long after the journey ends.
        </p>
      </div>
    </section>
  );
};

export default About;
