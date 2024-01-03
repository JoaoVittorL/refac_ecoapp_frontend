import { api } from "@/data/api";
import { QuestionType } from "@/types/rotes";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body: QuestionType = await request.json();
    const response = await api.post("/perguntas", {
       pergunta_resposta: body.pergunta_resposta,
       categoria: body.categoria,
       tipo: body.tipo,
     })  
     if (response.status == 200 || response.status == 201) {
      return NextResponse.json({ message: "Pergunta criada com sucesso" });
     }

  } catch (error) {
    return NextResponse.json({ message: "Erro na busca de dados!" });
  }
}
export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const response = await api.put(`/perguntas/${body.id}`)  
    if (response.status == 200 || response.status == 201) {
      return NextResponse.json({ message: "Pergunta atualizada com sucesso!" });
    } else {
      return "Falha ao atualizar pergunta. Por favor, tente novamente mais tarde.";
    }
  } catch (error) {
    console.error("Erro durante a atualização:", error);
    return NextResponse.json(
      {
        message:
          "Erro durante a atualização. Por favor, tente novamente mais tarde.",
      },
      { status: 500 },
    );
  }
}
