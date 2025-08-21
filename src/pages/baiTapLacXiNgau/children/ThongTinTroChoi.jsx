import React from 'react'
import { useSelector } from 'react-redux'

const ThongTinTroChoi = () => {
  const { banChon } = useSelector((state) => state.baiTapLacXiNgauReducer)
  // boolean
  // let abc = 3 || "3" //
  // let banChon = true // true hoặc false // truthy và falsy 
  // null false ==> false 
  // true ==> true
  // cấu trúc viết của toán tử 3 ngôi
  // điều kiện ? hành động 1 : hành động 2
  function isBoolean(data) {
    return data === true || data === false // true || false
  }
  return (
    <div className='thong-tin-tro-choi'>
      <p>Bạn chọn: {isBoolean(banChon) ? banChon ? "Tài" : "Xỉu" : ""}</p>
      <p>Tổng số bàn thắng:</p>
      <p>Tổng số bàn chơi:</p>
    </div>
  )
}

export default ThongTinTroChoi