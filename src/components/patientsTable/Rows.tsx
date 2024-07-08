"use client";

import Row from "./Row";
import Table from "./Table";
import Modal from "./Modal";
import { useAppDispatch } from "@/store/hooks";
import { handleNumber } from "@/store/features/patients/patientSlice";
import usePatients from "@/hooks/usePatients";

const Rows: React.FC<{ email: string | null | undefined }> = ({ email }) => {
  const dispatch = useAppDispatch();
  const { handleHiding, handleShow, id, show, data } = usePatients(email);
  if (data.length >= 1) {
    dispatch(handleNumber(data.length));
    return (
      <>
        {show && <Modal handleShow={handleHiding} id={id} />}
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
    );
  }
};

export default Rows;
