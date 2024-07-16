"use client";

import Row from "./Row";
import Table from "./Table";
import Modal from "./Modal";
import { useAppDispatch } from "@/store/hooks";
import { handleNumber } from "@/store/features/patients/patientSlice";
import usePatients from "@/hooks/usePatients";
import Loader from "../ui/Loader";
import { emailType } from "@/models/types";

const Rows: React.FC<emailType> = ({ email }) => {
  const dispatch = useAppDispatch();
  const { handleHiding, handleShow, id, show, data, loading } =
    usePatients(email);
  if (data.length >= 0) {
    dispatch(handleNumber(data.length));
    return (
      <>
        <Table>
        {show && <Modal handleShow={handleHiding} id={id} />}
          <td colSpan={7}>
            <div className="overflow-y-auto overflow-x-hidden h-[625.64px] ">
              <table className="table-fixed w-[1122px]">
              {loading ? (
                <Loader />
              ) : (
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
              )} 
              </table>
            </div>
          </td>
        </Table>
      </>
    );
  }
};

export default Rows;
