import * as z from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .nonempty("O email é obrigatório!")
    .email("Formato de email inválido")
    .refine((email) => {
      return email.endsWith("@ecoeletrica.com.br");
    }, "O email deve conter o dominio da Ecoelétrica"),
  password: z.string().min(1, { message: "Senha inválida" }),
});

export const RegisterSchema = z.object({
  email: z
    .string()
    .nonempty("O email é obrigatório!")
    .email("Formato de email inválido")
    .refine((email) => {
      return email.endsWith("@ecoeletrica.com.br");
    }, "O email deve conter o dominio da Ecoelétrica"),
  cpf: z
    .string()
    .min(11, "O CPF foi digitado corretamente?")
    .max(11, "A quantidade de digitos ultrapassou o permitido")
    .refine((cpf) => {
      const onlyNumbers = cpf.replace(/\D/g, "");
      const onlyNumbersAndLetters = /^[0-9a-zA-Z]*$/;
      return onlyNumbers.length === 11 && onlyNumbersAndLetters.test(cpf);
    }, "O CPF foi digitado corretamente?"),
  password: z.string().min(6, { message: "Senha inválida" }),
  name: z.string().min(1, { message: "Nome inválido" }),
});

export const ProfileSchema = z
  .object({
    nome: z.string().nonempty("Nome obrigatório"),
    email: z
      .string()
      .nonempty("O email é obrigatório!")
      .email("Formato de email inválido")
      .refine((email) => {
        return email.endsWith("@ecoeletrica.com.br");
      }, "O email deve conter o dominio da Ecoelétrica"),
    password: z
      .string()
      .min(6, { message: "A senha deve conter mais de 6 caracteres" })
      .nonempty("Senha obrigatória"),
    confirmPassword: z
      .string()
      .min(6, { message: "A senha deve conter mais de 6 caracteres" })
      .nonempty("Confirmação obrigatória"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas precisam ser iguais",
    path: ["confirmPassword"],
  });

export const createUserSchema = z.object({
  name: z.string().min(7, "O nome foi digitado corretamente?"),
  cpf: z
    .string()
    .min(11, "O CPF foi digitado corretamente?")
    .max(11, "A quantidade de digitos ultrapassou o permitido")
    .refine((cpf) => {
      const onlyNumbers = cpf.replace(/\D/g, "");
      const onlyNumbersAndLetters = /^[0-9a-zA-Z]*$/;
      return onlyNumbers.length === 11 && onlyNumbersAndLetters.test(cpf);
    }, "O CPF foi digitado corretamente?"),
  email: z
    .string()
    .nonempty("O email é obrigatório!")
    .email("Formato de email inválido")
    .refine((email) => {
      return email.endsWith("@ecoeletrica.com.br");
    }, "O email deve conter o dominio da Ecoelétrica"),
  password: z.string().min(6, "A senha deve conter pelo menos 6 digitos"),
  role: z.string().refine((value) => value !== "Escolha", {
    message: "Tipo obrigatório",
  }),
});

export const QuestionsSchema = z.object({
  pergunta: z.string().min(7, "O nome foi digitado corretamente?"),
  tipo: z.string().nonempty("Selecione o tipo"),
  categoria: z.string().nonempty("Selecione a categoria"),
});

export const ConstructionSchema = z.object({
  projeto: z.string().nonempty("Projeto obrigatório"),
  descricao: z.string().nonempty("Descrição obrigatória"),
  status: z.string().refine((value) => value !== "Escolha", {
    message: "Status obrigatório",
  }),
  carteira: z.string().refine((value) => value !== "Escolha", {
    message: "Carteira obrigatória",
  }),
  cidade: z.string().refine((value) => value !== "Escolha", {
    message: "Cidade obrigatória",
  }),
  utd: z.string().refine((value) => value !== "Escolha", {
    message: "UTD obrigatória",
  }),
});
export const ServiceSchema = z.object({
  codigo: z.string().nonempty("Equipe obrigatória"),
  tipo: z.string().refine((value) => value !== "Escolha", {
    message: "Tipo obrigatório",
  }),
  descricao: z.string().min(1, "Descrição obrigatória"),
});

export const VehicleSchema = z.object({
  equipe: z.string().nonempty("Equipe obrigatória"),
  placa: z.string().nonempty("Placa obrigatória"),
  tipo: z.string().nonempty("Placa obrigatória"),
});
export const TeamsSchema = z.object({
  equipe: z.string().nonempty("Equipe obrigatória"),
  tipo: z.string().nonempty("Tipo obrigatório"),
  lider: z.string().nonempty("Lider obrigatório"),
  contrato: z.string().nonempty("Contrato obrigatório"),
  supervisor: z.string(),
  coordenador: z.string(),
});
