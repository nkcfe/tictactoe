import React, { useState } from "react";
import Layout from "../components/share/Layout";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import BoardSize from "../components/setting/BoardSize";
import Player from "../components/setting/Player";
import Sequence from "../components/setting/Sequence";
import VicCondition from "../components/setting/VicCondition";

const Setting = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNextIndex = () => {
    setActiveIndex((prev) => prev + 1);
  };

  const handlePrevIndex = () => {
    setActiveIndex((prev) => prev - 1);
  };

  return (
    <Layout>
      <Carousel>
        <CarouselItem activeIndex={activeIndex}>
          <BoardSize handleNextIndex={handleNextIndex} />
        </CarouselItem>
        <CarouselItem activeIndex={activeIndex}>
          <VicCondition
            handleNextIndex={handleNextIndex}
            handlePrevIndex={handlePrevIndex}
          />
        </CarouselItem>
        <CarouselItem activeIndex={activeIndex}>
          <Player
            handleNextIndex={handleNextIndex}
            handlePrevIndex={handlePrevIndex}
          />
        </CarouselItem>
        <CarouselItem activeIndex={activeIndex}>
          <Sequence
            handleNextIndex={handleNextIndex}
            handlePrevIndex={handlePrevIndex}
          />
        </CarouselItem>
      </Carousel>
    </Layout>
  );
};

export default Setting;
