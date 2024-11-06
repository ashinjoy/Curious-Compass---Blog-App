import { useCallback, useState } from "react";
import { axiosInstance } from "../utils/axios";

function useAxios() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const apiCall = useCallback(async (url, config) => {
    try {
        console.log('inside the api');
        
        setLoading(true);
        setError(null);
        setData(null);
        
        

        const response = await axiosInstance(url, config);
        console.log('after calling');
        
        const { success, message } = response.data;
        console.log('response',);
         
        if (!success) {
          console.log('err in throw');
          
          throw error;
        }
        const apiData = response.data;
        setData(apiData);
      } catch (error) {
        console.log('err',error);
        
        setError(error?.response?.data?.message);
      } finally {
        setLoading(false);
      }
    }, []);

  return { loading, data, error, apiCall };
}

export default useAxios;
