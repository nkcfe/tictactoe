import Flex from "../share/Flex";
import styled from "styled-components";
import ColorPicker from "../share/ColorPicker";
import type { playerType } from "../../module/player";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { colorPallets, iconPallets } from "../../utils/pallets";

interface ChoiceProps {
  player: playerType;
  usingColor: string[];
  setPlayerColor: (color: string) => void;
  setPlayerIcon: (iconIndex: number) => void;
}

const Choice = (props: ChoiceProps) => {
  const { player, setPlayerColor, usingColor, setPlayerIcon } = props;

  const handleColor = (color: string) => {
    setPlayerColor(color);
  };

  return (
    <Base justify="center" align="center" direction="column">
      <Title>{player.name}</Title>
      <SwiperWrapper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        initialSlide={player.iconIndex}
        onSlideChange={(swiper: any) => setPlayerIcon(swiper.activeIndex)}
      >
        {iconPallets.map((Icon, index) => (
          <SwiperSlide key={index}>
            <Icon size={50} color={player.color} />
          </SwiperSlide>
        ))}
      </SwiperWrapper>

      <Flex>
        {colorPallets.map((color) => (
          <ColorPicker
            color={color}
            onClick={() => handleColor(color)}
            disable={usingColor.includes(color)}
          />
        ))}
      </Flex>
    </Base>
  );
};

export default Choice;

const Base = styled(Flex)`
  width: 100%;
  height: 100%;
  gap: 30px;
`;

const Title = styled.div`
  font-size: 1.5rem;
`;

const SwiperWrapper = styled(Swiper)`
  width: 200px;
`;
