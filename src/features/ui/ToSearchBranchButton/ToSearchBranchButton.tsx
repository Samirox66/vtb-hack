import { Link } from "react-router-dom";
import "./ToSearchBranchButton.css";

const ToSearchBranchButton = () => {
  const rootClassName = "to-search-branch-button";
  return (
    <section className={rootClassName}>
      <h2 className={`${rootClassName}__text`}>
        Новый поиск отделений банка:{" "}
        <span className={`${rootClassName}__text_bold`}>
          найти менее загруженный и записаться онлайн
        </span>
      </h2>
      <button className={`${rootClassName}__button`}>Посмотреть</button>
    </section>
  );
};

export default ToSearchBranchButton;
