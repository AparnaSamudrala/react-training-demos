import { useState, useEffect } from "react";
import axios from 'axios';

const useFetch = (url) => {
    const [data,setData] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
    const getProducts = async () => {
        setLoading(true);
        const response = await axios.get(url);
        console.log(response);
        setData(response.data);
        setLoading(false);
    };
      if (!data.length) getProducts();
  }, [url]);

  return [data,loading];
};

export default useFetch;

