import React from "react";
import { Layout, Menu } from "antd";
import { CardSim } from "lucide-react";
import Icons from "../../../components/Icons/Icons";
import { Link, NavLink } from "react-router-dom";
import { PATH_APP } from "../../../routes/path";

const { Header: HeaderAntd } = Layout;
const arrLink = [
  {
    id: 1,
    title: "Điện thoại",
    icon: <Icons.cardSim />,
    path: PATH_APP.homePage
  },
  {
    id: 2,
    title: "Laptop",
    icon: <Icons.cardSim />,
    path: PATH_APP.productDetail
  },
  {
    id: 3,
    title: "Phụ kiện",
    icon: <Icons.cardSim />,
    path: "/phu-kien"
  },
  {
    id: 4,
    title: "Smartwatch",
    icon: <Icons.cardSim />,
    path: 'smart-watch'
  }
]

const Header = () => {
  return (
    <>
      <HeaderAntd
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{
          width: "100%",
          display: "flex",
          alignItems: "center"
        }}>
          {arrLink.map((item, index) => {
            return <NavLink className={({ isActive, isPending }) => {
              // isActive == true || false 
              // path = "/" ==> isActive = true
              // path ="/abc" to="/" ==> isActive = false
              return isActive ? "active" : ""
            }} key={index} style={{
              display: 'flex',
              alignItems: "center",
              marginRight: "10px",
              padding: "5px 10px",
              color: "white"
            }} to={item.path}>
              {item.icon}
              <span>{item.title}</span>
            </NavLink>
          })}
          <Link></Link>
        </div>
      </HeaderAntd>
    </>
  );
};

export default Header;
