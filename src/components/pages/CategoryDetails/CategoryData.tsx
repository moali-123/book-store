import { useState, useEffect } from "react";
//import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import "./CategoryData.scss";
import { useSelector } from "react-redux";

const CategoryData = () => {
  //const { t } = useTranslation();
  // const initialState = {
  //   id: null,
  //   title: "",
  //   name: "",
  // };

  //const [category, setCategory] = useState(initialState);
  const [books, setBooks] = useState([]);
  const { _id } = useParams();
  const { categories } = useSelector((state) => state?.categories);
  const selectedItem = categories?.find((item) => item?._id === _id);
  useEffect(() => {
    if (selectedItem?.books?.length) {
      setBooks(selectedItem?.books);
    }
  }, []);

  return (
    <div className="container_bx">
      <div>Category Info</div>
      <h3>{selectedItem?.title}</h3>
      <h4>{}</h4>
      <ul>
        {books?.map((item) => (
          <li key={item?._id}>{item?.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryData;
