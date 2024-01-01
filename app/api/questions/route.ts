import { QuestionType } from "@/types/rotes";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body: QuestionType = await request.json();
    const user = {
      pergunta_resposta: body.pergunta_resposta,
      categoria: body.categoria,
      tipo: body.tipo,
    };
    const response = await fetch("http://localhost:3333/perguntas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${body.token}`,
      },
      body: JSON.stringify(user),
    });

    if (response.status == 200 || response.status == 201) {
      return NextResponse.json({ message: "Pergunta criada com sucesso" });
    }
  } catch (error) {
    return NextResponse.json({ message: "Erro na busca de dados!" });
  }
}
