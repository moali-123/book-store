import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { ReleaseBookCart } from "@components/index";
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
import "./NewBooksSection.scss";

interface Book {
  _id: string;
  name: string;
  auther: string;
  price: number;
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

const NewBooksSection: React.FC = () => {
  const { t } = useTranslation();

  const [books, setBooks] = useState<Book[]>([]);
  const [hasToken, setHasToken] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (token) {
      setHasToken(true);
    } else {
      setHasToken(false);
    }
  }, []);

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
    } catch (error) {
      console.log(error);
    }
  };  

  useEffect(() => {
    getAllBooks();
  }, []);

  return (
    <section id="new_books_section" className="container_bx">
      <div className="section_title">
        <div className="subtitle">{t("books_section_sub_title")}</div>
        <h3>{t("books_section_title")}</h3>
      </div>

      <div className="content_bx">
        <Swiper
          cssMode={true}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          mousewheel={true}
          keyboard={true}
          slidesPerView={1}
          spaceBetween={10}
          id="new_books_slider"
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
              slidesPerView: 4,
              spaceBetween: 25,
            },
          }}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {books?.map((item, index) => (
            <SwiperSlide key={item._id}>
              <div key={images[index].id}>
                <ReleaseBookCart
                  name={item.name}
                  auther={item.auther}
                  price={item.price}
                  item={item}
                  imagePath={images[index].src}
                  //LinkPath={`/product-details/${item._id}`}
                  LinkPath={hasToken ? (`/product-details/${item._id}`) : ('/auth/login')}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="view_all">
          <Link
            to="/all-products"
            onClick={() => {
              window.scroll({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            View all products <img src={IMAGES.orangeRightArrow} alt="pic" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewBooksSection;
