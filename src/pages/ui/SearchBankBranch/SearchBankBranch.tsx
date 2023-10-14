import { Filters, YandexMap } from "../../../widgets";
import "./SearchBankBranch.css";
import logo from "./imgs/logo_light.png";

const SearchBankBranch = () => {
  const rootClassName = "search-bank-branch";
  return (
    <>
      <header className={`${rootClassName}__header`}>
        <img className={`${rootClassName}__logo`} src={logo} />
      </header>
      <main className={`${rootClassName}__main`}>
        <YandexMap />
        <Filters />
      </main>
    </>
  );
};

export default SearchBankBranch;
