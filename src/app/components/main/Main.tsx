import Link from "next/link";
import Main_module from "./main.module.css";
import Image from "next/image";
import Footer from "../footer/Footer";

export default function Main() {
  return (
    <>
      <div className={Main_module.main}>
        <div className={Main_module.body}>
          <ul>
            <li>
              <Link href={"/crew"}>CREW</Link>
            </li>
            <li>SHIP</li>
            <li>ENGINE</li>
            <li>NAVIGATION</li>
            <li>CALCULATOR</li>
          </ul>
        </div>
      </div>
    </>
  );
}
