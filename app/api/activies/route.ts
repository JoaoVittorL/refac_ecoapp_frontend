import { ServiceType } from "@/types/rotes";
import { NextResponse } from "next/server";


export async function POST(request: Request) {
    try {
      const body: ServiceType = await request.json();
      const service = {
        codigo: body.codigo,
        descricao: body.descricao,
        unidade: body.unidade,
      };
     const response = await fetch(`http://localhost:3333/servicos`, {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
           Authorization: `Token ${body.token}`,
         },
         body: JSON.stringify(service),
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
      const body: ServiceType = await request.json();
      const service = {
        codigo: body.codigo,
        descricao: body.descricao,
        unidade: body.unidade,
      };
     const response = await fetch(`http://localhost:3333/servicos/${body.id}`, {
         method: "PUT",
         headers: {
           "Content-Type": "application/json",
           Authorization: `Token ${body.token}`,
         },
         body: JSON.stringify(service),
       });
       if (response.status == 200 || response.status == 201) {
         return NextResponse.json({ message: "Veículo criado com sucesso" });
       }
    } catch (error) {
      return NextResponse.json({ message: "Erro na busca de dados!" });
    }
  }