import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(
          ({
            id,
            title,
            description,
            img,
            spareImg,
            className,
            imgClassName,
            titleClassName,
          }) => (
            <BentoGridItem
              key={id}
              id={id}
              title={title}
              description={description}
              img={img}
              spareImg={spareImg}
              className={className}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
