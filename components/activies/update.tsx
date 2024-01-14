"use client";
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
import { ServiceSchema } from "@/schemas";
import { z } from "zod";
import { Input } from "../ui/input";
import { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ServiceType } from "@/types/rotes";
import BackTable from "../back-table";

interface UpdateActiviesProps {
  data: ServiceType;
  id: string;
  token: string | null;
}

const UpdateActivie = ({ data, id,token }: UpdateActiviesProps) => {
  const [codigo, setCodigo] = useState(data.codigo);



  
  const [descricao, setDescricao] = useState(data.descricao);
  const [error, setError] = useState<string | undefined>("");
  const [sucess, setSucess] = useState<string | undefined>("");
  const [isPeding, startTransition] = useTransition();
  const form = useForm<z.infer<typeof ServiceSchema>>({
    resolver: zodResolver(ServiceSchema),
    defaultValues: {
      codigo: codigo,
      descricao: descricao,
      unidade: data.unidade,
    },
  });

  useEffect(() => {
    form.setValue('codigo', codigo);
  }, [codigo,form]);

  useEffect(() => {
    form.setValue('descricao', descricao);
  }, [descricao,form]);


  const onSubmit = async (values: z.infer<typeof ServiceSchema>) => {
    setSucess("")
    setError("")
    const response = await fetch("/api/activies", {
        method: "PUT",
        body: JSON.stringify({
          id: id,
          codigo: values.codigo,
          descricao: values.descricao,
          unidade: values.unidade,
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
         <div className="flex flex-col md:flex-row justify-between gap-4">
         <FormField
            control={form.control}
            name={"codigo"}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Código</FormLabel>
                <FormControl>
                  <Input
                    disabled={isPeding}
                    {...field}
                    type="codigo"
                    placeholder="Digite a código"
                    value={codigo} 
                    onChange={(e) => setCodigo(e.target.value)}
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
              <FormItem className="w-full">
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
         </div>
          <FormField
            control={form.control}
            name="unidade"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="w-full" name="unidade">
                  <SelectValue placeholder="Unidade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="UD">UD</SelectItem>
                  <SelectItem value="Unidunitê">Unidunitê</SelectItem>
                  <SelectItem value="M">M</SelectItem>
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
