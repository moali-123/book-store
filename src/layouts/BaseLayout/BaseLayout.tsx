import TopHeader from "@components/shared/baseShared/TopHeader/TopHeader";
import Footer from "@components/shared/baseShared/Footer/Footer";
import { Outlet } from "react-router-dom";
import MainLoader from "../../components/shared/Loaders/MainLoader";

const BaseLayout = () => {
  return (
    <>
      <MainLoader className="loader-spinner-bx" />
      <TopHeader />
      <div className="pt-[84px]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default BaseLayout;
