import React from "react";
import Row from "../formRow/FormRow";
import { typeFormAddPatient } from "@/types/types";
import useFormAddPatient from "@/hooks/useFormAddPatient";

const FormAddPatient: React.FC<typeFormAddPatient> = ({ cross }) => {
  const { detailBelow, detailTop, sex, handleChangeSex } =
    useFormAddPatient(cross);
  return (
    <>
      {detailTop.map((detail) => (
        <Row
          key={detail.id}
          name={detail.name}
          value={detail.value}
          onChange={detail.onChange}
          top={detail.top}
          cross={detail.cross}
          type={detail.type}
        >
          {detail.children}
        </Row>
      ))}
      <tr className="relative top-[125px]">
        <td>Sex</td>
        <td className="relative md:-left-8 flex gap-3">
          {sex === "male" ? (
            <button className="genderBtn bg-blue text-white" type="button">
              Male
            </button>
          ) : (
            <button
              className="genderBtn "
              type="button"
              onClick={() => handleChangeSex("male")}
            >
              Male
            </button>
          )}
          {sex === "female" ? (
            <button className="genderBtn bg-blue text-white" type="button">
              Female
            </button>
          ) : (
            <button
              className="genderBtn "
              type="button"
              onClick={() => handleChangeSex("female")}
            >
              Female
            </button>
          )}
        </td>
      </tr>
      {detailBelow.map((detail) => (
        <Row
          key={detail.id}
          name={detail.name}
          value={detail.value}
          onChange={detail?.onChange}
          onChangeTextArea={detail?.onChangeText}
          top={detail.top}
          cross={detail.cross}
          type={detail.type}
        >
          {detail.children}
        </Row>
      ))}
    </>
  );
};

export default FormAddPatient;
