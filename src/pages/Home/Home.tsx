import { useEffect } from "react";
import Header from "@components/shared/baseShared/Header/Header";
import { useDispatch } from "react-redux";
import { showLoader, hideLoader } from "../../redux/loaderSlice";
import MainLoader from "../../components/shared/Loaders/MainLoader";
import {
  BannerSection,
  CategorieSection,
  DealsSection,
  FeaturedBookSection,
  NewBooksSection,
  SubscribeSection,
  LatestArticleSection,
} from "@components/index";
import "./Home.scss";

const Home = () => {
  const dispatch = useDispatch();
  const fireLoader = () => {
    dispatch(showLoader());

    setTimeout(() => {
      dispatch(hideLoader());
    }, 1500);
  };

  useEffect(() => {
    fireLoader();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* <MainLoader /> */}
      <Header />
      <BannerSection />
      <CategorieSection />
      <NewBooksSection />
      <FeaturedBookSection />
      <DealsSection />
      <SubscribeSection />
      <LatestArticleSection />
    </>
  );
};

export default Home;
