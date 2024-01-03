"use client";

import { useState, useTransition } from "react";
import { FormError } from "../form-error";
import { FormSucess } from "../form-sucess";
import Modal from "../modal";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { TeamsSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { revalidatePath } from "next/cache";
interface CreateUserProps {
  token: string | null;
  isOpen: boolean;
  onClose: () => void;
}

const CreateUser: React.FC<CreateUserProps> = ({
  token,
  isOpen,
  onClose,
}: CreateUserProps) => {
  function handleOpenModal() {
    onClose();
  }
  const [error, setError] = useState<string | undefined>("");
  const [sucess, setSucess] = useState<string | undefined>("");

  const [isPeding, startTransition] = useTransition();
  const form = useForm<z.infer<typeof TeamsSchema>>({
    resolver: zodResolver(TeamsSchema),
    defaultValues: {
      equipe: "",
      tipo: "",
      lider: "",
      supervisor_id: "",
      coordenador_id: "",
      contrato: "",
    },
  });
  const onSubmit = async (data: z.infer<typeof TeamsSchema>) => {
    setError("");
    setSucess("");
    
    const response = await fetch("/api/obras", {
      method: "POST",
      body: JSON.stringify({
        equipe: data.equipe,
        tipo: data.tipo,
        lider_id: data.lider,
        supervisor_id: data.supervisor_id,
        coordenador_id: data.coordenador_id,
        contrato: data.contrato,
        token: token,
      }),
    });

    if (response.status == 200 || response.status == 201) {
      startTransition(() => {
        setSucess("Pergunta criada com sucesso!");
        form.reset();
      });
    } else {
      startTransition(() => {
        setError("Erro ao criar pergunta!");
      });
    }
  };

  return (
    <Modal title="Criar equipe" isOpen={isOpen} onClose={handleOpenModal}>
      <FormError message={error} />
      <FormSucess message={sucess} />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name={"equipe"}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Equipe</FormLabel>
                <FormControl>
                  <Input
                    disabled={isPeding}
                    {...field}
                    type="equipe"
                    placeholder="Digite o equipe"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col justify-between gap-4 md:flex-row items-end">
            <FormField
              control={form.control}
              name="tipo"
              render={({ field }) => (
                <Select
                  value={field.value}
                  onValueChange={(value) => field.onChange(value)}
                >
                  <SelectTrigger className="md:w-[50%] w-full" name="tipo">
                    <SelectValue placeholder="Tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="LV">LV</SelectItem>
                    <SelectItem value="LM">LM</SelectItem>
                    <SelectItem value="APOIO">APOIO</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            <FormField
              control={form.control}
              name="lider"
              render={({ field }) => (
                <Select
                  value={field.value}
                  onValueChange={(value) => field.onChange(value)}
                >
                  <SelectTrigger className="md:w-[50%] w-full" name="lider">
                    <SelectValue placeholder="Lider" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="CARLOS">CARLOS</SelectItem>
                    <SelectItem value="PEDRO">PEDRO</SelectItem>
                    <SelectItem value="LUCAS">LUCAS</SelectItem>
                    <SelectItem value="FERNANDO">FERNANDO</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <div className="flex flex-col justify-between gap-4 md:flex-row items-end">
            <FormField
              control={form.control}
              name="supervisor"
              render={({ field }) => (
                <Select
                  value={field.value}
                  onValueChange={(value) => field.onChange(value)}
                >
                  <SelectTrigger
                    className="md:w-[50%] w-full"
                    name="supervisor"
                  >
                    <SelectValue placeholder="Supervisor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="CARLOS">CARLOS</SelectItem>
                    <SelectItem value="PEDRO">PEDRO</SelectItem>
                    <SelectItem value="LUCAS">LUCAS</SelectItem>
                    <SelectItem value="FERNANDO">FERNANDO</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            <FormField
              control={form.control}
              name="coordenador"
              render={({ field }) => (
                <Select
                  value={field.value}
                  onValueChange={(value) => field.onChange(value)}
                >
                  <SelectTrigger
                    className="md:w-[50%] w-full"
                    name="coordenador"
                  >
                    <SelectValue placeholder="Coordenador" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="CARLOS">CARLOS</SelectItem>
                    <SelectItem value="PEDRO">PEDRO</SelectItem>
                    <SelectItem value="LUCAS">LUCAS</SelectItem>
                    <SelectItem value="FERNANDO">FERNANDO</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            <FormField
              control={form.control}
              name="contrato"
              render={({ field }) => (
                <Select
                  value={field.value}
                  onValueChange={(value) => field.onChange(value)}
                >
                  <SelectTrigger className="md:w-[50%] w-full" name="contrato">
                    <SelectValue placeholder="Contrato" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="CARLOS">CARLOS</SelectItem>
                    <SelectItem value="PEDRO">PEDRO</SelectItem>
                    <SelectItem value="LUCAS">LUCAS</SelectItem>
                    <SelectItem value="FERNANDO">FERNANDO</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <Button disabled={isPeding} type="submit" className="w-full">
            Criar
          </Button>
        </form>
      </Form>
    </Modal>
  );
};
export default CreateUser;
