"use client";
import { useState, useTransition } from "react";
import { FormError } from "@/src/components/form-error";
import { FormSucess } from "@/src/components/form-sucess";
import Modal from "@/src/components/modal";
import { Button } from "@/src/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form";
import { Input } from "@/src/components/ui/input";
import { createUserSchema } from "@/src/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
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
  const onSubmit = async (data: z.infer<typeof createUserSchema>) => {
    alert("salve");
    console.log(data);
  };

  return (
    <div>
      <Modal title="Criar usuário" isOpen={isOpen} onClose={handleOpenModal}>
        <FormError message={error} />
        <FormSucess message={sucess} />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPeding}
                      {...field}
                      type="nome"
                      placeholder="Digite seu nome completo"
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
                name="cpf"
                render={({ field }) => (
                  <FormItem className="md:w-[50%] w-full">
                    <FormLabel>CPF</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isPeding}
                        {...field}
                        maxLength={11}
                        type="cpf"
                        placeholder="Somente números..."
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
      </Modal>
    </div>
  );
};
export default CreateUser;
