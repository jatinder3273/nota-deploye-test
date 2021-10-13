import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../common/Footer";
import Header from "../common/Header";
import HeaderWithLogo from "../common/HeaderWithLogo";

interface Props {
  children?: React.ReactNode;
}
const MainLayout: React.FunctionComponent<Props> = ({ children }: Props) => {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" ? <Header /> : <HeaderWithLogo />}
      {children}
      <Footer />
    </>
  );
};
export default MainLayout;
