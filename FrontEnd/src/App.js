import "./App.css";
import { LogoHeader, Footer, NavBar } from "./components/Common";
import { Outlet, Route, Routes } from "react-router-dom";
// import Main from "./pages/Main";
import Search from "./pages/Search";
// import ProductList from "./pages/ProductList";
import Onair from "./pages/Onair";
// import Login from "./pages/Login";
import SignupChoice from "./pages/SignupChoice";
import Signup from "./pages/Signup";
import Kakao from "./pages/Kakao";
import Login from "./pages/Login";
import { Auction } from "./pages/Auction";
import { SpecialAuction } from "./pages/SpecialAuction";
import MyPage from "./pages/MyPage";
import { ProductRegister } from "./pages/ProductRegister";
import { SpecialProductRegister } from "./pages/SpecialProductRegister";

// 레이아웃
const Layout = () => {
  return (
    <div>
      <LogoHeader />
      <Outlet />
      <Footer />
      <NavBar />
    </div>
  );
};

const Layout2 = () => {
  return (
    <div>
      <LogoHeader />
      <Outlet />
      <NavBar />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProductRegister />} />
          <Route path="/search" element={<Search />} />
          <Route path="/productRegister" element={<ProductRegister />} />

          <Route path="/onair" element={<Onair />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup1" element={<SignupChoice />} />
          <Route path="/signup2" element={<Signup />} />
          <Route path="/specialProduct" element={<SpecialProductRegister />} />
        </Route>
        <Route path="/" element={<Layout2 />}>
          <Route path="/specialAuction" element={<SpecialAuction />} />
          <Route path="/productlist" element={<SpecialProductRegister />} />
        </Route>
        <Route path="/auctionSeller" element={<Auction grade="seller" />} />
        <Route path="/auctionBuyer" element={<Auction grade="buyer" />} />
        <Route path="/user/kakao/callback" element={<Kakao />}></Route>
      </Routes>
    </div>
  );
}

export default App;
