import { FC } from "react";
import "./BranchWithDistance.css";
import logo from "./imgs/Frame 24.png";

interface BranchWithDistanceProps {
  name: string;
  distance: number;
}

const BranchWithDistance: FC<BranchWithDistanceProps> = ({
  name,
  distance,
}) => {
  return (
    <section className="branch-with-distance">
      <img className="branch-with-distance__logo" src={logo} />
      <p className="branch-with-distance__address">{name}</p>
      <p className="branch-with-distance__distance">{distance} м</p>
    </section>
  );
};

export default BranchWithDistance;
