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
import { VehicleSchema } from "@/schemas";
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
  const form = useForm<z.infer<typeof VehicleSchema>>({
    resolver: zodResolver(VehicleSchema),
    defaultValues: {
      placa: "",
      equipe: "",
      tipo: "",
    },
  });
  const onSubmit = async (data: z.infer<typeof VehicleSchema>) => {
    setError("");
    setSucess("");
    const response = await fetch("/api/obras", {
      method: "POST",
      body: JSON.stringify({
        placa: data.placa,
        equipe: data.equipe,
        tipo: data.tipo,
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
    <Modal title="Criar obra" isOpen={isOpen} onClose={handleOpenModal}>
      <FormError message={error} />
      <FormSucess message={sucess} />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex flex-col justify-between gap-4 md:flex-row items-end">
            <FormField
              control={form.control}
              name={"placa"}
              render={({ field }) => (
                <FormItem className="md:w-[50%] w-full">
                  <FormLabel>Placa</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPeding}
                      {...field}
                      type="text"
                      placeholder="Digite a placa"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

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
                    <SelectItem value="PESADO">PESADO</SelectItem>
                    <SelectItem value="APOIO">APOIO</SelectItem>
                    <SelectItem value="LEVE">LEVE</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
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
                    type="text"
                    placeholder="Digite a equipe"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={isPeding} type="submit" className="w-full">
            Criar
          </Button>
        </form>
      </Form>
    </Modal>
  );
};
export default CreateUser;
