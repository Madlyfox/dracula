import React from "react";
import Crew_module from "@/app/components/main/main.module.css";
import Image from "next/image";

const dr = {
  id: 3,
  role: "dr",
  first_name: "Catherine",
  last_name: "Dehker",
  frc: 19,
  res: 5,
  int: 5,
  elo: 3,
  agi: 11,
  fur: 19,
  per: 8,
  sav: 16,
};

export default function () {
  return (
    <div className={Crew_module.main}>
      <div className={Crew_module.head}>
        <h2>Docteur</h2>
        <div>
          <h2>{dr.first_name + " " + dr.last_name}</h2>
        </div>
        <div>
          <p className={Crew_module.bio}>
            Le Dr. Catherine Dehker, médecin spatial chevronné depuis de
            nombreuses années, conjugue rigueur, intelligence et précision dans
            sa pratique médicale à bord des vaisseaux spatiaux. Une experte
            dévouée à la santé de l'équipage.
          </p>
        </div>
      </div>
      {/* <div className={Crew_module.body}>
        <div className={Crew_module.group}>
          <h2> Constitution : </h2>
          <p>Force :{dr.frc}</p>
          <p>Resistance :{dr.res}</p>
        </div>
        <div className={Crew_module.group}>
          <h2> Mental : </h2>
          <p>Intellect :{dr.int}</p>
          <p>Eloquence :{dr.elo}</p>
        </div>
        <div className={Crew_module.group}>
          <h2> Dexterité : </h2>
          <p>Agilité :{dr.agi}</p>
          <p>Furtivité :{dr.fur}</p>
        </div>
        <div className={Crew_module.group}>
          <h2> Survie : </h2>
          <p>Perception :{dr.per}</p>
          <p>Savoir Faire :{dr.sav}</p>
        </div>
      </div> */}
    </div>
  );
}
