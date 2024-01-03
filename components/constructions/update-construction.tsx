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
import { ConstructionSchema } from "@/schemas";
import { z } from "zod";
import { Input } from "../ui/input";
import { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {  ConstructionType } from "@/types/rotes";
import BackTable from "../back-table";

interface UpdateActiviesProps {
  data: ConstructionType;
  id: string;
  token: string | null;
}
// projeto: 'B-1000187',
//     descricao: 'UB-CCOL-POV-VARZEA DE BAIXO-CENTRO VARZE',
//     status: 'PROGRAMADA',
//     carteira: 'setembro/2023',
//     cidade: 'RIO DE CONTAS',
//     utd: 'BRUMADO'
const UpdateActivie = ({ data, id,token }: UpdateActiviesProps) => {
  const [projeto, setProjeto] = useState(data.projeto);


  const [status, setStatus] = useState(data.status);
  const [carteira, setCarteira] = useState(data.carteira);
  const [cidade, setCidade] = useState(data.cidade);
  const [utd, setUtd] = useState(data.utd);
  const [descricao, setDescricao] = useState(data.descricao);

  const [error, setError] = useState<string | undefined>("");
  const [sucess, setSucess] = useState<string | undefined>("");
  const [isPeding, startTransition] = useTransition();
  const form = useForm<z.infer<typeof ConstructionSchema>>({
    resolver: zodResolver(ConstructionSchema),
    defaultValues: {
        projeto: projeto,
        descricao: descricao,
        cidade: cidade,
        utd: utd,
        carteira: carteira,
        status: status,
    },
  });
  useEffect(() => {
    form.setValue('projeto', projeto);
  }, [projeto,form]);

  useEffect(() => {
    form.setValue('descricao', descricao);
  }, [descricao,form]);



  const onSubmit = async (values: z.infer<typeof ConstructionSchema>) => {
    setSucess("")
    setError("")
    const response = await fetch("/api/constructions", {
        method: "PUT",
        body: JSON.stringify({
           id: id,
            projeto: values.projeto,
            descricao: values.descricao,
            cidade: values.cidade,
            utd: values.utd,
            carteira: values.carteira,
            status: values.status,
            token: token,
        }),
      });
      if (response.status == 200 || response.status == 201) {
        startTransition(() => {
          setSucess("Serviço atualizado com sucesso");
        });
      }else{
        startTransition(() => {
          setError("Erro ao atualizar serviço");
        });
      }
  };
  return (
    <Form {...form}>
      <FormError message={error} />
      <FormSucess message={sucess} />
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
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
                    placeholder="Digite a código"
                    value={projeto} 
                    onChange={(e) => setProjeto(e.target.value)}
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
                     value={descricao} 
                     onChange={(e) => setDescricao(e.target.value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
              control={form.control}
              name="cidade"
              render={({ field }) => (
                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <SelectTrigger name="cidade">
                    <SelectValue placeholder="Cidade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="VITORIA DA CONQUISTA">VITORIA DA CONQUISTA</SelectItem>
                    <SelectItem value="ITABERABA">ITABERABA</SelectItem>
                    <SelectItem value="RIO DE CONTAS">RIO DE CONTAS</SelectItem>
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
                  onValueChange={field.onChange}
                >
                  <SelectTrigger  name="utd">
                    <SelectValue placeholder="UTD" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ITABERABA">ITABERABA</SelectItem>
                    <SelectItem value="BRUMADO">BRUMADO</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
           <FormField
              control={form.control}
              name="carteira"
              render={({ field }) => (
                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <SelectTrigger name="carteira">
                    <SelectValue placeholder="Carteira" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="SETEMBRO/2022">SETEMBRO/2022</SelectItem>
                    <SelectItem value="setembro/2023">setembro/2023</SelectItem>
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
                  onValueChange={field.onChange}
                >
                  <SelectTrigger  name="status">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="PROGRAMADA">PROGRAMADA</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          <BackTable isPeding={isPeding} />
        </form>
      </Form>
  );
};
export default UpdateActivie;
