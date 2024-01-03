import { currentToken } from "@/lib/auth";
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
export async function PUT(req: Request) {
  const token = await currentToken();
  console.log(token)
  try {
    const body = await req.json();
    console.log(body)
    const response = await fetch(
      `http://localhost:3333/perguntas/${body.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify(body),
      },
    );
    console.log(response)
    if (response.ok) {
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
