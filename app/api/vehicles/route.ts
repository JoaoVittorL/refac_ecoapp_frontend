import { VehicleType } from '@/types/rotes';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
      const body: VehicleType = await request.json();
      const user = {
        nome: body.placa,
        email: body.tipo,
        senha: body.equipe_id,
      };
     const response = await fetch("https://touching-grizzly-logical.ngrok-free.app/veiculos", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
           Authorization: `Token ${body.token}`,
         },
         body: JSON.stringify(user),
       });
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
      const user = {
        nome: body.placa,
        email: body.tipo,
        senha: body.equipe_id,
      };
     const response = await fetch("https://touching-grizzly-logical.ngrok-free.app/veiculos", {
         method: "PUT",
         headers: {
           "Content-Type": "application/json",
           Authorization: `Token ${body.token}`,
         },
         body: JSON.stringify(user),
       });
       if (response.status == 200 || response.status == 201) {
         return NextResponse.json({ message: "Veículo criado com sucesso" });
       }
    } catch (error) {
      return NextResponse.json({ message: "Erro na busca de dados!" });
    }
  }