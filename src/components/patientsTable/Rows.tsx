"use client";

import { tableContent } from "@/models/table";
import Row from "./Row";
import Table from "./Table";
import { useEffect, useState } from "react";
import useGet from "@/hooks/useGet";
import axios from "axios";
import Modal from "./Modal";
import { useAppDispatch,useAppSelector } from "@/store/hooks";
import { handleChangeImages, handleChangePatient, handleNumber, selectNumber } from "@/store/features/patients/patientSlice";
import Link from "next/link";
import {
  IoSearch,
  IoAddSharp,
  IoFunnelOutline,
  IoHelpCircleOutline,
} from "react-icons/io5";
import Bar from "@/components/commonContent/TopBar";

type datatype = {
  id: string;
  name: string;
  diagnosis: string;
  image: string;
  phNo: string;
  dateOfBirth: string;
  sex:string;
  notes:string;
};

const Rows: React.FC<{ email: string | null | undefined }> = ({ email }) => {
  const [data, setData] = useState<datatype[]>([
    { id: "", name: "", diagnosis: "", image: "", phNo: "", dateOfBirth: "",sex:'' , notes:''},
  ]);
  const dispatch = useAppDispatch();
  const [show, setShow] = useState(false);
  const number = useAppSelector(selectNumber)
  const [id,setId]=useState<string>('')
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/api/patients/get/${email}`);
        setData(response.data as datatype[]);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  const handleShow = (id:string) => {
    const content = data.find(dat=>dat.id===id)
    dispatch(handleChangePatient({name:'foreName',value:content?.name.split(' ')[0]}));
    dispatch(handleChangePatient({name:'lastName',value:content?.name.split(' ')[1]}));
    dispatch(handleChangePatient({name:'dateOfBirth',value:content?.dateOfBirth}))
    dispatch(handleChangePatient({name:'sex',value:content?.sex}))
    dispatch(handleChangePatient({name:'diagnosis',value:content?.diagnosis}))
    dispatch(handleChangePatient({name:'notes',value:content?.notes}))
    dispatch(handleChangePatient({name:'phNo',value:content?.phNo}))
    dispatch(handleChangeImages(content?.image))
    setId(id)
    setShow(true);
  };
  const handleHiding = () => {
    setShow(false);
  };
  
  if(data.length>=1){
    dispatch(handleNumber(data.length))
    return (

    <>
    <Bar classN="justify-between">
        <h1 className="font-mukta font-semibold text-xl">
          Total Patients <span className="text-[#828282]">({number})</span>
        </h1>
        <div className="v_center gap-5">
          <Link href='/patients/add'>
          <IoAddSharp
            className="border p-1 h-[40px] w-[40px]"
            color="#333333"
            size={18}
          /></Link>
          <IoSearch
            className="border p-1 h-[40px] w-[40px]"
            color="#333333"
            size={22}
          />
          <IoFunnelOutline
            className="border p-1 h-[40px] w-[40px]"
            color="#333333"
            size={25}
          />
          <IoHelpCircleOutline
            className="border p-1 h-[40px] w-[40px]"
            color="#333333"
            size={26}
          />
        </div>
      </Bar>
      {show && (
        <Modal
          handleShow={() => {
            setShow((prev) => !prev);
          }}
          id={id}
        />
      )}
      <Table>
        <td colSpan={7}>
          <div className="overflow-y-auto overflow-x-hidden h-[625.64px] ">
            <table className="table-fixed w-[1122px]">
              <tbody>
                {data.map((row) => (
                  <Row
                    handleHiding={handleHiding}
                    handleShow={handleShow}
                    key={row.id}
                    id={row.id}
                    image={row.image}
                    name={row.name}
                    status="Recovered"
                    last={row.phNo}
                    next={row.dateOfBirth}
                    diagnosis={row.diagnosis}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </td>
      </Table>
    </>
  );}
};

export default Rows;
