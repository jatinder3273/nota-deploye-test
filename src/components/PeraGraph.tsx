import React from "react";
import DarkMode from "../hooks/context/DarkModeContext";

interface Props {
  title: string;
  content: string;
}
const PeraGraph = ({ title, content }: Props) => {
  const darkMode = React.useContext(DarkMode);
  return (
    <>
      <div className={`peragraph-content`}>
        <h4 className={`p-title ${darkMode ? "text-white" : ""}`}>{title}</h4>
        <p className={`p-content ${darkMode ? "text-white" : ""}`} dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </>
  );
};

export default PeraGraph;
