import React from 'react'
import LuaChon from './children/LuaChon'
import ThongTinTroChoi from './children/ThongTinTroChoi'
import './style.css'

const BaiTapLacXiNgau = () => {
  return (
    <div className='bai-tap-xi-ngau'>
      <h1>Game Đổ xúc xắc</h1>
      <LuaChon />
      <ThongTinTroChoi />
      <button>Play game</button>
    </div>
  )
}

export default BaiTapLacXiNgau