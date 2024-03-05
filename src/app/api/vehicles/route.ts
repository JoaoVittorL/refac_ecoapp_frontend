import { api } from '@/src/data/api';
import { VehicleType } from '@/src/types/rotes';
import { NextResponse } from 'next/server';

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