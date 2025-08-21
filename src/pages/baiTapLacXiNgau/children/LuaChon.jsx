import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleBanChon } from '../../../store/reducer/baiTapLacXiNgau.reducer'

const LuaChon = () => {
  const dispatch = useDispatch()
  const { xiNgau1, xiNgau2, xiNgau3 } = useSelector((state) => state.baiTapLacXiNgauReducer)
  // tôi là xí ngầu3
  // let ketQua = noiDung + " " + xiNgau1
  // string template 
  // let ketQua = `${noiDung} ${xiNgau1}` // tôi là xí ngầu 3

  return (
    <div className='luachon'>
      <button onClick={() => {
        dispatch(handleBanChon(true))
      }} className='btn-luachon'>Tài</button>
      <div>
        <img src={`./${xiNgau1}.png`} alt="" />
        <img src={`./${xiNgau2}.png`} alt="" />
        <img src={`./${xiNgau3}.png`} alt="" />
      </div>
      <button onClick={() => {
        dispatch(handleBanChon(false))
      }} className='btn-luachon'>Xỉu</button>
    </div>
  )
}

export default LuaChon