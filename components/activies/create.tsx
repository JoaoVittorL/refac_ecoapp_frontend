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
import { ServiceSchema } from "@/schemas";
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
  const form = useForm<z.infer<typeof ServiceSchema>>({
    resolver: zodResolver(ServiceSchema),
    defaultValues: {
      codigo: "",
      unidade: "",
      descricao: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof ServiceSchema>) => {
    setError("");
    setSucess("");
    const response = await fetch("/api/activies", {
      method: "POST",
      body: JSON.stringify({
        codigo: values.codigo,
        descricao: values.descricao,
        unidade: values.unidade,
        token: token,
      }),
    });
    if (response.status == 200 || response.status == 201) {
      startTransition(() => {
        setSucess("Serviço criado com sucesso!");
        form.reset();
      });
    } else {
      startTransition(() => {
        setError("Erro ao criar serviço!");
      });
    }
  };

  return (
    <Modal title="Criar serviço" isOpen={isOpen} onClose={handleOpenModal}>
      <FormError message={error} />
      <FormSucess message={sucess} />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex flex-col justify-between gap-4 md:flex-row items-end">
            <FormField
              control={form.control}
              name={"codigo"}
              render={({ field }) => (
                <FormItem className="md:w-[50%] w-full">
                  <FormLabel>Código</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPeding}
                      {...field}
                      type="text"
                      placeholder="Digite o código"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="unidade"
              render={({ field }) => (
                <Select
                  value={field.value}
                  onValueChange={(value) => field.onChange(value)}
                >
                  <SelectTrigger className="md:w-[50%] w-full" name="unidade">
                    <SelectValue placeholder="Unidade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="M">M</SelectItem>
                    <SelectItem value="N">N</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
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
                    type="text"
                    placeholder="Digite a descrição"
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
