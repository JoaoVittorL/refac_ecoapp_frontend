import { api } from "@/src/data/api";
import { currentToken } from "@/src/lib/auth";
import { ConstructionType } from "@/src/types/rotes";
import { NextResponse } from "next/server";
export async function POST(request: Request) {
  try {
    const body: ConstructionType = await request.json();
    console.log(body)
    const response = await api.post("/obras", [body]) 
    console.log(response.data)
    if (response.status == 200 || response.status == 201) {
      return NextResponse.json({ message: "Obras inseridas no GPECO" });
    }
  } catch (error) {
    return NextResponse.json({ message: "Erro na busca de dados!" });
  }
}

export async function PUT(request: Request) {
  const token = await currentToken()
  console.log(token)
  try {
    const body: ConstructionType = await request.json()
    console.log(body)
    const response = await api.post(`/obras/${body.id}`, {
      projeto: body.projeto,
      descricao: body.descricao,
      cidade: body.cidade,
      utd: body.utd,
      carteira: body.carteira,
      status: body.status,
    })

    console.log(response)
    if (response.status == 200 || response.status == 201) {
      return NextResponse.json({ message: "Veículo criado com sucesso" });
    }
  } catch (error) {
    return NextResponse.json({ message: "Erro na busca de dados!" });
  }
}
