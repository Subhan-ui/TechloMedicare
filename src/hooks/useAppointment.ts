import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { cardType, appointmentData } from "../types/types";
import toast from "react-hot-toast";

const calculateEndTime = (startDate: Date, duration: string): Date => {
  const endDate = new Date(startDate);
  endDate.setMinutes(startDate.getMinutes() + Number(duration));
  const time = moment(endDate).format("YYYY-MM-DDTHH:mm:ss");
  return moment(time).toDate();
};

const convertToDateTime = (dateString: string, timeString: string): Date => {
  const currentYear = new Date().getFullYear();
  const date = new Date(dateString);
  const [hours, minutes] = timeString.split(":").map(Number);
  date.setHours(hours, minutes, 0, 0);
  date.setFullYear(currentYear);
  const time = moment(date).format("YYYY-MM-DDTHH:mm:ss");

  return moment(time).toDate();
};

export const deletingAppointment = async (id:string)=>{
  try {
    await axios.delete(`/api/appointment/delete?id=${id}`)
    toast.success('Removed Appointment successfully')
  } catch (error:any) {
    toast.error(error?.response?.data?.message)
  }
} 

const useAppointment = (email: string | null | undefined) => {
  const [data, setData] = useState<cardType[]>([]);
  useEffect(() => {
    (async () => {
      if (email) {
        try {
          const response = await axios.get(
            `/api/appointment/get?email=${email}`
          );
          const transformedData = response?.data?.map(
            (appointment: appointmentData) => {
              const start = convertToDateTime(
                appointment?.nextDate,
                appointment?.time
              );
              const end = calculateEndTime(start, appointment?.duration);

              return {
                ...appointment,
                start: start,
                end: end,
                event_id: appointment?.id,
                title: appointment?.patientName,
              };
            }
          );
          const sortedData = transformedData.sort(
            (a:cardType, b:cardType) => a.start.getTime() - b.start.getTime()
          );

          setData(sortedData);
        } catch (error) {
          return;
        }
      }
    })();
  }, [email]);
  return data;
};

export default useAppointment;
