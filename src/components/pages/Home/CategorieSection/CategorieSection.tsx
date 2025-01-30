import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import IMAGES from "@assets/images/images";
import { useDispatch } from "react-redux";
import { setAllCategories } from "src/redux/categoriesSlice";
import catug1 from "../../../../assets/images/png/categories/catug_1.jpg";
import catug2 from "../../../../assets/images/png/categories/catug_it.jpg";
import catug3 from "../../../../assets/images/png/categories/catug_network.jpg";
import catug4 from "../../../../assets/images/png/categories/catug_love.jpg";
import catug5 from "../../../../assets/images/png/categories/catug_drama.jpg";
import catug6 from "../../../../assets/images/png/categories/catug_story.jpg";
import catug7 from "../../../../assets/images/png/categories/catug_sport.jpg";
import catug8 from "../../../../assets/images/png/categories/catug_fantasy.jpg";
import "./CategorieSection.scss";

// Define the type for a category
interface Category {
  _id: string;
  title: string;
  // Add other properties as needed
}

interface Image {
  id: number;
  src: string;
  alt: string;
}

const images: Image[] = [
  { id: 1, src: catug1, alt: "Image 1" },
  { id: 2, src: catug2, alt: "Image 2" },
  { id: 3, src: catug3, alt: "Image 3" },
  { id: 4, src: catug4, alt: "Image 4" },
  { id: 5, src: catug5, alt: "Image 5" },
  { id: 6, src: catug6, alt: "Image 6" },
  { id: 7, src: catug7, alt: "Image 7" },
  { id: 8, src: catug8, alt: "Image 8" },
];

const CategorieSection = () => {
  const { t } = useTranslation();
  const [categories, setCategories] = useState<Category[]>([]);
  const dispatch = useDispatch();

  const getAllCategories = async () => {
    try {
      const response = await axios.get(
        "https://upskilling-egypt.com:3007/api/category",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );
      console.log(response);
      setCategories(response.data);
      dispatch(setAllCategories(response?.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <section id="categories_section" className="container_bx">
      <div className="section_title">
        <div className="sub_title">{t("categories")}</div>
        <h3>{t("categories_section_title")}</h3>
      </div>

      <Swiper
        cssMode={true}
        navigation={true}
        pagination={false}
        mousewheel={true}
        keyboard={true}
        slidesPerView={1}
        spaceBetween={10}
        id="Category_slider"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {categories?.map((item, index) => (
          <SwiperSlide key={item?._id}>
            <div className="Category_item">
              {/* <Link to={`/category-details/${item._id}`}> */}
              <Link to=''>
                {/* <img src={IMAGES.category_1} /> */}
                <div key={images[index]?.id} className="image-item">
                  <img src={images[index]?.src} alt={images[index]?.alt} />
                </div>
                <div className="text">{item?.title}</div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="more_btn">
        <Link
          to="/categories"
          onClick={() => {
            window.scroll({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          {t('view_more')} <img src={IMAGES.rightArrow} alt="pic" />
        </Link>
      </div>
    </section>
  );
};

export default CategorieSection;
