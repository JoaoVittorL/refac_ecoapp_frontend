import { Poppins } from "next/font/google";
import Logo from "../../../public/logo.svg";
import Image from "next/image";

import { cn } from "@/src/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn("text-3xl font-semibold", font.className)}>
        <Image
          src={Logo}
          alt="Logo da ecoéletrica, contento as cores verde e azul e um icone de folha."
          width={100}
          height={100}
        />
      </h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
