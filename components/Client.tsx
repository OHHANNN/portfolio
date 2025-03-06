import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data";

export const Client = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        Kind word from
        <span className="text-purple"> setisfied clients</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="low"
        />

        <div className="max-lg: mt-10 flex flex-wrap items-center justify-center gap-4 md:gap-16">
          {companies.map(({ id, img, name, nameImg }) => (
            <div key={id} className="flex max-w-32 gap-2 md:max-w-60">
              <img src={img} alt={name} className="w-5 md:w-10" />
              <img src={nameImg} alt={name} className="w-20 md:w-24" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
