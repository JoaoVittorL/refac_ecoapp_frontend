import { Icon } from "@iconify/react";
// import { SideNavItem } from "./types/rotes";

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
      { title: "Programação", path: "/production" },
      { title: "Obra", path: "/production/construction" },
      { title: "Serviços", path: "/production/services" },
    ],
  },
  {
    title: "Cadastrar",
    path: "/enrollment",
    icon: <Icon icon="lucide:file-pen-line" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: "Usuário", path: "/enrollment/users" },
      { title: "Equipes", path: "/enrollment/teams" },
      { title: "Veículo", path: "/enrollment/vehicles" },
      { title: "Serviço", path: "/enrollment/services" },
      { title: "Perguntas", path: "/enrollment/questions" },
      { title: "Obras", path: "/enrollment/constructions" },
    ],
  },
  {
    title: "Conta",
    path: "/settings",
    icon: <Icon icon="lucide:circle-user" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: "Conta", path: "/account" },
      { title: "Sair", path: "/account/quit" },
    ],
  },
];
