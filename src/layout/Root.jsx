import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <>
      <Header></Header>
      <div className="w-11/12 mx-auto my-12">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Root;
