export interface Lancamento {
    id: number;
    codigo: string;
    descricao: string;
    unidade: string;
    quantidade: number;
  }
  
  export interface Obra {
    id: number;
    projeto: string;
    descricao: string;
    status: string;
    carteira: string;
    cidade: string;
    utd: string;
  }
  
  export interface ObrasTurno {
    id: number;
    obra_id: number;
    turno_id: number;
    fase_da_obra: string;
    retorno_campo: string;
    fora_programacao: number;
    obra: Obra;
    lancamentos: Lancamento[];
  }
  
  export interface Foto {
    link_drive: string;
    tipo: string;
  }
  
  export interface TurnoTurns {
    id: number;
    equipe_id: number;
    data: string;
    inicio_turno: string;
    fim_turno: string;
    inicio_deslocamento: string;
    fim_deslocamento: string;
    hodometro_inicial: number;
    hodometro_final: number;
    veiculo_id: number;
  }
  
  export interface RootTurn {
    data: {
      turno: Turno[];
      colaboradores: string[];
      obras_turnos: ObrasTurno[];
      fotos: Foto[];
    };
  }