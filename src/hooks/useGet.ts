"use client";

import axios from "axios";
import { useEffect, useState } from "react";

import { patientType } from "../types/types";

const useGet = () => {
  const [data, setData] = useState<patientType[]>([
    { id: "", name: "", diagnosis: "", image: "", phNo: "", dateOfBirth: "" },
  ]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/patients/get");
        setData(response?.data);
      } catch (error) {
        return;
      }
    })();
  }, []);
  return data;
};

export default useGet;
