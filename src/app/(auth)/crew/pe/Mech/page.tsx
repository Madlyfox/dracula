import React from "react";
import Crew_module from "@/app/components/main/main.module.css";
import Image from "next/image";

const mech = {
  id: 4,
  role: "Mech",
  first_name: "Igor",
  last_name: "Patrik",
  frc: 7,
  res: 13,
  int: 6,
  elo: 16,
  agi: 7,
  fur: 20,
  per: 11,
  sav: 6,
};

export default function () {
  return (
    <div className={Crew_module.main}>
      <div className={Crew_module.head}>
        <h2>Mécanicien</h2>
        <div>
          <h2>{mech.first_name + " " + mech.last_name}</h2>
        </div>
        <div>
          <p className={Crew_module.bio}>
            Igor Patrik, mécanicien aguerri du nouveau vaisseau spatial, exprime
            son expertise par l'action, peu loquace mais efficace. Son
            expérience forge une fiabilité mécanique inébranlable, alliant
            savoir-faire et pragmatisme dans le silence.
          </p>
        </div>
      </div>
      {/* <div className={Crew_module.body}>
        <div className={Crew_module.group}>
          <h2> Constitution : </h2>
          <p>Force :{mech.frc}</p>
          <p>Resistance :{mech.res}</p>
        </div>
        <div className={Crew_module.group}>
          <h2> Mental : </h2>
          <p>Intellect :{mech.int}</p>
          <p>Eloquence :{mech.elo}</p>
        </div>
        <div className={Crew_module.group}>
          <h2> Dexterité : </h2>
          <p>Agilité :{mech.agi}</p>
          <p>Furtivité :{mech.fur}</p>
        </div>
        <div className={Crew_module.group}>
          <h2> Survie : </h2>
          <p>Perception :{mech.per}</p>
          <p>Savoir Faire :{mech.sav}</p>
        </div>
      </div> */}
    </div>
  );
}
