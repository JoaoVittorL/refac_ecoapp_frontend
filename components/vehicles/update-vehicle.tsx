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
import { VehicleSchema } from "@/schemas";
import { z } from "zod";
import { Input } from "../ui/input";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { VehicleType } from "@/types/rotes";
import BackTable from "../back-table";

interface UpdateTeamProps {
  data: VehicleType;
  token: string | null;
  id: string;
}

const UpdateTeam = ({ data, token, id }: UpdateTeamProps) => {
  const [placa, setPlaca] = useState(data.placa);
  const [equipe, setEquipe] = useState(data.equipe_id);
  const [error, setError] = useState<string | undefined>("");
  const [sucess, setSucess] = useState<string | undefined>("");
  const [isPeding, startTransition] = useTransition();
  const form = useForm<z.infer<typeof VehicleSchema>>({
    resolver: zodResolver(VehicleSchema),
    defaultValues: {
      placa: data.placa,
      tipo: data.tipo,
      equipe: data.equipe_id,

    },
  });
  console.log(data)

  //   const [email, setEmail] = useState(data.email);
  const onSubmit = async (data: z.infer<typeof VehicleSchema>) => {
    console.log(data)
    const response = await fetch("/api/vehicles", {
        method: "PUT",
        body: JSON.stringify({
          placa: data.placa,
          equipe_id: data.equipe,
          tipo: data.tipo,
        }),
      });
      if (response.status == 200 || response.status == 201) {
        startTransition(() => {
          setSucess("Veículo atualizado com sucesso");
          form.reset();
        });
      }else{
        startTransition(() => {
          setError("Erro ao atualizar veículo");
        });
      }
  };

  return (
    <Form {...form}>
      <FormError message={error} />
      <FormSucess message={sucess} />
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name={"placa"}
          defaultValue={data.placa}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Placa</FormLabel>
              <FormControl>
                <Input
                  disabled={isPeding}
                  {...field}
                  value={placa}
                  type="placa"
                  placeholder="Digite a placa"
                  onChange={(e) => setPlaca(e.target.value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
                  value={equipe}
                  type="equipe"
                  placeholder="Digite a equipe"
                  onChange={(e) => setEquipe(e.target.value)}
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
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger name="tipo">
                  <SelectValue placeholder="Tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="caminhão">caminhão</SelectItem>
                  <SelectItem value="leve">leve</SelectItem>
                  <SelectItem value="CAMINHÃO">CAMINHÃO</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        <BackTable isPeding={isPeding} />
      </form>
    </Form>
  );
};
export default UpdateTeam;
