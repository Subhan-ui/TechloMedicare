import { useState, useEffect } from "react";
import {recover, awaiting, treat} from '../constants/colors'

const useChooseColor = (status:string)=>{
    const [color, setColor] = useState(recover);
  useEffect(() => {
    if (status === "Recovered") {
      setColor(recover);
    } else if (status === "Awaiting Surgery") {
      setColor(awaiting);
    } else if ("On Treatment") {
      setColor(treat);
    }
  }, [status]);
  return {color}
}

export default useChooseColor;