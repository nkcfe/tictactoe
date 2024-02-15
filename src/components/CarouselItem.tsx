import React from "react";
import styled from "styled-components";

interface CarouselItemProps {
  activeIndex: number;
  children: React.ReactNode;
}

const CarouselItem = (props: CarouselItemProps) => {
  const { activeIndex, children } = props;
  return <Item $activeIndex={activeIndex}>{children}</Item>;
};

export default CarouselItem;

const Item = styled.li<{ $activeIndex: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(${({ $activeIndex }) => $activeIndex * -104.7}%);
  transition: 500ms ease;
  width: 100%;
  height: 100%;
`;
