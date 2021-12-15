import React from "react";
import PartCard from "../partcard/PartCard";
import "./partlist.css";

const ParticipantList = ({ participants }) => {
  return (
    <div className="part-list-eve">
      {participants?.map((el) => (
        <PartCard part={el} />
      ))}
    </div>
  );
};

export default ParticipantList;
