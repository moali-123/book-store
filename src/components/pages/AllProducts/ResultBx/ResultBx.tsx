import { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import { Paginate } from "@components/index";
import SearchItems from "./SearchItems";
import IMAGES from "@assets/images/images";
import { ReleaseBookCart } from "@components/index";
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
import "./ResultBx.scss";

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
  { id: 11, src: book1 },
  { id: 12, src: book2 },
  { id: 13, src: book3 },
];
const ResultBx = () => {
  const [renderImg, setRenderImges] = useState([]);
  const [selectedType, setSelectedType] = useState<string>("");
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [pageCount, setPageCount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const itemsPerPage = 6;
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
        `https://upskilling-egypt.com:3007/api/book?page=${
          currentPage + 1
        }&limit=${itemsPerPage}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );

      if (currentPage + 1 === 1) {
        const newimges = images.slice(0, 6);
        setRenderImges(newimges);
        console.log(newimges);
      } else if (currentPage + 1 === 2) {
        const newimges = images.slice(6, images.length);
        setRenderImges(newimges);
      }

      // if (currentPage + 1 === 1) {
      //   const newimges = images.slice(0, 3);
      //   setRenderImges(newimges);
      //   console.log(newimges);
      // } else if (currentPage + 1 === 2) {
      //   const newimges = images.slice(3, 6);
      //   setRenderImges(newimges);
      // } else if (currentPage + 1 === 3) {
      //   const newimges = images.slice(6, 9);
      //   setRenderImges(newimges);
      // } else if (currentPage + 1 === 4) {
      //   const newimges = images.slice(9, images.length);
      //   setRenderImges(newimges);
      // }
      setBooks(response.data.data);
      setPageCount(Math.ceil(response.data.total / itemsPerPage));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected);
  };

  useEffect(() => {
    getAllBooks();
  }, [currentPage]);

  return (
    <div id="result_bx">
      <div className="search_items">
        <SearchItems />
        <div className="item">
          <div className="grid_icons">
            <span>
              <img
                src={IMAGES.grid_icon}
                alt="pic"
                className={selectedType === "grid" ? "grid_chicked" : ""}
                onClick={() => setSelectedType("grid")}
              />
            </span>
            <span>
              <img
                src={IMAGES.list_icon}
                alt="pic"
                className={selectedType === "list" ? "list_chicked" : ""}
                onClick={() => setSelectedType("list")}
              />
            </span>
          </div>
        </div>
      </div>

      <Grid container spacing={2}>
        {loading ? (
          <div className="loader w-[100%] flex justify-center items-center p-10">
            <img className="w-[100px]" src={IMAGES.circle_preloader} alt="pic" />
          </div>
        ) : (
          <>
            {books?.map((item, index) => (
              <Grid
                item
                xs={12}
                md={selectedType === "list" ? 12 : 4}
                key={item._id}
                className={selectedType === "list" ? "list_bx" : ""}
              >
                <div key={images[index].id}>
                  <ReleaseBookCart
                    name={item.name}
                    auther={item.auther}
                    price={item.price}
                    item={item}
                    imagePath={renderImg[index]?.src}
                    LinkPath={hasToken ? (`/product-details/${item._id}`) : ('/auth/login')}
                  />
                </div>
              </Grid>
            ))}
          </>
        )}
      </Grid>

      <div className="d-flex align-items-center justify-content-center mt-5 mb-3">
        <Paginate pageCount={pageCount} onPageChange={handlePageClick} />
      </div>
    </div>
  );
};

export default ResultBx;
