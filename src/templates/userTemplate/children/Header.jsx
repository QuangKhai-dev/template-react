import React from "react";
import { Layout, Menu } from "antd";
import { CardSim } from "lucide-react";
import Icons from "../../../components/Icons/Icons";
import { Link, NavLink, useLocation } from "react-router-dom";
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
    path: "/chi-tiet-san-pham"
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
  },
  {
    id: 5,
    title: "Bài tập lắc xí ngầu",
    icon: null,
    path: "/bai-tap-lac-xi-ngau"
  }
]

const Header = () => {
  const location = useLocation()
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

              // điều kiện thứ 2 dành cho các dymanic route
              // nếu như dynamic routes có chứa path trùng với navlink thì cũng sẽ active
              const activeDynamicRoute = location.pathname.includes(item.path)
              console.log(activeDynamicRoute)
              // item.path=chi-tiet-san-pham
              // location.pathname=chi-tiet-san-pham/100
              return isActive || activeDynamicRoute ? "active" : ""
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
        </div>
      </HeaderAntd>
    </>
  );
};

export default Header;
