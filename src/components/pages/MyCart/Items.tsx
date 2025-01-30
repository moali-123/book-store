import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import IMAGES from "@assets/images/images";
import { toast } from 'react-toastify';

const Items = () => {
  const [itemsList, setItemsList] = useState([]);
  const [bookDetails, setBookDetails] = useState({});
  const [loading, setLoading] = useState<boolean>(true);

  const getAllFavItems = async () => {
    try {
      const response = await axios.get(
        `https://upskilling-egypt.com:3007/api/basket`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );
      setItemsList(response.data.items);
      console.log(response.data.items);

      // Fetch details for all favorite books
      const testnm = response.data.items.map((item) => item.book);
      console.log("testnm", testnm);

      await fetchBookDetails(response.data.items.map((item) => item.book));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchBookDetails = async (bookIds) => {
    try {
      const promises = bookIds.map((id) =>
        axios.get(`https://upskilling-egypt.com:3007/api/book/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        })
      );
      const responses = await Promise.all(promises);
      const bookDetails = responses.reduce((acc, response) => {
        acc[response.data._id] = response.data;
        return acc;
      }, {});
      console.log("bookDetails", responses);

      setBookDetails(bookDetails);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteFavListItem = async (id) => {
    try {
      const response = await axios.delete(
        `https://upskilling-egypt.com:3007/api/book/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );
      toast.success(response?.data?.message || "category deleted successfuly");
      getAllFavItems();
      console.log(response);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data?.message);
      }
    }
  };

//   const getMovies = async () => {
//     try {
//       const response = await axios.get(
//         `https://freetestapi.com/api/v1/movies`
//       );
//       console.log( "movies", response);
//     } catch (error) {
//       if (error instanceof AxiosError) {
//         toast.error(error.response?.data?.message);
//       }
//     }
//   };

  useEffect(() => {
    getAllFavItems();
    //getMovies();
  }, []);

  return (
    <div id="fav_list">
      {loading ? (
        <div className="loader w-[100%] flex justify-center items-center p-10">
          <img className="w-[100px]" src={IMAGES.circle_preloader} alt="pic" />
        </div>
      ) : (
        <ul>
          {itemsList?.map((fav) => (
            <li key={fav._id}>
              <strong>{bookDetails[fav.book]?.name}</strong>
              <p>{bookDetails[fav.book]?.price}</p>
              <span className="delete-icon" onClick={() => deleteFavListItem(fav.book)}>delete</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Items;
