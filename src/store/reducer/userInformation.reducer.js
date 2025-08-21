import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Quang Khải",
  tuoi: 20,
  gioiTinh: "nam",
};

const userInformationReducer = createSlice({
  name: "user-information",
  initialState,
  reducers: {
    // quản lí action
    handleChangeName: (state, action) => {
      // state ==> dữ liệu của initialState
      // action ==> dữ liệu được gửi lên từ component  {payload: dữ liệu được gửi lên}
      // payload
      state.name = action.payload;
    },
  },
});

export const { handleChangeName } = userInformationReducer.actions;

export default userInformationReducer.reducer;

// tạo 1 reducer thứ 2 đặt tên là company reducer
// tên công ty, địa chỉ, ngày thành lập, giám độc, vốn điều lệ
