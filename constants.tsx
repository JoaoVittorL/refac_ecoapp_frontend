import { Icon } from "@iconify/react";
import { SideNavItem } from "./src/types/rotes";

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Inicio",
    path: "/",
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: "Produção",
    path: "/production",
    icon: <Icon icon="lucide:folder-kanban" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: "Programação", path: "/shedule" },
      { title: "Obra", path: "/" },
      { title: "Serviços", path: "/" },
    ],
  },
  {
    title: "Cadastrar",
    path: "/enrollment",
    icon: <Icon icon="lucide:file-pen-line" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: "Usuário", path: "/users" },
      { title: "Equipes", path: "/teams" },
      { title: "Veículo", path: "/vehicles" },
      { title: "Perguntas", path: "/questions" },
      { title: "Obras", path: "/constructions" },
    ],
  },
  {
    title: "Conta",
    path: "/settings",
    icon: <Icon icon="lucide:circle-user" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: "Conta", path: "/profile" },
      { title: "Sair", path: "/" },
    ],
  },
];
