import { task } from "@/models/taskCard";
import Task from "./Task";
import { CiSquarePlus } from "react-icons/ci";
import { FaChevronRight } from "react-icons/fa";

const Tasks = ()=>{
    const taskContent:task[] = [
        {id: 1, date: '24 October 2022', title: 'Sign up for covid - 19 training course for medicine'},
        {id: 2, date: '24 October 2022', title: 'Sign up for covid - 19 training course for medicine'},
        {id: 3, date: '24 October 2022', title: 'Sign up for covid - 19 training course for medicine'},
        {id: 4, date: '24 October 2022', title: 'Sign up for covid - 19 training course for medicine'},
    ]
    return (
        <div className="bg-white mt-[17px] w-[709px] px-[16.67px]">
            <div className="v_center justify-between h-[61.78px]">
                <h5 className="font-bold text-base font-mukta">Tasks</h5>
                <h4 className="v_center gap-2 font-mukta text-[#0000AC] font-semibold text-sm">New Tasks <CiSquarePlus size={24}/></h4>
            </div>
            <div className="flex flex-col gap-4">
            {taskContent.map(task=>(
                <Task 
                key={task.id}
                id={task.id}
                date={task.date}
                title={task.title}
                />

            ))}
            </div>
        <p className="font-mukta text-[#0000ac] v_center justify-end py-9 gap-3">View all <FaChevronRight className="border-2 border-gray-300 h-[17.6px] w-[17.6px]" size={17}/></p>
        </div>
    )
}

export default Tasks;

