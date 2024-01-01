import { NextResponse } from "next/server";
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const response = await fetch("http://localhost:3333/solicitacoes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (response.ok) {
      return NextResponse.json({
        message: "Erro ao tentar criar o Usuário",
      });
    }
  } catch (error) {
    return NextResponse.json({
      message: "Erro ao tentar realizar a requisição",
    });
  }
}
