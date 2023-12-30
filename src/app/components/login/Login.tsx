import Login_module from "./login.module.css";
import { Fingerprint } from "lucide-react";
import Link from "next/link";
import Footer from "../footer/Footer";

export default function Login() {
  return (
    <>
      <div className={Login_module.login}>
        <Link href={"/main"}>
          <div className={Login_module.logo}>
            <Fingerprint />
          </div>
        </Link>
        <Footer />
      </div>
    </>
  );
}
