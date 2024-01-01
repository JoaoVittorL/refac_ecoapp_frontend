import { auth } from "@/auth";
export interface User {
  id?: string | number;
  username?: string;
  email?: string | null | undefined;
  role?: string;
  cpf?: string | number; 
  status?: string | number; 
}
interface Session {
  user?: User;
  expires?: string;
  tokenUser?: string;
}

export const currentRole = async (): Promise<string | null> => {
  try {
    const session: Session | null = await auth();
    return session?.user?.role || null; // Acessa role se user estiver definido
  } catch (error) {
    console.error("Erro ao obter a sessão:", error);
    return null;
  }
};
export const currentToken = async (): Promise<string | null> => {
  try {
    const session: Session | null = await auth();
    return session?.tokenUser || null;
  } catch (error) {
    console.error("Erro ao obter a sessão:", error);
    return null;
  }
};
export const currentUser = async (): Promise<User | null> => {
  try {
    const session: Session | null = await auth();
    return session?.user || null;
  } catch (error) {
    console.error("Erro ao obter a sessão:", error);
    return null;
  }
};
