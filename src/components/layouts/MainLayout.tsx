import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../common/Footer";
import Header from "../common/Header";
import HeaderWithLogo from "../common/HeaderWithLogo";
import DarkMode from "./../../hooks/context/DarkModeContext";
interface Props {
  children?: React.ReactNode;
}
const MainLayout: React.FunctionComponent<Props> = ({ children }: Props) => {
  const location = useLocation();
  const initalMode = localStorage.getItem("honeybabe/darkMode");
  const [checked, setChecked] = React.useState(initalMode ? JSON.parse(initalMode) : false);

  const onDarkModeChange = () => {
    setChecked(!checked);
  };

  React.useEffect(
    () => {
      if (checked) {
        localStorage.setItem("honeybabe/darkMode", checked);
      } else {
        localStorage.removeItem("honeybabe/darkMode");
      }
    },
    [checked]
  );
  return (
    <>
      <DarkMode.Provider value={checked}>
        <div className={checked ? "bg-dark position-relative z-index-0 dark-mode" : ""}>
          {location.pathname === "/" ? (
            <Header onDarkModeChange={onDarkModeChange} checked={checked} />
          ) : (
            <HeaderWithLogo onDarkModeChange={onDarkModeChange} checked={checked} />
          )}
          {children}
          <Footer />
        </div>
      </DarkMode.Provider>
    </>
  );
};
export default MainLayout;
