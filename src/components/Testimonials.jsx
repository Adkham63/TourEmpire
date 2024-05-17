import React from "react";
import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="mt-20 tracking-wide text-[#222] mb-12"
    >
      <h2 className="text-2xl sm:text-4xl lg:text-3xl font-medium my-5 text-center">
        Our Feedbacks from Customers
      </h2>
      <div className="flex flex-wrap justify-center text-[#222]">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2 text-[#222]"
          >
            <div className="text-black rounded-md p-6 text-md border h-[260px] flex flex-col gap-2 shadow-md bg-white font-normal">
              <p className="text-[#444]">{testimonial.text}</p>
              <h6 className="font-medium">{testimonial.user}</h6>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
