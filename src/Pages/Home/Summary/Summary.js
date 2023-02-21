import {
  faAngleUp,
  faCarSide,
  faRankingStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import SummaryItem from "../SummaryItem/SummaryItem";
import "./Summary.css";

const Summary = () => {
  const businessSummary = [
    {
      id: 1,
      name: "Served Customer",
      count: "100",
      icon: faUser,
    },
    {
      id: 2,
      name: "Annual Revenue",
      count: "10M",
      icon: faAngleUp,
    },
    {
      id: 3,
      name: "Reviews",
      count: "500",
      icon: faRankingStar,
    },
    {
      id: 4,
      name: "Parts Available",
      count: "50",
      icon: faCarSide,
    },
  ];

  return (
    <section className="summary-section">
      <div className="container">
        <h2>Millions of people trust us</h2>

        <div className="summary-items">
          {businessSummary.map((item) => (
            <SummaryItem key={item.id} summary={item}></SummaryItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Summary;
