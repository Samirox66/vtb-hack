import { ToSearchBranchButton } from "../../../features";
import { BankFeatures, Header } from "../../../widgets";
import "./Landing.css";

const Landing = () => {
  const rootClassName = "landing";
  return (
    <div className={rootClassName}>
      <Header />
      <section className={`${rootClassName}__main`}>
        <ToSearchBranchButton />
        <BankFeatures />
      </section>
    </div>
  );
};

export default Landing;
