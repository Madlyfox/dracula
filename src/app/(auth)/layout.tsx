import { usePathname } from "next/navigation";
import Main_module from "@/app/components/main/main.module.css";
import Image from "next/image";

export default function Layout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className={Main_module.header}>
          <div className={Main_module.logo}>
            <Image src={"/logo.png"} width={130} height={130} alt="" />
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
