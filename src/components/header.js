import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const handleClick = ev => {
  ev.preventDefault();
  const element = document.getElementById("nav");
  element.classList.toggle("block");
  element.classList.toggle("hidden");
};

const Header = ({ siteTitle }) => <nav className="bg-teal" />;

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
