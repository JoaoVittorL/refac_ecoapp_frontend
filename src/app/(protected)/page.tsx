import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default async function Home() {
  return <div className="font-bold">Indicadores</div>;
}
