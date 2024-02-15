import React from "react";
import { iconPallets } from "../../utils/pallets";

interface MarkerProps {
  player: { color: string; iconIndex: number };
  size?: number;
}

const Marker = (props: MarkerProps) => {
  const { player, size = 50 } = props;

  const Icon = iconPallets[player.iconIndex];

  return <Icon size={size} color={player.color} />;
};

export default Marker;
