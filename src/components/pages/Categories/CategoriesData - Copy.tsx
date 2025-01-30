import { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import { useDispatch } from "react-redux";
import { setAllCategories } from "src/redux/categoriesSlice";
import { Link } from "react-router-dom";
import catug1 from "../../../assets/images/png/categories/catug_1.jpg";
import catug2 from "../../../assets/images/png/categories/catug_it.jpg";
import catug3 from "../../../assets/images/png/categories/catug_network.jpg";
import catug4 from "../../../assets/images/png/categories/catug_love.jpg";
import catug5 from "../../../assets/images/png/categories/catug_drama.jpg";
import catug6 from "../../../assets/images/png/categories/catug_story.jpg";
import catug7 from "../../../assets/images/png/categories/catug_sport.jpg";
import catug8 from "../../../assets/images/png/categories/catug_fantasy.jpg";
import { Box, Skeleton } from "@mui/material";
import "./CategoriesData.scss";

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

const CategoriesData = () => {
  const [categories, setCategories] = useState<Category[]>(
    new Array(1).fill(undefined)
  );
  const [loader, setLoading] = useState(false);
  const dispatch = useDispatch();

  const getAllCategories = async () => {
    try {
      setLoading(true);
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
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <div id="categories_container" className="container_bx pt-5">
      <h3>Categories</h3>

      <div className="mb-5 pt-3">
        <Grid container spacing={2}>
          {categories?.map((item, index) => (
            <>
              {loader ? (
                <Grid item md={12}>
                  <Box>
                    <Skeleton animation="wave" variant="text" className="w-[100%]" />
                    <Skeleton animation="wave" variant="rectangular" className="w-[100%]" height={118} />
                  </Box>
                </Grid>
              ) : (
                <Grid item xs={12} md={4} key={item?._id}>
                  <div className="Category_item">
                    <Link to={`/category-details/${item?._id}`}>
                      <div key={images[index]?.id} className="image-item">
                        <img
                          src={images[index]?.src}
                          alt={images[index]?.alt}
                        />
                      </div>
                      <div className="text">{item?.title}</div>
                    </Link>
                  </div>
                </Grid>
              )}
            </>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default CategoriesData;
