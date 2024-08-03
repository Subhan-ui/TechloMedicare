import { useState } from "react";

import axios from "axios";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  handleChangeImages,
  selectDateOfBirth,
  selectDiagnosis,
  selectForeName,
  selectLastName,
  selectNotes,
  selectPhNo,
  selectSex,
} from "@/store/features/patients/patientSlice";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useEdgeStore } from "@/lib/edgestore";

const usePatientCRUD = (
  id: string,
  handleShow: () => void,
  email?: string | null | undefined
) => {
  const foreName = useAppSelector(selectForeName);
  const lastName = useAppSelector(selectLastName);
  const dateOfBirth = useAppSelector(selectDateOfBirth);
  const diagnosis = useAppSelector(selectDiagnosis);
  const notes = useAppSelector(selectNotes);
  const phNo = useAppSelector(selectPhNo);
  const sex = useAppSelector(selectSex);
  const [image, setImage] = useState<File>();
  const { edgestore } = useEdgeStore();
  const dispatch = useAppDispatch();
  const [urls, setUrls] = useState<{
    url: string;
    thumbnailUrl: string | null;
  }>();
  const [loadingPost, setLoadingPost] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.patch("/api/patients/update", {
        id: id,
        firstName: foreName,
        lastName,
        dateOfBirth,
        sex,
        diagnosis,
        notes,
        phNo,
      });
      handleShow();
      toast.success("Updated Successfully!");
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    const sure = confirm("Are you sure You wan tto delete this patient?");
    if (sure) {
      try {
        setLoadingDelete(true);

        await axios.delete(`/api/patients/delete?id=${id}`);

        toast.success("Successfully removed");
        handleShow();
      } catch (error: any) {
        toast.error(error?.response?.data?.message);
      } finally {
        setLoadingDelete(false);
      }
    }
  };

  const handleChangeUrl = async () => {
    if (image) {
      const res = await edgestore.publicFiles.upload({
        file: image,
        onProgressChange: (progress) => {
          setProgress(progress);
        },
      });
      setUrls({
        url: res?.url,
        thumbnailUrl: res?.thumbnailUrl,
      });
      dispatch(handleChangeImages(urls?.url));
      handleShow();
    }
  };

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const maxSize = 1024 * 1024 * 1;

    if (file && file.size > maxSize) {
      alert("File size is too large! Maximum size allowed is 1 MB.");
      e.target.value = "";
    }
    setImage(e.target.files?.[0]);
  };

  const handlePost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoadingPost(true);
      const patientData = {
        foreName: foreName,
        lastName: lastName,
        dateOfBirth: dateOfBirth,
        sex,
        diagnosis,
        notes,
        phNo,
        url: urls?.url,
      };

      const response = await axios.post(
        `/api/patients/add/${email}`,
        patientData
      );

      toast.success("Patient Successfully added.");
      router.push("/patients");
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    } finally {
      setLoadingPost(false);
    }
  };

  return {
    loading,
    loadingPost,
    loadingDelete,
    image,
    urls,
    progress,
    handleDelete,
    handleSubmit,
    handlePost,
    handleChangeImage,
    handleChangeUrl,
  };
};

export default usePatientCRUD;
