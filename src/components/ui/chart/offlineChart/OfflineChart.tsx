"use client";

import {
  CategoryScale,
  ChartData,
  Chart as ChartJS,
  ChartOptions,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import React, { useRef } from "react";
import { Line } from "react-chartjs-2";

import { green } from "@/constants/colors";
import useAppointment from "@/hooks/useAppointment";
import { cardType } from "@/types/types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const OfflineChart = ({ email }: { email: string | null | undefined }) => {
  const chartRef = useRef<ChartJS<"line"> | null>(null);
  const events = useAppointment(email);

  const onlineConsultations: cardType[] =
    events?.filter((event: cardType) => event.online === false) || [];

  const groupByWeek = (
    appointments: cardType[]
  ): { [key: string]: cardType[] } => {
    const weeks: { [key: string]: cardType[] } = {};

    appointments.forEach((appointment) => {
      if (appointment.start) {
        const startDate = new Date(appointment.start);
        const startWeek = new Date(
          startDate.setDate(startDate.getDate() - startDate.getDay())
        );
        const weekString = startWeek.toISOString().split("T")[0];

        if (!weeks[weekString]) {
          weeks[weekString] = [];
        }
        weeks[weekString].push(appointment);
      }
    });

    return weeks;
  };

  const onlineGroupedByWeek = groupByWeek(onlineConsultations);

  const data: ChartData<"line"> = {
    labels: Object.keys(onlineGroupedByWeek),
    datasets: [
      {
        label: "Offline Consultations",
        data: Object.values(onlineGroupedByWeek).map(
          (appointments) => appointments.length
        ),
        fill: true,
        backgroundColor: (context: any) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return null;
          }

          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          );
          gradient.addColorStop(0, green);
          gradient.addColorStop(1, `${green}3b`);
          return gradient;
        },
        borderColor: green,
        borderWidth: 2,
        tension: 0.4,
        pointBackgroundColor: green,
        pointBorderColor: green,
        pointBorderWidth: 1,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };

  return (
    <div className="relative w-full h-full">
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default OfflineChart;
