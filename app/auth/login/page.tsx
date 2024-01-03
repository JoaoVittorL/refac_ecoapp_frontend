import { Metadata } from "next";
import Login from "../../../components/auth/form-login";

export const metadata: Metadata = {
  title: "Página de login",
  description: "Página de login da ecoelétrica",
};
const LoginPage = () => {
  return <Login />;
};

export default LoginPage;
