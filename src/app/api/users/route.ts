import { UsersType } from "@/src/types/rotes";
import { NextResponse } from "next/server";



export async function POST(request: Request) {
  try {
    const body: UsersType = await request.json();
    const user = {
      nome: body.nome,
      email: body.email,
      senha: body.senha,
      cpf: body.cpf,
      tipo: body.tipo,
    };
    const response = await fetch("http://localhost:3333/colaboradores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${body.token}`,
      },
      body: JSON.stringify(user),
    });

    if (response.status == 200 || response.status == 201) {
      return NextResponse.json({ message: "Usuário criado com sucesso" });
    }
  } catch (error) {
    return NextResponse.json({ message: "Erro na busca de dados!" });
  }
}
export async function PUT(request: Request) {
  try {
    const body: UsersType = await request.json();
    const user = {
      nome: body.nome,
      email: body.email,
      senha: body.senha,
      cpf: body.cpf,
      tipo: body.tipo,
      status: body.status,
    };
  } catch (error) {
    return NextResponse.json({ message: "Erro na busca de dados!" });
  }
}
