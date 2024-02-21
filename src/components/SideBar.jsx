import { Sidebar } from "flowbite-react";
import {
  HiArrowSmLeft,
  HiChartPie,
  HiInbox,
  HiOutlineMinusSm,
  HiOutlinePlusSm,
  HiShoppingBag,
  HiHome,
  HiUser,
} from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import logo from "../assets/logo512.png";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { GiBookCover } from "react-icons/gi";
import { MdAdminPanelSettings } from "react-icons/md";

function SideBar() {
  const { logout, role } = useAuth();
  const handleLogout = async () => {
    await logout();
  };
  const { pathname } = useLocation();
  return (
    <Sidebar
      className="w-1/5 p-0 h-full"
      aria-label="Sidebar with multi-level dropdown example"
    >
      <div className="h-14 pointer-events-none select-none flex flex-row m-2 gap-2 justify-start items-center">
        <GiBookCover size={40} className="text-blue-800 h-full spining" />
        <span className="text-2xl uppercase font-bold">Giz </span><span className="text-blue-800 font-semibold">{role==="student"?"Aluno":(role==="teacher"?"Professor":"ADMIN")}</span>
      </div>

      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {(role==="student"||role==="teacher")&&<Sidebar.Item
            active={pathname === "/"}
            className="cursor-pointer font-semibold"
            icon={HiHome}
          >
            <Link to="/">Home</Link>
          </Sidebar.Item>}
          {role==="admin"&&<Sidebar.Item
            active={pathname === "/dashboard"}
            className="cursor-pointer font-semibold"
            icon={HiChartPie}
          >
            <Link to="/">Dashboard</Link>
          </Sidebar.Item>}
          <Sidebar.Collapse
            className="cursor-pointer font-semibold w-full"
            icon={MdAdminPanelSettings}
            label="Administrador"
            renderChevronIcon={(theme, open) => {
              const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;

              return (
                <IconComponent
                  aria-hidden
                  className={twMerge(
                    theme.label.icon.open[open ? "on" : "off"]
                  )}
                />
              );
            }}
          >
            <Sidebar.Item
              active={pathname === "/users"}
              className="w-full cursor-pointer font-semibold"
            >
              <Link className="w-full h-full" to="users">
                Usuários
              </Link>
            </Sidebar.Item>
            <Sidebar.Item
              active={pathname === "/careers"}
              className="w-full cursor-pointer font-semibold"
            >
              <Link className="w-full h-full" to="careers">
                Cursos
              </Link>
            </Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item className="cursor-pointer font-semibold" icon={HiInbox}>
            Inbox
          </Sidebar.Item>
          <Sidebar.Item className="cursor-pointer font-semibold" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item
            className="cursor-pointer font-semibold"
            icon={HiShoppingBag}
          >
            Products
          </Sidebar.Item>
          <Sidebar.Item
            className="cursor-pointer font-semibold"
            icon={HiShoppingBag}
          >
            Products
          </Sidebar.Item>
          <Sidebar.Item
            className="cursor-pointer font-semibold"
            icon={HiShoppingBag}
          >
            Products
          </Sidebar.Item>
          <Sidebar.Item
            className="cursor-pointer font-semibold"
            icon={HiShoppingBag}
          >
            Products
          </Sidebar.Item>
          <Sidebar.Item
            className="cursor-pointer font-semibold"
            icon={HiArrowSmLeft}
          >
            <div
              onClick={() => {
                handleLogout();
              }}
            >
              Sign Out
            </div>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default SideBar;
