
export type UserType = {
  id:  string;
  username: string;
  email: string;
  role: string;
  cpf: string;
  status: string;
}


export type UsersType = {
    id?: string;
    nome: string;
    cpf: number;
    email: string;
    senha?: string;
    tipo: string;
    equipe_id?: null | string;
    token?:string
  };
  
  export type OrderType = {
    id?: string;
    nome: string;
    cpf: number;
    email: string;
    senha: string;
  };
  
  export type TeamsType = {
    id?: string;
    equipe: string;
    tipo: string;
    lider_id: string;
    coordenador_id: null | string;
    supervisor_id: null | string;
    contrato: string;
  };
  
  export type ConstructionType = {
    id: string;
    projeto: string;
    descricao: string;
    status: string;
    carteira: string;
    cidade: string;
    utd: string;
  };
  
  export type QuestionType = {
    id: string;
    pergunta_resposta: string;
    tipo: string;
    categoria: string;
    data_inicial: string;
    data_final: string;
    token?: string;
  };
  
  export type ServiceType = {
    id: string;
    codigo: string;
    descricao: string;
    unidade: string;
  };
  
  export type VehicleType = {
    id: string;
    placa: string;
    tipo: string;
    equipe_id: string;
  };