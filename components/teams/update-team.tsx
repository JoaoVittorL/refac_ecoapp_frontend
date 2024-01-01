"use client";
import { Button } from "../ui/button";
import { FormError } from "../form-error";
import { FormSucess } from "../form-sucess";
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
import { TeamsSchema } from "@/schemas";
import { z } from "zod";
import { Input } from "../ui/input";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TeamsType } from "@/types/rotes";
import BackTable from "../back-table";

interface UpdateTeamProps {
  data: TeamsType;
  token: string | null;
  id: string;
}

const UpdateTeam = ({ data, token, id }: UpdateTeamProps) => {
  const [error, setError] = useState<string | undefined>("");
  const [sucess, setSucess] = useState<string | undefined>("");
  console.log(data);
  const [isPeding, startTransition] = useTransition();
  const form = useForm<z.infer<typeof TeamsSchema>>({
    resolver: zodResolver(TeamsSchema),
    defaultValues: {
      equipe: data.equipe,
      tipo: data.tipo,
      lider: data.lider_id,
      contrato: data.contrato,
      status:
        typeof data.status === "number"
          ? data.status === 1
            ? "ATIVO"
            : "INATIVO"
          : "INATIVO",
    },
    supervisor_id: data.supervisor_id,
    coordenador_id: data.coordenador_id,
  });

  const [equipe, setName] = useState(data.equipe);
  const [lider, setLider] = useState(data.lider_id);
  //   const [email, setEmail] = useState(data.email);
  const onSubmit = async (data: z.infer<typeof TeamsSchema>) => {};

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name={"equipe"}
          defaultValue={data.equipe}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Equipe</FormLabel>
              <FormControl>
                <Input
                  disabled={isPeding}
                  {...field}
                  value={equipe}
                  type="equipe"
                  placeholder="Digite a equipe"
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={"lider"}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Lider</FormLabel>
              <FormControl>
                <Input
                  disabled={isPeding}
                  {...field}
                  value={lider}
                  type="lider"
                  placeholder="Digite a lider"
                  onChange={(e) => setLider(e.target.value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <FormField
            control={form.control}
            name="tipo"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="md:w-[50%] w-full" name="tipo">
                  <SelectValue placeholder="Tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="LM">LM</SelectItem>
                  <SelectItem value="LV">LV</SelectItem>
                  <SelectItem value="APOIO">APOIO</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          <FormField
            control={form.control}
            name="contrato"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="md:w-[50%] w-full" name="contrato">
                  <SelectValue placeholder="Contrato" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="COELBA">COELBA</SelectItem>
                  <SelectItem value="CELPE">CELPE</SelectItem>
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
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <FormField
            control={form.control}
            name="supervisor_id"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger
                  className="md:w-[50%] w-full"
                  name="supervisor_id"
                >
                  <SelectValue placeholder="Supervisor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
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
export default UpdateTeam;
