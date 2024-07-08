import React from "react";
import Row from "./FormRow";
import {
  handleChangePatient,
  handleGender,
  selectDateOfBirth,
  selectDiagnosis,
  selectForeName,
  selectLastName,
  selectNotes,
  selectPhNo,
  selectSex,
} from "@/store/features/patients/patientSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

const FormAddPatient: React.FC<{ handleShow: () => void,cross:boolean }> = ({
cross
}) => {
  const foreName = useAppSelector(selectForeName);
  const lastName = useAppSelector(selectLastName);
  const dateOFBirth = useAppSelector(selectDateOfBirth);
  const diagnosis = useAppSelector(selectDiagnosis);
  const notes = useAppSelector(selectNotes);
  const phNo = useAppSelector(selectPhNo);
  const sex = useAppSelector(selectSex);
  const dispatch = useAppDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(handleChangePatient({ name, value }));
  };

  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    dispatch(handleChangePatient({ name, value }));
  };
  return (
    <>
     
      <Row
        name="foreName"
        value={foreName}
        onChange={handleChange}
        top="35px"
        cross={cross}
        type="text"
      >
        Name
      </Row>
      <Row
        name="lastName"
        value={lastName}
        onChange={handleChange}
        top="65px"
        cross={cross}
        type="text"
      >
        Last name
      </Row>
      <Row
        name="dateOfBirth"
        value={dateOFBirth}
        onChange={handleChange}
        top="95px"
        cross={false}
        type="date"
      >
        Date of Birth
      </Row>
      <tr className="relative top-[125px]">
        <td>Sex</td>
        <td className="relative left-10 flex gap-3">
          {sex === "male" ? (
            <button className="genderBtn bg-[#0000ac] text-white" type="button">
              Male
            </button>
          ) : (
            <button
              className="genderBtn "
              type="button"
              onClick={() => dispatch(handleGender("male"))}
            >
              Male
            </button>
          )}
          {sex === "female" ? (
            <button className="genderBtn bg-[#0000ac] text-white" type="button">
              Female
            </button>
          ) : (
            <button
              className="genderBtn "
              type="button"
              onClick={() => dispatch(handleGender("female"))}
            >
              Female
            </button>
          )}
        </td>
      </tr>
      <Row
        name="diagnosis"
        value={diagnosis}
        onChange={handleChange}
        top="155px"
        cross={false}
        type="text"
      >
        Diagnosis
      </Row>
      <Row
        name="notes"
        value={notes}
        onChangeTextArea={handleChangeText}
        top="185px"
        cross={false}
        type="textarea"
      >
        Notes
      </Row>
      <Row
        name="phNo"
        value={phNo}
        onChange={handleChange}
        top="205px"
        cross={false}
        type="text"
      >
        Phone Number
      </Row>
    </>
  );
};

export default FormAddPatient;
