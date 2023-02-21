import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./SummaryItem.css";

const SummaryItem = ({ summary }) => {
  const { name, count, icon } = summary;

  return (
    <div className="summary">
      <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
      <h3>{count}+</h3>
      <p>{name}</p>
    </div>
  );
};

export default SummaryItem;
