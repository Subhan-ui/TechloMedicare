import { useState, useEffect } from "react";

import {recover, awaiting, treat} from '../constants/colors'
import axios from "axios";
import toast from "react-hot-toast";

const useChooseColor = (status?:number, email?:string|null, id?:string)=>{
    const [color, setColor] = useState(recover);
    const [text,setText] = useState<string>('')
    const [loading,setLoading] = useState(false)
  useEffect(() => {
    if (status === 3) {
      setColor(recover);
      setText("Recovered")
    } else if (status === 1) {
      setColor(awaiting);
      setText("Awaiting Surgery")
    } else {
      setText("On Treatment")
      setColor(treat);
    }
  }, [status]);

  const handleStatus =async ()=>{
    try {
      setLoading(true)
      await axios.put(`/api/patients/add/${email}`,{
        id:id
      })
      toast.success("Status Changed")
    } catch (error:any) {
      toast.error(error?.response?.data?.message)
    } finally{
      setLoading(false)
    }

  }
  return {color, text, handleStatus, loading}
}

export default useChooseColor;