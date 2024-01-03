import { TeamsType } from "@/types/rotes";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
      const body: TeamsType = await request.json();
      const construction = {
        codigo: body.projeto,
        descricao: body.descricao,
        cidade: body.cidade,
        utd: body.utd,
        carteira: body.carteira,
        status: true,
      };
  
      const response = await fetch("http://localhost:3333/equipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${body.token}`,
        },
        body: JSON.stringify([construction]),
      });
      console.log(response);
      if (response.status == 200 || response.status == 201) {
        return NextResponse.json({ message: "Veículo criado com sucesso" });
      }
    } catch (error) {
      return NextResponse.json({ message: "Erro na busca de dados!" });
    }
  }