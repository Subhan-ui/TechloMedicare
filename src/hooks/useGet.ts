"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const useGet = () => {
  const [data, setData] = useState<
    {
      id: string;
      name: string;
      diagnosis: string;
      image: string;
      phNo: string;
      dateOfBirth: string;
    }[]
  >([{id:'', name: "", diagnosis: "", image: "", phNo: "", dateOfBirth: "" }]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/patients/get");
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return data;
};

export default useGet;
