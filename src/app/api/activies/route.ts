import { api } from "@/src/data/api";
import { ServiceType } from "@/src/types/rotes";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    console.log('teste')
    // const body: ServiceType = await request.json();
    // console.log(body);
    // const response = await api.post("/servicos", {
    //   codigo: body.codigo,
    //   descricao: body.descricao,
    //   unidade: body.unidade,
    // });
    // if (response.status == 200 || response.status == 201) {
    //   return NextResponse.json({ message: "Serviço criado com sucesso" });
    // }
  } catch (error) {
    return NextResponse.json({ message: "Erro na busca de dados!" });
  }
}

export async function PUT(request: Request) {
  try {
    console.log('teste')
    // const body: ServiceType = await request.json();
    // const response = await api.put(`/servicos/${body.id}`, {
    //   codigo: body.codigo,
    //   descricao: body.descricao,
    //   unidade: body.unidade,
    // });

    // if (response.status == 200 || response.status == 201) {
    //   return NextResponse.json({ message: "Serviço atualizado com sucesso" });
    // }
  } catch (error) {
    return NextResponse.json({ message: "Erro na busca de dados!" });
  }
}
