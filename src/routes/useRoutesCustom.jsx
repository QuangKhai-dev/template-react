import { useRoutes } from "react-router-dom";
import { PATH_APP } from "./path";
import HomePage from "../pages/homePage/HomePage";
import ProductDetail from "../pages/productDetail/ProductDetail";
import UserTemplate from "../templates/userTemplate/UserTemplate";
import NotFound from "../components/NotFound/NotFound";
import PhuKien from "../pages/phuKien/PhuKien";
import BaiTapLacXiNgau from "../pages/baiTapLacXiNgau/BaiTapLacXiNgau";

const useRoutesCustom = () => {
  // trang chủ - chi tiết sản phẩm
  const routes = useRoutes([
    {
      path: PATH_APP.homePage,
      element: <UserTemplate />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: PATH_APP.productDetail,
          element: <ProductDetail />,
        },
        {
          path: "phu-kien",
          element: <PhuKien />
        },
        {
          path: "bai-tap-lac-xi-ngau",
          element: <BaiTapLacXiNgau />
        }
      ],
    },
    {
      path: "*",
      element: <NotFound />
    }
  ]);
  return routes;
};

export default useRoutesCustom;
