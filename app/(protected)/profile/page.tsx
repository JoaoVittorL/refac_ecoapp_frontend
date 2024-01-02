import { EditProfile } from "@/components/profile/edit-profile";
import { currentUser } from "@/lib/auth";
import { User } from "@/lib/auth";

import { Metadata } from "next";

export const metadata: Metadata= {
  title: "Página de  perfil do usuário",
  description: "Página direcionada a editar o perfil do usuário.",
};


const ProfilePage = async () => {
  const user: User | null = await currentUser();
  if (user) {
    return <EditProfile data={user} />;
  }
};

export default ProfilePage;
