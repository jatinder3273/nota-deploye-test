import React from "react";

interface Props {
  title: string;
  content: string;
}
const PeraGraph = ({ title, content }: Props) => {
  return (
    <>
      <div className="peragraph-content">
        <h4 className="p-title">{title}</h4>
        <p className="p-content" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </>
  );
};

export default PeraGraph;
