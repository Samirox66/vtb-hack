import { NavLink, NavLinkProps } from "../../../shared";
import "./NavBar.css";

const NavBar = () => {
  const rootClassName = "external-nav-bar";
  const navBarMeta: Array<NavLinkProps> = [
    {
      to: "",
      label: "Частным лицам",
    },
    {
      to: "",
      label: "Самозанятым",
    },
    {
      to: "",
      label: "Малый и средний бизнес",
    },
    {
      to: "",
      label: "Крупный бизнес",
    },
  ];

  return (
    <section className={rootClassName}>
      {navBarMeta.map((linkMeta, index) => (
        <NavLink
          key={`${linkMeta}${index}`}
          label={linkMeta.label}
          to={linkMeta.to}
        />
      ))}
    </section>
  );
};

export default NavBar;
