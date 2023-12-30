import React from "react";
import Crew_module from "@/app/components/main/main.module.css";
import Image from "next/image";

const ing = {
  id: 2,
  role: "Ing",
  first_name: "Clara",
  last_name: "Vasko",
  frc: 20,
  res: 10,
  int: 13,
  elo: 7,
  agi: 13,
  fur: 19,
  per: 16,
  sav: 3,
};

export default function () {
  return (
    <div className={Crew_module.main}>
      <div className={Crew_module.head}>
        <h2>Ingénieur</h2>
        <div>
          <h2>{ing.first_name + " " + ing.last_name}</h2>
        </div>
        <div>
          <p className={Crew_module.bio}>
            Clara Vasko, récemment promue ingénieure spatiale, marie
            intelligence et courage. Belle et réservée, elle apporte une
            fraîcheur novatrice à la technologie spatiale, façonnant l'avenir
            avec élégance et détermination
          </p>
        </div>
      </div>
      {/* <div className={Crew_module.body}>
        <div className={Crew_module.group}>
          <h2> Constitution : </h2>
          <p>Force :{ing.frc}</p>
          <p>Resistance :{ing.res}</p>
        </div>
        <div className={Crew_module.group}>
          <h2> Mental : </h2>
          <p>Intellect :{ing.int}</p>
          <p>Eloquence :{ing.elo}</p>
        </div>
        <div className={Crew_module.group}>
          <h2> Dexterité : </h2>
          <p>Agilité :{ing.agi}</p>
          <p>Furtivité :{ing.fur}</p>
        </div>
        <div className={Crew_module.group}>
          <h2> Survie : </h2>
          <p>Perception :{ing.per}</p>
          <p>Savoir Faire :{ing.sav}</p>
        </div>
      </div> */}
    </div>
  );
}
