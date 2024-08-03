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

const useFormAddPatient = (cross: boolean) => {
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

  const handleChangeSex = (value: string) => dispatch(handleGender(value));

  const detailTop = [
    {
      name: "foreName",
      value: foreName,
      onChange: handleChange,
      top: "35px",
      cross: cross,
      type: "text",
      children: "Name",
      id: 1,
    },
    {
      name: "lastName",
      value: lastName,
      onChange: handleChange,
      top: "65px",
      cross: cross,
      type: "text",
      children: "Last Name",
      id: 2,
    },
    {
      name: "dateOfBirth",
      value: dateOFBirth,
      onChange: handleChange,
      top: "95px",
      cross: false,
      type: "date",
      children: "Date of Birth",
      id: 3,
    },
  ];
  const detailBelow = [
    {
      name: "diagnosis",
      value: diagnosis,
      onChange: handleChange,
      top: "155px",
      cross: false,
      type: "text",
      children: "Diagnosis",
      id: 1,
    },
    {
      name: "notes",
      value: notes,
      onChangeText: handleChangeText,
      top: "185px",
      cross: false,
      type: "textarea",
      children: "Notes",
      id: 2,
    },
    {
      name: "phNo",
      value: phNo,
      onChange: handleChange,
      top: "205px",
      cross: false,
      type: "text",
      children: "Phone Number",
      id: 3,
    },
  ];
  return { detailBelow, detailTop, sex, handleChangeSex };
};

export default useFormAddPatient;
