import { configureStore } from "@reduxjs/toolkit";
import userInformationReducer from "./reducer/userInformation.reducer";
import baiTapLacXiNgauReducer from "./reducer/baiTapLacXiNgau.reducer";
export default configureStore({
  reducer: {
    hoTen: () => {
      return "Quang Khải";
    },
    userInformationReducer,
    baiTapLacXiNgauReducer,
  },
});
