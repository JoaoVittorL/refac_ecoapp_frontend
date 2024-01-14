import { api } from "@/data/api";
import { TeamsType } from "@/types/rotes";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
      console.log(request)
      const body: TeamsType = await request.json();
      console.log(body)
      console.log(body)
      // const response = api.post('/equipes', { 
      //   codigo: body.,
      //   descricao: body.descricao,
      //   cidade: body.cidade,
      //   utd: body.utd,
      //   carteira: body.carteira,
      //   status: true,
      // })
      // console.log(response);
      // if (response.status == 200 || response.status == 201) {
      //   return NextResponse.json({ message: "Veículo criado com sucesso" });
      // }
    } catch (error) {
      return NextResponse.json({ message: "Erro na busca de dados!" });
    }
  }