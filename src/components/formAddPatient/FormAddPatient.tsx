import React from "react";

import Row from "../formRow/FormRow";
import useFormAddPatient from "@/hooks/useFormAddPatient";
import { typeFormAddPatient } from "@/types/types";
import GenderButton from "../ui/genderButton/GenderButton";

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
      <GenderButton sex={sex} handleChangeSex={handleChangeSex} />
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
