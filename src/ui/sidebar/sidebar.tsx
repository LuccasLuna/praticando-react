import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../icon/icon";
import logo from "./../../assets/icons/logo-ITESP-horizontal.svg";
import { Option } from "./option/option";
import "./sidebar.scss";

export interface SideBarProps {
  name: string;
  route?: string;
  icon?: string;
  subItems?: SideBarProps[];
}

export function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [arrowOpen, setArrowOpen] = useState(false);
  const [showOption, setShowOption] = useState(false);
  const [logoOpen, setLogoOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setArrowOpen(!arrowOpen);
    setShowOption(!showOption);
    setLogoOpen(!logoOpen);
  };

  const menuItems: SideBarProps[] = [
    {
      name: "Atividades",
      icon: "inventory",
      route: "/atividades",
    },
    {
      name: "Diretorias",
      /* route:'/atividades/diretorias', */
      icon: "groups",
      subItems: [
        { name: "DEX", route: "/atividades/diretorias/dex" },
        { name: "DAAF", route: "/atividades/diretorias/daaf" },
      ],
    },
    {
      name: "Gerenciar acesso",
      icon: "group_add",
      route: "/usuarios",
    },
    {
      name: "Painel de atividades",
      icon: "leaderboard",
      route: "/panel",
    },
    {
      name: "Sair",
      icon: "logout",
      route: "/logout",
    },
  ];

  return (
    <nav className={`sidebar${sidebarOpen ? "--open" : ""}`}>
      <div className="sidebar__header">
        <Icon
          name="menu_open"
          weight="200"
          color="var(--color-neutral-white)"
          size="32px"
          pointer
          onClick={toggleSidebar}
        />
        <Link to="/atividades">
          <img
            className={`logo${logoOpen ? "" : "--closed"}`}
            src={logo}
            alt="logo"
          />
        </Link>
      </div>

      <div className={`d-column sidebar__options${arrowOpen ? "--open" : ""}`}>
        {menuItems.map((sideBarElement) => (
          <div
            key={sideBarElement.name}
            onClick={!sidebarOpen ? toggleSidebar : () => {}}
          >
            <Option
              key={sideBarElement.name}
              name={sideBarElement.name}
              icon={sideBarElement.icon || ""}
              state={showOption ? "open" : "closed"}
              route={sideBarElement.route}
              subItems={sideBarElement.subItems}
            />
          </div>
        ))}

        {/*<div className="sidebar__footer d-column">*/}
        {/*  <Avatar name="Fulano da Silva" role="Usuário" sidebarOpen={ sidebarOpen }/>*/}
        {/*  <Option key={ 'logout' } name="Sair" icon="logout" state={ sidebarOpen ? 'open' : 'closed' } route="/login"/>*/}
        {/*</div>*/}
      </div>
    </nav>
  );
}
