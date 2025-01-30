import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import IMAGES from "@assets/images/images";
import book1 from "../../../../assets/images/png/books/book7.png";
import book2 from "../../../../assets/images/png/books/book5.png";
import book3 from "../../../../assets/images/png/books/book9.png";
import book4 from "../../../../assets/images/png/books/book10.png";
import book5 from "../../../../assets/images/png/books/book8.png";
import book6 from "../../../../assets/images/png/books/book6.png";
import book7 from "../../../../assets/images/png/books/book1.png";
import book8 from "../../../../assets/images/png/books/book2.png";
import book9 from "../../../../assets/images/png/books/book3.png";
import book10 from "../../../../assets/images/png/books/book4.png";
import "./FeaturedBookSection.scss";

interface Book {
  _id: string;
  name: string;
  auther: string;
  price: number;
  description: string;
}

interface Image {
  id: number;
  src: string;
}
const images: Image[] = [
  { id: 1, src: book1 },
  { id: 2, src: book2 },
  { id: 3, src: book3 },
  { id: 4, src: book4 },
  { id: 5, src: book5 },
  { id: 6, src: book6 },
  { id: 7, src: book7 },
  { id: 8, src: book8 },
  { id: 9, src: book9 },
  { id: 10, src: book10 },
];

const FeaturedBookSection = () => {
  const { t } = useTranslation();

  const [books, setBooks] = useState<Book[]>([]);

  const getAllBooks = async () => {
    try {
      const response = await axios.get(
        "https://upskilling-egypt.com:3007/api/book",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );
      console.log(response);
      setBooks(response.data.data);
    } catch (erroe) {
      console.log(erroe);
    }
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  return (
    <section id="featured_books_section" className="container_bx">
      <div className="slider_title">{t('featured_book')}</div>
      <Swiper
        // effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
        id="featured_books_slider"
      >
        {books?.map((item, index) => (
          <SwiperSlide key={item._id}>
            <div className="slider_item">
              <div className="slider_img" key={images[index].id}>
                <img src={images[index].src} alt="pic" />
              </div>
              <div className="text">
                <div className="writer"> {item.auther} </div>
                <h3> {item.name} </h3>
                <p>{item.description}</p>
                <div className="price"> {item.price} </div>
                <Link
                  to={`/product-details/${item._id}`}
                  className="slider_btn"
                  onClick={() => {
                    window.scroll({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  {t("view_more")} <img src={IMAGES.rightArrow} alt="pic" />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default FeaturedBookSection;
