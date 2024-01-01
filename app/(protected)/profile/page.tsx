import { EditProfile } from "@/components/profile/edit-profile";
import { currentUser } from "@/lib/auth";
import { User } from "@/lib/auth";

const ProfilePage = async () => {
  const user: User | null = await currentUser();
  if (user) {
    return <EditProfile data={user} />;
  }
};

export default ProfilePage;
