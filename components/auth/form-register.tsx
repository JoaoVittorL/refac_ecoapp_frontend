"use client";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState, useTransition } from "react";
import { RegisterSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import {
  Form,
  FormControl,
  FormLabel,
  FormItem,
  FormField,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "@/components/ui/input";
import { FormSucess } from "@/components/form-sucess";
import { CardWrapper } from "@/components/auth/card-wrapper";
const RegisterForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [sucess, setSucess] = useState<string | undefined>("");

  const [isPeding, startTransition] = useTransition();
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      cpf: "",
      password: "",
      name: "",
    },
    
  });

  const onSubmit = async (data: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSucess("");
    try {
      const response = await fetch("/api/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: data.name,
          email: data.email,
          senha: data.password,
          cpf: data.cpf,
        }),
      });
      if (response.status == 200 || response.status == 201) {
        setSucess("Soliciatação enviada com sucesso!");
        form.reset();
      } else {
        setError("O email já está cadastrado!");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };

  return (
    <CardWrapper
      headerLabel="Solicitar cadastro"
      backButtonLabel="Já tem uma conta ?"
      backButtonHref="/auth/login"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
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
                      placeholder="Digite o seu nome"
                      type="name"
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
                <FormItem>
                  <FormLabel>CPF</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPeding}
                      {...field}
                      placeholder="Digite o seu CPF..."
                      maxLength={11}
                      type="text"
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
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPeding}
                      {...field}
                      placeholder="Digite o seu e-mail"
                      type="email"
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
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPeding}
                      {...field}
                      placeholder="******"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSucess message={sucess} />
          <Button disabled={isPeding} type="submit" className="w-full">
            Login
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
export default RegisterForm;
