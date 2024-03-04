import { EditProfile } from "@/src/components/profile/edit-profile";
import { currentUser } from "@/src/lib/auth";
import { User } from "@/src/lib/auth";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perfil",
};

const Page = async () => {
  const user: User | null = await currentUser();
  if (user) {
    return <EditProfile data={user} />;
  }
};

export default Page;
