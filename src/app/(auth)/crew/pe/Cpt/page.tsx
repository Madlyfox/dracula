import React from "react";
import Crew_module from "@/app/components/main/main.module.css";
import Image from "next/image";
import Footer from "@/app/components/footer/Footer";

const cpt = {
  id: 1,
  role: "Cpt",
  first_name: "James",
  last_name: "Holden",
  frc: 9,
  res: 4,
  int: 2,
  elo: 9,
  agi: 5,
  fur: 16,
  per: 11,
  sav: 17,
};

export default function () {
  return (
    <div className={Crew_module.main}>
      <div className={Crew_module.head}>
        <h2>Capitaine</h2>
        <div>
          <h2>{cpt.first_name + " " + cpt.last_name}</h2>
        </div>
        <div>
          <p className={Crew_module.bio}>
            Capitaine James Holden, pilote spatial chevronné depuis 5 ans, allie
            impétuosité et loyauté dans son commandement.
            <br /> Expert des étoiles, dragueur charismatique et blagueur
            incorrigible, il navigue avec audace à travers les mystères de
            l'espace.
          </p>
        </div>
      </div>
      {/* <div className={Crew_module.body}>
        <ul>
          <li>
            <h3>Constitution</h3>
            <div className={Crew_module.btm}>
              <p>Force :{cpt.frc}</p>
              <p>Resistance :{cpt.res}</p>
            </div>
          </li>

          <li>
            <h3>Mental</h3>
            <div className={Crew_module.btm}>
              <p>Intellect :{cpt.int}</p>
              <p>Eloquence :{cpt.elo}</p>
            </div>
          </li>
          <li>
            <h3>Dexterité</h3>
            <div className={Crew_module.btm}>
              <p>Agilité :{cpt.agi}</p>
              <p>Furtivité :{cpt.fur}</p>
            </div>
          </li>

          <li>
            <h3>Survie</h3>
            <div className={Crew_module.btm}>
              <p>Perception :{cpt.per}</p>
              <p>Savoir Faire :{cpt.sav}</p>
            </div>
          </li>
        </ul>
      </div> */}
    </div>
  );
}
