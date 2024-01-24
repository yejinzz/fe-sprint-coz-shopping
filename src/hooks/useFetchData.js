import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { productActions } from "../store/productSlice";

const useFetchData = (url) => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        // console.log(res);
        dispatch(productActions.setProductData(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);
};

export default useFetchData;
