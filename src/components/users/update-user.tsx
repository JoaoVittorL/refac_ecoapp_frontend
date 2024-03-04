"use client";
import { UsersType } from "@/src/types/rotes";
import { Button } from "@/src/components/ui/button";
import { FormError } from "@/src/components/form-error";
import { FormSucess } from "@/src/components/form-sucess";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { z } from "zod";
import { Input } from "../ui/input";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { createUserSchema } from "@/src/schemas";
import BackTable from "../back-table";

interface UpdateUserProps {
  data: UsersType;
}

const UpdateUser = ({ data }: UpdateUserProps) => {
  const form = useForm<z.infer<typeof createUserSchema>>({
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      name: data.nome,
      email: data.email,
      password: "",
      role: data.tipo,
      cpf: data.cpf?.toString(),
      status:
        typeof data.status === "number"
          ? data.status === 1
            ? "ATIVO"
            : "INATIVO"
          : "INATIVO",
    },
  });
  const [name, setName] = useState(data.nome);
  const [email, setEmail] = useState(data.email);
  const [cpf, setCPF] = useState(data.cpf.toString());

  const [error, setError] = useState<string | undefined>("");
  const [sucess, setSucess] = useState<string | undefined>("");

  const [isPeding, startTransition] = useTransition();
  const onSubmit = async (data: z.infer<typeof createUserSchema>) => {
    const response = await fetch("/api/users", {
      method: "PUT",
      body: JSON.stringify({
        nome: data.name,
        email: data.email,
        senha: data.password,
        cpf: data.cpf,
        tipo: data.role,
        status: data.status,
      }),
    });

    console.log(response)
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name={"name"}
          defaultValue={data.nome}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input
                  disabled={isPeding}
                  {...field}
                  value={name}
                  type="nome"
                  placeholder="Nome completo"
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <FormField
            control={form.control}
            name={"email"}
            defaultValue={data.email}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input
                    disabled={isPeding}
                    {...field}
                    value={email}
                    type="email"
                    placeholder="E-mail"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={"cpf"}
            defaultValue={data.cpf.toString()}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>CPF</FormLabel>
                <FormControl>
                  <Input
                    disabled={isPeding}
                    {...field}
                    maxLength={11}
                    value={cpf}
                    type="text"
                    placeholder="Somente números"
                    onChange={(e) => setCPF(e.target.value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col justify-between gap-4 md:flex-row items-end">
          <FormField
            control={form.control}
            name={"password"}
            render={({ field }) => (
              <FormItem className="md:w-[50%] w-full">
                <FormLabel>Nova senha</FormLabel>
                <FormControl>
                  <Input
                    disabled={isPeding}
                    {...field}
                    placeholder="******"
                    type="password"
                    className="w-full"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="md:w-[50%] w-full" name="role">
                  <SelectValue placeholder="Tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ADM">ADM</SelectItem>
                  <SelectItem value="COORDENADOR">COORDENADOR</SelectItem>
                  <SelectItem value="CAMPO">CAMPO</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="md:w-[50%] w-full" name="status">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="INATIVO">INATIVO</SelectItem>
                  <SelectItem value="ATIVO">ATIVO</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </div>
        <BackTable isPeding={isPeding} />
      </form>
    </Form>
  );
};
export default UpdateUser;
