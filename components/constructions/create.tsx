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
import { ConstructionSchema } from "@/schemas";
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
  isOpen: boolean;
  onClose: () => void;
}

const CreateUser: React.FC<CreateUserProps> = ({
  isOpen,
  onClose,
}: CreateUserProps) => {
  function handleOpenModal() {
    onClose();
  }
  const [error, setError] = useState<string | undefined>("");
  const [sucess, setSucess] = useState<string | undefined>("");

  const [isPeding, startTransition] = useTransition();
  const form = useForm<z.infer<typeof ConstructionSchema>>({
    resolver: zodResolver(ConstructionSchema),
    defaultValues: {
      projeto: "",
      descricao: "",
      cidade: "",
      utd: "",
      carteira: "",
      status: "",
    },
  });
  const onSubmit = async (data: z.infer<typeof ConstructionSchema>) => {
    setError("");
    setSucess("");
    const response = await fetch("/api/constructions", {
      method: "POST",
      body: JSON.stringify({
        projeto: data.projeto,
        descricao: data.descricao,
        cidade: data.cidade,
        utd: data.utd,
        carteira: data.carteira,
        status: true,
      }),
    });
    
    if (response.status == 200 || response.status == 201) {
      startTransition(() => {
        setSucess("Obra criada com sucesso!");
        form.reset();
      });
    } else {
      startTransition(() => {
        setError("Erro ao criar obra!");
      });
    }
  };

  return (
    <Modal title="Criar obra" isOpen={isOpen} onClose={handleOpenModal}>
      <FormError message={error} />
      <FormSucess message={sucess} />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name={"projeto"}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Projeto</FormLabel>
                <FormControl>
                  <Input
                    disabled={isPeding}
                    {...field}
                    type="projeto"
                    placeholder="Digite o projeto"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={"descricao"}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Descrição</FormLabel>
                <FormControl>
                  <Input
                    disabled={isPeding}
                    {...field}
                    type="descricao"
                    placeholder="Digite a descrição"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col justify-between gap-4 md:flex-row items-end">
            <FormField
              control={form.control}
              name="cidade"
              render={({ field }) => (
                <Select
                  value={field.value}
                  onValueChange={(value) => field.onChange(value)}
                >
                  <SelectTrigger className="md:w-[50%] w-full" name="cidade">
                    <SelectValue placeholder="Cidade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="VITORIA DA CONQUISTA">VITORIA DA CONQUISTA</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            <FormField
              control={form.control}
              name="utd"
              render={({ field }) => (
                <Select
                  value={field.value}
                  onValueChange={(value) => field.onChange(value)}
                >
                  <SelectTrigger className="md:w-[50%] w-full" name="utd">
                    <SelectValue placeholder="UTD" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ITABERABA">ITABERABA</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <div className="flex flex-col justify-between gap-4 md:flex-row items-end">
            <FormField
              control={form.control}
              name="carteira"
              render={({ field }) => (
                <Select
                  value={field.value}
                  onValueChange={(value) => field.onChange(value)}
                >
                  <SelectTrigger className="md:w-[50%] w-full" name="carteira">
                    <SelectValue placeholder="Carteira" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="SETEMBRO/2022">SETEMBRO/2022</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <Select
                  value={field.value}
                  onValueChange={(value) => field.onChange(value)}
                >
                  <SelectTrigger className="md:w-[50%] w-full" name="status">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="PROGRAMADA">PROGRAMADA</SelectItem>
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
