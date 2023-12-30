import Link from "next/link";
import Crew_module from "@/app/components/main/main.module.css";
import React from "react";
import Footer from "../footer/Footer";

export default function Crew() {
  return (
    <>
      <div className={Crew_module.main}>
        <div className={Crew_module.body}>
          <ul>
            <li>
              <Link href={"/crew/pe"}>PERSONNEL ESSENTIEL</Link>
            </li>
            <li>
              <Link href={"/crew/npe"}>PERSONNEL NON ESSENTIEL</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
