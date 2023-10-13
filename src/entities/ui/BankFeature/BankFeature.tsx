import { FC } from "react";
import "./BankFeature.css";

interface BankFeatureProps {
  feature: string;
}

const BankFeature: FC<BankFeatureProps> = ({ feature }) => {
  const rootClassName = "bank-feature";
  return (
    <section className={rootClassName}>
      <img className={`${rootClassName}__img`} />
      <p className={`${rootClassName}__feature`}>{feature}</p>
    </section>
  );
};

export default BankFeature;
