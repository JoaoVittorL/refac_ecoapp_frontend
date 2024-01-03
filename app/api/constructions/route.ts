import { api } from "@/data/api";
import { ConstructionType } from "@/types/rotes";
import { NextResponse } from "next/server";




export async function POST(request: Request) {
  try {
    const body: ConstructionType = await request.json();
    const response = await api.post(`/obras}`, {
      codigo: body.projeto,
      descricao: body.descricao,
      cidade: body.cidade,
      utd: body.utd,
      carteira: body.carteira,
      status: true,
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
    const body: ConstructionType = await request.json()

    const response = await api.post(`/obras/${body.id}}`, {
      projeto: body.projeto,
      descricao: body.descricao,
      cidade: body.cidade,
      utd: body.utd,
      carteira: body.carteira,
      status: body.status,
    })

    
    if (response.status == 200 || response.status == 201) {
      return NextResponse.json({ message: "Veículo criado com sucesso" });
    }
  } catch (error) {
    return NextResponse.json({ message: "Erro na busca de dados!" });
  }
}
