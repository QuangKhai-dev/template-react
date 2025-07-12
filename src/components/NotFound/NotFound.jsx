import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { PATH_APP } from '../../routes/path'

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h2>Trang này không có</h2>
      <p>Vui lòng bấm vào nút để quay lại trang chủ</p>
      {/* <a href="">Bấm vào để về trang chủ</a> */}
      <button onClick={() => {
        // window.location.href = '/'
        navigate("/")
      }}>Bấm vào quay về trang chủ</button>
      <NavLink to={PATH_APP.homePage}>Bấm vào quay về trang chủ</NavLink>
    </div>
  )
}

export default NotFound