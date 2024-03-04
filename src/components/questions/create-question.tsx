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
import { QuestionsSchema } from "@/src/schemas";
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
  const form = useForm<z.infer<typeof QuestionsSchema>>({
    resolver: zodResolver(QuestionsSchema),
    defaultValues: {
      pergunta: "",
      tipo: "",
      categoria: "",
    },
  });
  const onSubmit = async (data: z.infer<typeof QuestionsSchema>) => {
    setError("");
    setSucess("");
    const response = await fetch("/api/questions", {
      method: "POST",
      body: JSON.stringify({
        pergunta_resposta: data.pergunta,
        tipo: data.tipo,
        categoria: data.categoria,
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
    <Modal title="Criar pergunta" isOpen={isOpen} onClose={handleOpenModal}>
      <FormError message={error} />
      <FormSucess message={sucess} />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name={"pergunta"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPeding}
                      {...field}
                      type="pergunta"
                      placeholder="Digite a pergunta"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          <div className="flex flex-col justify-between gap-4 md:flex-row items-end">
            <FormField
              control={form.control}
              name="categoria"
              render={({ field }) => (
                <Select
                  value={field.value}
                  onValueChange={(value) => field.onChange(value)}
                >
                  <SelectTrigger className="md:w-[50%] w-full" name="categoria">
                    <SelectValue placeholder="Categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem
                      value="ADM"
                      onSelect={() => field.onChange("ADM")}
                    >
                      ADM
                    </SelectItem>
                    <SelectItem value="RISCO ELÉTRICO">RISCO ELÉTRICO</SelectItem>
                    <SelectItem value="RISCO DE QUEDAS">RISCO DE QUEDAS</SelectItem>
                  </SelectContent>
                </Select>
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
                    <SelectItem
                      value="veicular"
                      onSelect={() => field.onChange("veicular")}
                    >
                      VEICULAR
                    </SelectItem>
                    <SelectItem value="apr">APR</SelectItem>
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
