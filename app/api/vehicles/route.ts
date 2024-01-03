import { api } from '@/data/api';
import { VehicleType } from '@/types/rotes';
import { NextResponse } from 'next/server';
// const response = await api.post("/perguntas", {
//   pergunta_resposta: body.pergunta_resposta,
//   categoria: body.categoria,
//   tipo: body.tipo,
// }) 
export async function POST(request: Request) {
    try {
      const body: VehicleType = await request.json();
       const response = await api.post("/veiculos", {
         nome: body.placa,
         email: body.tipo,
         senha: body.equipe_id,
      }) 
       if (response.status == 200 || response.status == 201) {
         return NextResponse.json({ message: "Veículo criado com sucesso" });
       }
    } catch (error) {
      return NextResponse.json({ message: "Erro na busca de dados!" });
    }
  }

  export async function PUT(request: Request) {
    try {
      const body: VehicleType = await request.json();
      const response = await api.put(`/veiculos/${body.id}`, {
        nome: body.placa,
        email: body.tipo,
        senha: body.equipe_id,
     }) 
      
       console.log(response)
       if (response.status == 200 || response.status == 201) {
         return NextResponse.json({ message: "Veículo criado com sucesso" });
       }
    } catch (error) {
      return NextResponse.json({ message: "Erro na busca de dados!" });
    }
  }