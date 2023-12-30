import Link from "next/link";
import Crew_module from "@/app/components/main/main.module.css";

import React, { useState } from "react";
import { crew } from "@/app/components/crew/crew_data";
import Footer from "@/app/components/footer/Footer";

export default function Crew() {
  return (
    <>
      <div className={Crew_module.main}>
        <div className={Crew_module.body}>
          <ul>
            {crew.map((member: any) => (
              <li>
                <Link href={`/crew/pe/${member.role}`}>
                  {member.role.toUpperCase() +
                    "." +
                    " " +
                    member.first_name +
                    " " +
                    member.last_name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
