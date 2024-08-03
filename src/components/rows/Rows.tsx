"use client";

import Row from "../row/Row";
import Table from "../table/Table";
import Modal from "../patientsTableModal/Modal";
import { useAppDispatch } from "@/store/hooks";
import { handleNumber } from "@/store/features/patients/patientSlice";
import usePatients from "@/hooks/usePatients";
import Loader from "../ui/loader/Loader";
import { emailType } from "@/types/types";

const Rows: React.FC<emailType> = ({ email }) => {
  const dispatch = useAppDispatch();
  const { handleHiding, handleShow, id, show, data, loading } =
    usePatients(email);
  if (data.length >= 0) {
    dispatch(handleNumber(data.length));
    return (
      <>
        {show && <Modal handleShow={handleHiding} id={id} />}
        {loading ? (
          <Loader />
        ) : (
          <Table>
            <td colSpan={7}>
              <span className="overflow-y-auto overflow-x-hidden h-[625.64px] ">
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
              </span>
            </td>
          </Table>
        )}
      </>
    );
  }
};

export default Rows;
