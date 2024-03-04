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
} from "@/src/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { z } from "zod";
import { Input } from "@/src/components/ui/input";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { createUserSchema } from "@/src/schemas";
const UpdateUser = ({ data }: { data: UsersType }) => {
  const form = useForm<z.infer<typeof createUserSchema>>({
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role: "",
      cpf: "",
    },
  });

  const [error, setError] = useState<string | undefined>("");
  const [sucess, setSucess] = useState<string | undefined>("");

  const [isPeding, startTransition] = useTransition();
  const onSubmit = async (data: z.infer<typeof createUserSchema>) => {};

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name={"name"}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input
                  disabled={isPeding}
                  {...field}
                  type="nome"
                  placeholder="Nome completo"
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
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input
                    disabled={isPeding}
                    {...field}
                    type="email"
                    placeholder="E-mail"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={"cpf"}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>CPF</FormLabel>
                <FormControl>
                  <Input
                    disabled={isPeding}
                    {...field}
                    maxLength={11}
                    type="cpf"
                    placeholder="Somente números"
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
              <Select
                value={field.value}
                onValueChange={(value) => field.onChange(value)}
              >
                <SelectTrigger className="md:w-[50%] w-full" name="role">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem
                    value="ADM"
                    onSelect={() => field.onChange("ADM")}
                  >
                    ADM
                  </SelectItem>
                  <SelectItem value="COORDENADOR">COORDENADOR</SelectItem>
                  <SelectItem value="CAMPO">CAMPO</SelectItem>
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
  );
};
export default UpdateUser;
