import { Metadata } from "next";
import Register from "../../../components/auth/form-register";

export const metadata: Metadata = {
  title: "Página de registro",
  description: "Página de registro da ecoelétrica",
};
const RegisterPage = () => {
  return <Register />;
};

export default RegisterPage;
