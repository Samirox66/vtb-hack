import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavLink.css";

export interface NavLinkProps {
  label: string;
  to: string;
}

const NavLink: FC<NavLinkProps> = ({ label, to }) => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <Link className="nav-link" to={to}>
      {label}
    </Link>
  );
};

export default NavLink;
