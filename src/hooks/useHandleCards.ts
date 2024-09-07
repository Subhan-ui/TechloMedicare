import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import { card, emailType } from "../types/types";

const useHandleCards = ({email}:emailType)=>{
    const [offline, setOffline] = useState<number>(0);
  const [online, setOnline] = useState<number>(0);
  const [total, setTotal] = useState<{
    total: number;
    male: number;
    female: number;
  }>({ total: 0, male: 0, female: 0 });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const totalPatient = await axios.get(
          `/api/patients/total?email=${email}`
        );
        setTotal(totalPatient?.data);
        const status = await axios.get(`/api/appointment/total?email=${email}`);
        setOffline(status?.data?.offline);
        setOnline(status?.data?.online);
      } catch (error: any) {
        toast.error(error?.response?.data?.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const cardData: card[] = [
    {
      id: 1,
      heading: "Offline Consultations",
      number: offline,
      percentage: "+3.11%",
      image: "/assets/dashboard/chart1.png",
      loading: loading,
    },
    {
      id: 2,
      heading: "Online Consultations",
      number: online,
      percentage: "-20.9%",
      image: "/assets/dashboard/chart2.png",
      loading: loading,
    },
    {
      id: 3,
      heading: "Total Patients",
      number: total.total,
      percentage: "",
      total: total,
      loading: loading,
    },
  ];
  return {cardData, total}
}

export default useHandleCards;