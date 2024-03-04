'use client'
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const BackTable = ({ isPeding }: { isPeding: boolean }) => {
  const { back } = useRouter();
  return (
    <div className="flex flex-col md:flex-row justify-between gap-4">
      <Button
        disabled={isPeding}
        variant={"destructive"}
        type="submit"
        className="w-full"
        onClick={back}
      >
        Voltar
      </Button>
      <Button disabled={isPeding} type="submit" className="w-full">
        Atualizar
      </Button>
    </div>
  );
};
export default BackTable;
