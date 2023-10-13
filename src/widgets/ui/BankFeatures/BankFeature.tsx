import { BankFeature } from "../../../entities";
import "./BankFeature.css";

const BankFeatures = () => {
  const rootClassName = "bank-features";
  const featuresMeta = [
    "30+ сервисов для развития бизнеса-бесплатно или со скидкой",
    "До 14% годовых по вкладу при переводе пенсии на карту ВТБ",
    "Откройте суперспособность покупать все и сразу",
    "Хороший прогноз на осень",
    "Совершайте переводы и платежи через Банк",
  ];

  return (
    <section className={rootClassName}>
      {featuresMeta.map((feature, index) => (
        <BankFeature key={`${feature}${index}`} feature={feature} />
      ))}
    </section>
  );
};

export default BankFeatures;
