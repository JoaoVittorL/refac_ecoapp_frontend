"use client";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { ProfileSchema } from "@/src/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { z } from "zod";
import { Input } from "../ui/input";
import { FormError } from "../form-error";
import { FormSucess } from "../form-sucess";
import { User } from "@/src/lib/auth";

export const EditProfile = ({ data }: { data: User }) => {
  const [error, setError] = useState<string | undefined>("");
  const [sucess, setSucess] = useState<string | undefined>("");

  const [isPeding, startTransition] = useTransition();
  const form = useForm<z.infer<typeof ProfileSchema>>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      nome: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: z.infer<typeof ProfileSchema>) => {
    console.log(data);
  };

  return (
    <div className="p-6">
      <Card className="max-w-[600px] w-full shadow-md mx-auto p-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name={"nome"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPeding}
                      {...field}
                      type="nome"
                      value={data.username}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={"email"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CPF</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPeding}
                      {...field}
                      type="email"
                      value={data.email ?? ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col justify-between md:flex-row w-full gap-2">
              <FormField
                control={form.control}
                name={"password"}
                render={({ field }) => (
                  <FormItem className="md:w-full">
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
                name={"password"}
                render={({ field }) => (
                  <FormItem className="md:w-full">
                    <FormLabel>Confirmar senha</FormLabel>
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
            </div>
            <FormError message={error} />
            <FormSucess message={sucess} />
            <Button
              disabled={isPeding}
              type="submit"
              className="w-full"
              variant={"default"}
            >
              Atualizar
            </Button>
          </form>
        </Form>
      </Card>
    </div>
  );
};
