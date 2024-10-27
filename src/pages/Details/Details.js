import React from "react";
import { useParams } from "react-router-dom";
import "./Details.scss";
import {
  ExerciseDetails,
  ExerciseVideos,
  ExerciseSimilar,
  ExerciseEquipment,
} from "../../components/index";
const Details = () => {
  const { id } = useParams();
  return (
    <div className="e_details">
      <ExerciseDetails id={id} />
      <ExerciseVideos />
      <ExerciseSimilar />
      <ExerciseEquipment />
    </div>
  );
};

export default Details;
