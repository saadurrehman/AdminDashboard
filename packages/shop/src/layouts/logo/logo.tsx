import React from "react";
import Router from "next/router";
import { LogoBox } from "./logo.style";
type LogoProps = {
  imageUrl: string;
  alt: string;
  onClick?: () => void;
};

const Logo: React.FC<LogoProps> = ({ imageUrl, alt, onClick }) => {
  function onLogoClick() {
    Router.push("/");
    if (onClick) {
      onClick();
    }
  }
  return (
    <LogoBox onClick={onLogoClick}>
      <h3>ADMIN DASHBOARD</h3>
    </LogoBox>
  );
};

export default Logo;
