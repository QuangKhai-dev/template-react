import { Button, Input } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { handleChangeName } from "../../store/reducer/userInformation.reducer";

export const arrQueryParams = [
  {
    name: "ram",
    value: "16gb"
  },
  {
    name: "kichthuocmanhinh",
    value: "45inch"
  },
  {
    name: "nhucausudung",
    value: "vanphong"
  },
  {
    name: "cpu",
    value: "i5"
  },
  {
    name: "trangthai",
    value: "conhang"
  }
]

const HomePage = () => {
  const dispatch = useDispatch()
  // arrow function, function expression, function declaration
  const { name, tuoi, gioiTinh } = useSelector((state) => state.userInformationReducer)
  // destructuring
  // const { name, tuoi, gioiTinh } = {
  //   "name": "Quang Khải",
  //   "tuoi": 20,
  //   "gioiTinh": "nam"
  // }
  // console.log(name)
  const locationData = useLocation()
  const navigate = useNavigate()
  console.log(locationData)
  // ram=16gb, kichthuocmanhinh=45inch, nhucausudung=vanphong, cpu=i5, trangthai=conhang
  const [searchParams, setSearchParams] = useSearchParams("?ram=16gb&kichthuocmanhinh=45inch")
  // console.log(searchParams.get("nhucausudung"))
  // console.log(searchParams.get("ram"))

  const nhuCauSuDung = searchParams.get("nhucausudung")

  // useEffect 
  // tham số đầu tiên là callback function
  // tham số thứ 2 là mảng dependency
  useEffect(() => {
    setSearchParams((searchParam) => {
      // searchParam.set("ram", "16gb")
      // searchParam.set("kichthuocmanhinh", "45inch")
      for (let item of arrQueryParams) {
        searchParam.set(item.name, item.value)
      }

      return searchParam
    })
  }, [])



  return <div>
    <h2>Demo sử dụng useSearchParams</h2>
    <Input value={nhuCauSuDung} onChange={(e) => {
      // e.target.value
      setSearchParams((searchParam) => {
        searchParam.set("nhucausudung", e.target.value)
        return searchParam
      })
    }} placeholder="nhập gì đó để thay đổi giá trị của nhu cầu sử dụng" />
    {/* data binding */}
    {/* data attribute ? */}
    <Input placeholder="Nhập vào thay đổi họ tên" onChange={(event) => {
      console.log(event.target.value) // type???
      // dispatch sẽ nhận vào action
      dispatch(handleChangeName(event.target.value))
    }} />
    <p>{name}</p>
    {/* <Button onClick={() => {
      navigate("phu-kien", {
        state: {
          email: "quangkhai0901@gmail.com",
          diaChi: "Q12"
        }
      })
    }}>Bấm vào tôi để đi tới trang phụ kiện</Button> */}
    <NavLink to="phu-kien" state={{
      email: "quangkhai0901@gmail.com",
      diaChi: "Q12"
    }} >Bấm vào tôi để đi tới trang phụ kiện</NavLink>
  </div>;
};

export default HomePage;
