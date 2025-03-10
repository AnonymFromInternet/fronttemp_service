interface PlayerInfoProps {
  player: Player;
}

export const PlayerInfo = ({ player }: PlayerInfoProps) => {
  return <div>{player.name}</div>;
};
