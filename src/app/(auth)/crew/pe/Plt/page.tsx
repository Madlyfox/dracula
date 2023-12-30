import React from "react";
import Crew_module from "@/app/components/main/main.module.css";
import Image from "next/image";

const plt = {
  id: 5,
  role: "Plt",
  first_name: "Michael",
  last_name: "Temper",
  frc: 3,
  res: 17,
  int: 4,
  elo: 9,
  agi: 10,
  fur: 1,
  per: 16,
  sav: 18,
};

export default function () {
  return (
    <div className={Crew_module.main}>
      <div className={Crew_module.head}>
        <h2>Pilote</h2>
        <div>
          <h2>{plt.first_name + " " + plt.last_name}</h2>
        </div>
        <div>
          <p className={Crew_module.bio}>
            Pilote Michael Temper, vétéran du nouveau vaisseau spatial, allie
            expérience à une amabilité contagieuse. Drôle et serviable, sa
            jovialité dissimule une certaine crainte, mais son expertise
            navigatoire demeure inégalée.
          </p>
        </div>
      </div>
      {/* <div className={Crew_module.body}>
        <div className={Crew_module.group}>
          <h2> Constitution : </h2>
          <p>Force :{plt.frc}</p>
          <p>Resistance :{plt.res}</p>
        </div>
        <div className={Crew_module.group}>
          <h2> Mental : </h2>
          <p>Intellect :{plt.int}</p>
          <p>Eloquence :{plt.elo}</p>
        </div>
        <div className={Crew_module.group}>
          <h2> Dexterité : </h2>
          <p>Agilité :{plt.agi}</p>
          <p>Furtivité :{plt.fur}</p>
        </div>
        <div className={Crew_module.group}>
          <h2> Survie : </h2>
          <p>Perception :{plt.per}</p>
          <p>Savoir Faire :{plt.sav}</p>
        </div>
      </div> */}
    </div>
  );
}
