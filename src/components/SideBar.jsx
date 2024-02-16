import { Sidebar } from "flowbite-react";
import {
  HiArrowSmLeft,
  HiChartPie,
  HiInbox,
  HiOutlineMinusSm,
  HiOutlinePlusSm,
  HiShoppingBag,
  HiTable,
  HiUser,
} from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import logo from "../assets/logo512.png";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function SideBar() {
  const { logout, user } = useAuth();
  const handleLogout = async () => {
    await logout();
  };
  return (
    <Sidebar
      className="w-1/5 p-0 h-full"
      aria-label="Sidebar with multi-level dropdown example"
    >
      <Sidebar.Logo href="#" img={logo} imgAlt="Flowbite logo">
        Giz
      </Sidebar.Logo>
      <h4>Seja bem-vindo, {user.name}</h4>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Collapse
            icon={HiShoppingBag}
            label="E-commerce"
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
            <Sidebar.Item href="#">
              <Link to="users">Users</Link>
            </Sidebar.Item>
            <Sidebar.Item href="#">Products</Sidebar.Item>
            <Sidebar.Item href="#">Products</Sidebar.Item>
            <Sidebar.Item href="#">Products</Sidebar.Item>
            <Sidebar.Item href="#">Products</Sidebar.Item>
            <Sidebar.Item href="#">Products</Sidebar.Item>
            <Sidebar.Item href="#">Products</Sidebar.Item>
            <Sidebar.Item href="#">Products</Sidebar.Item>
            <Sidebar.Item href="#">Products</Sidebar.Item>
            <Sidebar.Item href="#">Products</Sidebar.Item>
            <Sidebar.Item href="#">Products</Sidebar.Item>
            <Sidebar.Item href="#">Products</Sidebar.Item>
            <Sidebar.Item href="#">Products</Sidebar.Item>
            <Sidebar.Item href="#">Products</Sidebar.Item>
            <Sidebar.Item href="#">Products</Sidebar.Item>
            <Sidebar.Item href="#">Products</Sidebar.Item>
            <Sidebar.Item href="#">Products</Sidebar.Item>
            <Sidebar.Item href="#">Products</Sidebar.Item>
            <Sidebar.Item href="#">Products</Sidebar.Item>
            <Sidebar.Item href="#">Products</Sidebar.Item>
            <Sidebar.Item href="#">Products</Sidebar.Item>
            <Sidebar.Item href="#">Sales</Sidebar.Item>
            <Sidebar.Item href="#">Refunds</Sidebar.Item>
            <Sidebar.Item href="#">Shipping</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item href="#" icon={HiInbox}>
            Inbox
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArrowSmLeft}>
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
