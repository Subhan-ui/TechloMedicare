import { card } from "@/types/types";
import { Options, Upgrade, Downgrade } from "@/constants/react-icons";

import Chart from "../ui/chart/donutChart/DocutChart";
import Loader from "../ui/loader/Loader";
import { green, mutedRed } from "@/constants/colors";
import OnlineChart from "../ui/chart/onlineChart/OnlineChart";
import OfflineChart from "../ui/chart/offlineChart/OfflineChart";

const Card: React.FC<card> = (props) => {
  const color: string = props.percentage === "+3.11%" ? green : mutedRed;
  return (
    <div className="max:w-[358.91px] med:w-[calc(calc(100vw-260px)/3)] md:w-[calc(calc(100vw-260px)/3)] w-[calc(100vw-44px)] h-[191.22px] bg-white max:p-[22px] med:p-[14px] md:p-[7px] p-[17px] relative">
      {props.loading ? (
        <Loader />
      ) : (
        <>
          <div className="v_center justify-between mt-[2px]">
            <h1 className="font-semibold font-mukta ">{props.heading}</h1>
            <Options className="hidden med:inline" />
          </div>
          <div className="flex justify-between">
            <div>
              <h1 className="text-4xl font-bold mt-4">{props.number}</h1>

              {props.percentage !== "" && (
                <div className="absolute v_center bottom-8 gap-2 ">
                  {props.percentage === "+3.11%" ? (
                    <Upgrade
                      className={`bg-green text-white rounded-full`}
                      style={{ backgroundColor: color }}
                      size={21}
                    />
                  ) : (
                    <Downgrade
                      className="bg-mutedRed h-[21px] w-[21px] text-white rounded-full"
                      style={{ backgroundColor: color }}
                      size={21}
                    />
                  )}
                  <p className={`text-green`} style={{ color: color }}>
                    {props.percentage}
                  </p>
                </div>
              )}
            </div>

            {props.image ? (
             
              props.percentage === "+3.11%" ? (
                <div className="h-[112px] w-[164px]">
                  <OfflineChart email={props.email} />
                </div>
              ) : (
                <div className="h-[112px] w-[164px]">
                <OnlineChart email={props.email} />
                </div>
              )
            ) : props?.total?.male ? (
              <div className="mr-[41px]">
                <Chart
                  male={props?.total?.male}
                  width={119}
                  female={props?.total?.female}
                />
              </div>
            ) : (
              <></>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
